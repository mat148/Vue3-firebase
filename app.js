const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'Lorem ipsum',
            author: 'Lorem',
            age: '0'
        }
    },
    methods: {
        /*changeTitle(title) {
            this.title = title
        }*/
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')