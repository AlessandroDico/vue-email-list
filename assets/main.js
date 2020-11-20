// scaricare libreria axios
var app = new Vue ({
    el: '#root',
    data:{
        //inizializiamo la mail a false perchè essendo di tipo diverso rispetto alla mail (la mail è una stringa e false è un booleano) possiamo poi nell HTML visualizzare la nostra mail con la condizione del v-if !== in modo da essere più 'selettivi' sul controllo (gli aggiungerò anche isNaN e forse altro)

        // email: false,
        allEmail: [],
    },
    methods:{
        funzione(){
            let self = this;
            for (var i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(elemento){
                    self.allEmail.push(elemento.data.response);
                })
            }
        }

    },
    mounted(){
        console.log('ciao');
        const self = this;
//SOLUZIONE PER CHIAMARE UNA SOLA VOLTA IL SERVER
        // axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        //     .then(function(elemento){
        //         console.log(elemento);
        //         console.log(elemento.data);
        //         console.log(elemento.data.response);
        //         console.log(self.email);
        //         self.email = elemento.data.response;
        //     })

// IN QUESTO MODO CREA 10 VOLTE LA STESSA EMAIL
        // axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        //     .then(function(elemento){
        //         for (var i = 0; i < 10; i++) {
        //             self.allEmail.push(elemento.data.response);
        //         }
        //     })

        console.log(self.allEmail);

// CREO UNA FUNZIONE IN METHODS CHE FA PER 10 VOLTE L'AZIONE DI CHIAMARE IL SERVER E POI RICHIAMO IN MOUNTED LA FUNZIONE
        this.funzione();



    },



});
