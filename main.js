// Create Vue

let app = Vue.createApp({

    data: function() { return { 

        // Idk why I always do this
        name: 'app', 
        // Notification state management bool
        isNotifying: false,
        // Data-API class.
        dapi: new Dapi(),
        // The Current (not the entire database hopefully) List of Parts based on the search criteria
        activeList: [],
        // Current Mode of the App
        mode: 1,
        // Current User
        currentUser: new User('default', 1)

    } },
    methods: {

        // Bring up notification
        Notify() {

            this.isNotifying = true;

            // Make notification go away.
            setTimeout(() => {
                
                this.isNotifying = false;
            }, 1000);
        },
        // Search by name in DAPI
        Search(e) {

            this.activeList = this.dapi.SearchForPart(e); return this.activeList;
        },
        ToggleMode() { 
            this.mode = !this.mode;
            this.currentUser.GetRole().UpdateRole(this.mode - 0);
        },
        UpdateUserInfo(i, dat) {

            this.currentUser.GetRoleType().EditInfo(i, dat);
            return 0;
        },
        GetUserInfo(i) {

            return this.currentUser.GetRoleType().GetInfo(i);
        }
    },
})




app.component('parts-mode', {

    template: `<div id='parts-mode' v-if='IsActiveMode'>
                <h1>Parts Mode</h1>
                <lookup-box></lookup-box>
                <success-notice-bar></success-notice-bar>
            </div>`,
    computed: {
        IsActiveMode() {
            return this.$root.mode == 1;
        }
    }
})



app.component('service-mode', {

    template: `<div id='service-mode' v-if='IsActiveMode'>
                <h1>Service Mode</h1>
                <h2 id='service-mode-app-title'>Decisiv Maker</h2>
                <part-action-options></part-action-options>
                <p id='warning-tag'>Work In Progress...</p>
            </div>`,
    computed: {
        IsActiveMode() {
            return this.$root.mode == 0;
        }
    }
})


app.component('part-action-options', {

    template: `<div id='part-action-options'>
                <button class='part-action-button'>Delivery</button>
                <button class='part-action-button'>Quote</button>
            </div>`
})

app.component('user-icon', {

    template: `<div>
                    <img id='user-icon' @click='ShowUserInfo' src='./user-solid.svg' />
                    <div id='user-info-tab' v-if='infoTabShowing'>
                        <h2>User Profile</h2>
                        <hr>
                        <p>User: {{GetName}}</p>
                        <div class='parts-user-info' v-if='GetMode'>
                            <p>---Partsperson---</p>
                        </div>
                        <div class='service-user-info' v-if='!GetMode'>
                            <div class='info-box'>
                                <p>RO: {{this.$root.currentUser.GetRO()}}</p>
                                <input type='text' v-model='currentEditText' v-if='this.activeField == 0' class='user-option-input'>
                                <img class='edit-button' @click='EditField(0)' src='./pencil-solid.svg'/>
                            </div>
                            <div class='info-box'>
                                <p>Bay: {{this.$root.currentUser.GetBay()}}</p>
                                <input type='text' v-model='currentEditText' v-if='this.activeField == 1' class='user-option-input'>
                                <img class='edit-button' @click='EditField(1)' src='./pencil-solid.svg'/>
                            </div>
                        </div>
                    </div>
                </div>`,
    data: () => { return { 
        infoTabShowing: false,
        activeField: -1,
        currentEditText: '',
        infoLabels: ['_ro', '_bay'],
    }} ,
    methods: {
        ShowUserInfo() {
            this.infoTabShowing = !this.infoTabShowing;
        },
        EditField(i) {
            
            if(this.activeField == i) { this.UpdateInfo(i); this.activeField = -1; this.currentEditText = ''; }
            else this.activeField = i;  
        },
        UpdateInfo(i) {

            this.$root.UpdateUserInfo(this.infoLabels[i], this.currentEditText)
        }
    },
    computed: {
        
        GetMode() {

            return this.$root.mode == 1
        },
        GetName() {

            return this.$root.currentUser.GetName();
        },
    }
})


// List and Search --- Holds all of the databoxes with the part numbers. Also holds the searchbar and transmits a function for it (FINALLY)

app.component('lookup-box', {

    template: `<div id='lookup-box' :onload='SearchList()'>
                    <div id='menu-bar'>
                        <searchbar @search-list='(i) => { this.arr = this.$root.Search(i);}'></searchbar>
                    </div>
                    <div id='datasquare-list'>
                        <datasquare v-for='(part, i) in arr' :title="arr[i].title" :copydata="arr[i].copydata"></datasquare>
                    </div>
                </div>`
                ,
    data: function() { return {  

        // Search By default is all the parts
        arr: this.$root.Search(),
    }},
    methods: {

        // Load the list based on the text in the searchbar
        SearchList(input) {

            this.$root.Search(input);
            arr = this.$root.activeList
        }
    }
})





// DataSquare  --- Is a box with the part name in it, once clicked the part number of said named part will be copied to the clipboard of the user ready to paste.

app.component('datasquare', {

    template: `<div class='datasquare' @click='CopyToClipboard()'>{{title}}</div>`,
    props: ['title', 'copydata'],
    methods: {

        CopyToClipboard() {

            navigator.clipboard.writeText(this.copydata);
            this.$root.Notify();
        }
    }
})





// Copy Confirmation --- Little notification that lets the user know that the part number has been copied.

app.component('success-notice-bar', {

    template: `<div id='success-notice-bar' v-if='this.$root.isNotifying'>Copied to Clipboard!</div>`
})





// Part Search Bar --- Pain in my fucking ass, lets the user input text and narrow down the parts list based on what they write.

app.component('searchbar', {

    template: `<div id='searchbar'>
                <input placeholder="Which Part?" v-model='searchPhrase' @keyup='Search()'></input>
            </div>`,
    data: function() { return {

        searchPhrase: ''
    } },
    methods: {

        Search() {

            this.$emit('search-list', this.searchPhrase)
        }
    }

})



// Toggle between service and parts mode;
app.component('mode-toggle', {

    template: `<div id='mode-toggle' @click='ToggleMode()'>
                    <h2>Toggle Mode</h2>
                </div>`,
    methods: {
        ToggleMode() {
            this.$root.ToggleMode();
        }
    }
})



// Mount --- Moment of truth.

app.mount('main');