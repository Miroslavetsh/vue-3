const App = {
    data() {
        return {
            // counter: 0,
            // title: 'Counter'
            title: 'ToDo List',
            placeholderString: 'Please, enter your note here',
            inputValue: '',
            notes: ['Note 1', 'Note 2'],
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        addNewNote() {
            if(this.inputValue) {
                this.notes.push(this.inputValue)
                this.inputValue= ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        // inputKeyPress(event) {
        //     if(event.key === 'Enter') {
        //         this.addNewNote()
        //     }
        // }
        removeNote(idx) {
            this.notes.splice(idx, 1)
        },
        // doubleAmount() {
        //     console.log('doubleAmount')
        //     return this.notes.length * 2
        // }
    },
    computed: {
        doubleAmountComputed() {
            // console.log('doubleAmountComputed')
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {

        }
    }
}

Vue.createApp(App).mount('#app')