const { createApp } = Vue

createApp({

    data() {
		return {

            message: "",

	        todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },

                {
                    text: 'Fare la spesa',
                    done: true
                },
                
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
		}
    },

    methods: {

        addTask() {
            this.todos.unshift
            ({
                text: this.message,
                done: false
            });
            this.message =""
        },

    }
}).mount('#app')



