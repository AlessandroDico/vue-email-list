// scaricare libreria axios
var app = new Vue ({
    el: '#root',
    data:{
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
