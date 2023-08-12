const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const urlApi = ' http://localhost:3000/user';

 const user_mail = $('.user_mail');
 const user_password = $('.user_password');
 const login =$('.btn-submit');
 const error_active = $('header .left_bx1 .content .l-card .error');

// FuntionCheck Email
 function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
    return emailPattern.test(email);
}
function getAPI(callback){
    const object ={

        method: "GET", // Đặt phương thức là GET
        headers: {
            "Content-Type": "application/json" // Đặt header cho yêu cầu (tuỳ chọn)
        }
    }
    fetch(urlApi,object)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}


function handleEvent(){
    login.onclick = function(){
        const mail = user_mail.value;
        const password = user_password.value;
       if(validateEmail(mail)){
            error_active.classList.remove('active');
            
            getAPI(function(result){

                for(const user of result){
                    if(user.email === mail && user.password === password){
                        console.log(user.id);
                        error_active.classList.remove('active');
                    }else{
                        error_active.classList.add('active');
                        error_active.innerHTML = "The email of the password is incorrect";

                    }
                }
            })

       }else{
           error_active.classList.add('active');
        }
        

    }
}


function start(){
    handleEvent();
    const apiUrl = "your_api_url_here"; // Replace with your API URL
    getAPI();
}
start();