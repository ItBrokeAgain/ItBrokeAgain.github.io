// Create Vue

let app = Vue.createApp({

    data: function() { return { 

        name: 'app', 
        isNotifying: false,
        dapi: new Dapi()

    } },
    methods: {

        Notify() {

            this.isNotifying = true;

            setTimeout(() => {
                
                this.isNotifying = false;
            }, 1000);
        }
    }
})





// List and Search

app.component('lookup-box', {

    template: `<div id='lookup-box'>
                    <h1>Easy Parts Paste</h1>
                    <div id='menu-bar'>

                    </div>
                    <div id='datasquare-list'>
                        <datasquare v-for='(part, i) in arr' :title="arr[i].title" :copydata="arr[i].copydata"></datasquare>
                    </div>
                </div>`,
    data: function() { return {  

        arr: this.$root.dapi.LoadParts()
    }}
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


// Mount

app.mount('main');