// Create Vue

let app = Vue.createApp({

    data: function() { return { 

        name: 'app', 
        isNotifying: false,
        dapi: new Dapi(),
        activeList: []

    } },
    methods: {

        Notify() {

            this.isNotifying = true;

            setTimeout(() => {
                
                this.isNotifying = false;
            }, 1000);
        },
        Search(e) {

            this.activeList = this.dapi.SearchForPart(e); return this.activeList;
        },
        Load() { this.activeList = this.dapi.LoadParts();  return this.activeList; }
    },
})





// List and Search

app.component('lookup-box', {

    template: `<div id='lookup-box' :onload='LoadList()'>
                    <div id='menu-bar'>
                        <searchbar @search-list='(i) => { this.arr = this.$root.Search(i);}'></searchbar>
                    </div>
                    <div id='datasquare-list'>
                        <datasquare v-for='(part, i) in arr' :title="arr[i].title" :copydata="arr[i].copydata"></datasquare>
                    </div>
                </div>`
                ,
    data: function() { return {  

        arr: this.$root.Search(),
    }},
    methods: {

        LoadList() {

            this.$root.Search();
            arr = this.$root.activeList;
        },
        SearchList(input) {

            this.$root.Search(input);
            arr = this.$root.activeList
        }
    }
})






// DataSquare 

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





// Copy Confirmation 

app.component('success-notice-bar', {

    template: `<div id='success-notice-bar' v-if='this.$root.isNotifying'>Copied to Clipboard!</div>`
})




// Part Search Bar
app.component('searchbar', {

    template: `<div id='searchbar'>
                <input placeholder="What do you need?" v-model='searchPhrase' @keyup='Search()'></input>
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



// Mount

app.mount('main');