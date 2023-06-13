const { createApp } = Vue;

createApp({
    data() {
        return {
            userNumber: '',
            pcNumber: '',
        }
    },

    methods:{
        // getNewRandomNumber(){
        // }

    },

    created(){
        // ? quando l'applicazione è stata creata e ancora non è montata
        // this.getNewRandomNumber();

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