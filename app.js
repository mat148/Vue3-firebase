const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.google.com',
            showBooks: true,
            books : [
                { title: 'Name of the wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: false },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: false }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks =  !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    }
})

app.mount('#app')