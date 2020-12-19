const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books : [
                { title: 'Name of the wind', author: 'Patrick Rothfuss' },
                { title: 'the way of kings', author: 'brandon sanderson' },
                { title: 'the final empire', author: 'brandon sanderson' }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks =  !this.showBooks
        }
    }
})

app.mount('#app')