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

// Check value Number
function validateNumber(number){
    var numberPattern = /^[0-9]+$/;
    return  numberPattern.test(number);
}
// Dem Vlue
function valueNumbe(number){
    for(let i = 0; i < number.length; i++){
        if(isNaN(parseInt(number[i]))){
            return false;
        }
    }
    return true;
}
function validatePassword(password){
    var passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordPattern.test(password)
}
function handleEvent() {
    const status = false;
    btn_submit.onclick = function () {
        const name = user_name.value;
        const email = user_emai.value;
        const password = user_password.value;
        const re_password = re_user_password.value;
        let contact = use_phone.value;    
        if (name !== "" && email !== "" && password !== "" && re_password !== "" && contact !== "") {
            
            if (password === re_password) {
                if(validatePassword(password) && password.length >=8){
                // if check Formaty email
                    if(validateEmail(email)){
                        getResultuser(function(results){
                            const CheckisEmail = results.some(function(isEmail){
                            return  isEmail.email === email;
                            })
                            if(!CheckisEmail){
                                if(valueNumbe(contact) && contact.length === 10){
                                const data = {
                                    name: name,
                                    mail: email,
                                    password: password,
                                    contact: contact
                                }
                                CreateUser(data);
                                alert("Account successfully created")
                            
                                }else{

                                    alert("Your Phone format is incorrect, please re-enter it");
                                    use_phone.focus();
                                }

                            }else{
                                alert("Email already exists");
                            }
                        })
                    }
                // else  format email
                    else{
                        alert("Your email format is incorrect, please re-enter it");
                        user_emai.focus();
                    }
                }else{
                    alert("Format Your password is incorrect, please min 1 capital letter 1 special character and 1 number, minimum length 8 characters");
                    user_password.focus();
                }  
                } else {
                    alert("Password not Match");
                    user_password.focus();
                }
            
            } else {
               
                if(name == ""){
                    alert("Enter Name information");
                    user_name.focus();
                }else if(email == ""){
                    alert("Enter Email information");
                user_emai.focus();
                }else if(password == ""){
                    alert("Enter Password information");
                    user_password.focus();
                    
                }else if(re_password ==""){
                    re_user_password.focus();
                    alert("Enter Re Password information");
                } else if(contact == ""){
                    alert("Enter Phone Number information");
                    use_phone.focus();
                }
            }
        };
    }
// Start Call Api User 
start();
