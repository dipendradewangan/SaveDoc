function profileName(){
    var userMail = sessionStorage.getItem('user_mail');
    var userDetails = localStorage.getItem(userMail);
    var userData = JSON.parse(userDetails);
    var name = document.getElementById("name");
    var decriptedName = atob(userData.name);
    name.innerHTML= decriptedName;

}

profileName();