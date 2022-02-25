const app = new Vue(
    {
        el: '#app',
        data: {
            
            randomEmails: [],
           
           
        },

        mounted() {
            
            
            /* generate random emails*/
            for(let i=0;i<10;i++){

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.randomEmails.push(response.data.response);
                    
                    console.log(this.randomEmails)
                });
            }

        }
    }
)


