const resultUser = "http://localhost:3000/user";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
/*/ Form  Sign up

*/

const user_name = $('.user_namere-name');
const user_emai = $('.user_emai');
const user_password = $('.user_password');
const re_user_password = $('.re_user_password');
const use_phone = $('.use_phone');
const btn_submit = $('.btn-submit');

function start(){
    handleEvent();
}


// 
function getResultuser(callback){
    fetch(resultUser)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

// Post API localhost3000


function CreateUser(data, callback) {
    const object = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },                  // HTTP method (POST)
        body: JSON.stringify(data)         // Request body in JSON format
    }
    console.log(object.body)
    fetch(resultUser,object)
    .then(function(response){
        return response.json();
 
    })
    .then(callback);

}
function validateEmail(email) {
    // Regular expression to match email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    return emailPattern.test(email);
}

function handleEvent() {
    btn_submit.onclick = function () {
        const name = user_name.value;
        const email = user_emai.value;
        const password = user_password.value;
        const re_password = re_user_password.value;
        const contact = use_phone.value;    
        if (name !== "" && email !== "" && password !== "" && re_password !== "" && contact !== "") {
            
            if (password === re_password) {
                if(validateEmail(email)){
                    const formData = {
                        name: name,
                        email: email,
                        password: password,
                        contact: contact
                    };
                    console.log(formData);
                    CreateUser(formData);
                     alert("You have successfully created an account"); 
                }else{
                    alert("Inappropriate email format "); 
                }     
            } else {
                alert("Password not Match");
                user_password.focus();
            }
        } else {
            alert("Enter full information");
            if(name == ""){
                user_name.focus();
            }else if(email == ""){
                user_emai.focus();
            }else if(password == ""){
                user_password.focus();
            }else if(re_password ==""){
                re_user_password.focus();
            } else if(contact == ""){
                use_phone.focus();
            }
        }
    };
}
// Start Call Api User 
start();