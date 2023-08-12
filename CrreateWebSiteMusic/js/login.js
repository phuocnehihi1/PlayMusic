const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const urlApi = ' http://localhost:3000/user';

 const user_mail = $('.user_mail');
 const user_password = $('.user_password');
 const login =$('.btn-submit');
// FuntionCheck Email
 function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
    return emailPattern.test(email);
}
function getAPI(callback){
    fetch(urlApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}


function handleEvent(){
    login.onclick = function(){
        const mail = user_mail.value;
        const password = user_password.value;
       // if(validateEmail(mail)){
            getAPI(function(result){
                const i = 0;
                for(; result.length; i++){
                    if(mail == result[i].email){
                       console.log(result)
                    }
                }
            })


      //  }else{
        //    alert("d......");
        //}
        

    }
}


function start(){
    handleEvent();
    const apiUrl = "your_api_url_here"; // Replace with your API URL
    getAPI();
}
start();