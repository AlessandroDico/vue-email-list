// scaricare libreria axios
var app = new Vue ({
    el: '#root',
    data:{
        //inizializiamo la mail a false perchè essendo di tipo diverso rispetto alla mail (la mail è una stringa e false è un booleano) possiamo poi nell HTML visualizzare la nostra mail con la condizione del v-if !== in modo da essere più 'selettivi' sul controllo (gli aggiungerò anche isNaN e forse altro)
        email: false,
    },
    methods:{

    },
    mounted(){
        console.log('ciao');
        const self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(elemento){
                console.log(elemento);
                console.log(elemento.data);
                console.log(elemento.data.response);
                console.log(self.email);
                self.email = elemento.data.response;
            })
    },



});
