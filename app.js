const app = Vue.createApp({
    data() {
        return {
            title: 'Lorem ipsum',
            author: 'Lorem',
            age: '0'
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount('#app')