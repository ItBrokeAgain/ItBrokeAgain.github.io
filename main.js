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
        activeList: []

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
    },
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





// Mount --- Moment of truth.

app.mount('main');