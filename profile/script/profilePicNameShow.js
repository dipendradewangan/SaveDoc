function profilePicName() {
    var profileHeader = document.getElementById("profileHeader");
    var profilePicCont = document.getElementById("profilePicCont");
    var user_mail = sessionStorage.getItem("user_mail");
    var userDetails = localStorage.getItem(user_mail);
    var userData = JSON.parse(userDetails);
    profileHeader.style.textTransform = "capitalize";
    profileHeader.innerHTML = atob(userData.name);
    var profilePicUrl = localStorage.getItem(sessionStorage.getItem('user_mail') + 'ProfilePic');
    profilePicCont.style.backgroundImage = "url(" + profilePicUrl + ")";
    profilePicCont.style.backgroundRepeat = "no-repeat";
    profilePicCont.style.backgroundPosition = "center";
    profilePicCont.style.backgroundSize = "cover";
    var initialContainer = document.getElementById("initialContainer");
    
}

profilePicName();