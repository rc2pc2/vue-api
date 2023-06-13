const { createApp } = Vue;

createApp({
    data() {
        return {
            userNumber: '',
            pcNumber: '',
        }
    },

    methods:{


    },

    created(){
        // ? this hook is executed at the creation of this Vue instance
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then( (response) => {
            // § se e quando il server risponde
            const result = response.data;
            console.log(result.response);
            console.log(this);

            this.userNumber = result.response;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
        .then( (response) => {
            // § se e quando il server risponde
            const result = response.data;
            console.log(result.response);
            console.log(this);

            this.pcNumber = result.response;
        });

    }
}).mount('#app');