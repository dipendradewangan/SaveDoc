// signUp function code start

function signUp(){
    var name = btoa(document.getElementById("name").value);
    var email = btoa(document.getElementById("email").value);
    var password = btoa(document.getElementById("password").value);
    var mobile = btoa(document.getElementById("mobile").value);
    var signUpObject = {name:name,email:email,password:password,mobile:mobile};
    var signUpData = JSON.stringify(signUpObject);
    if(name != "" && email != "" && password != "" && mobile != ""){
        localStorage.setItem(email,signUpData);
        document.getElementById("signUpMessage").style.display= "inline-block";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("mobile").value = "";
        setTimeout(function(){
            document.getElementById("signUpMessage").style.display = "none";
        }, 3000);
        return false;
    }
    
}

// signUp function code end






// login function code start

function login(){
    var username = btoa(document.getElementById("username").value);
    var loginPass = btoa(document.getElementById("loginPass").value);
    var loginObj = {username:username,paswrd:loginPass};
    var loginData = JSON.stringify(loginObj);
    sessionStorage.setItem(username,loginData);
    var sessionData = sessionStorage.getItem(username);
    var userDetails = JSON.parse(sessionData);

    if(localStorage.getItem(userDetails.username) == null){
        alert("user not found");
    }
    else{
        if(localStorage.getItem(userDetails.username).match(loginPass)){
            location.replace("profile/profilePage.html");
            sessionStorage.setItem("user_mail",username);
            return false;
        }
        else{
            alert("invalid password");
        }
    }

}


// login function code end





// user existance function start
function userExisted(){
    var email = document.getElementById("email").value;
    if(localStorage.getItem(email) != null){
        document.getElementById("password").disabled = true;
        document.getElementById("mobile").disabled = true;
        document.getElementById("signUpSubmit").disabled = true;
        document.getElementById("emailSpan").style.display ="inline-block";
        document.getElementById("email").onclick = function(){
            document.getElementById("password").disabled = false;
            document.getElementById("mobile").disabled = false;
            document.getElementById("signUpSubmit").disabled = false;
            document.getElementById("emailSpan").style.display ="none";
            document.getElementById("email").value = "";
        }
    }
}
// user existance function end