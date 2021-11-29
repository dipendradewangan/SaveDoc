
function sequreProfilePage(){
    var profilePage = document.getElementById("profilePage");
    if(sessionStorage.length <= 0){
        profilePage.style.display = "none";
        document.body.innerHTML = "<h1 style='font-family: sans-serif; text-align: center; color: white'>illegle action performed</h1>"
        document.body.style.background = "black";
    }
}

sequreProfilePage();



function profilePicUp() {

    var uploadBtn = document.getElementById("uploadBtn");
    var freader = new FileReader();
    freader.readAsDataURL(uploadBtn.files[0]);
    if (uploadBtn.files[0].size <= 524288) {
        freader.onloadend = function (event) {
            var profilePicUrl = event.target.result;
            var showArea = document.getElementById("imgCont");
            showArea.style.background = "url(" + profilePicUrl + ")";
            showArea.style.backgroundSize = "cover";
            showArea.style.backgroundPosition = "center";
            showArea.style.backgroundRepeat = "no-repeat";
            var uploadIcon = document.getElementById("uploadIcon");
            uploadIcon.style.display = "none";
            var userId = sessionStorage.getItem("user_mail");
            
            localStorage.setItem(sessionStorage.getItem('user_mail') + 'ProfilePic', event.target.result);
            var nextBtn = document.getElementById("nextBtn");
            nextBtn.onclick = function(){
                window.location = Location.href;
            }
            

            if (localStorage.getItem(userId + 'ProfilePic') != null) {
                nextBtn.style.cursor = "pointer";
                nextBtn.disabled = false;
                nextBtn.style.background = "blue";
                nextBtn.onmouseover = function () {
                    nextBtn.style.boxShadow = "3px 3px 10px #192a56"
                }
                nextBtn.onmouseout = function () {
                    nextBtn.style.boxShadow = "none";
                }
                nextBtn.onclick = function () {
                    initialContainer.style.display = "none";
                    location.reload();
                }
            }
        }
    }
    else {
        alert("profile pic must be less then 512 kb");
    }
}

// profile picture upload code end

// stop upload image code start

function stopProfilePicUpload() {
    if (localStorage.getItem(sessionStorage.getItem('user_mail') + 'ProfilePic') != null) {
        var initialContainer = document.getElementById("initialContainer");
        initialContainer.style.display = "none";
        // window.location = Location.href;
        
    }
}

stopProfilePicUpload();



//logout code start

function logout(){
    sessionStorage.clear();
    var footer = document.getElementById("footer");
    footer.style.display = "flex";
    setInterval(function(){
        footer.style.display = "none";
        window.location = "../index.html";
    },2000)
    
}

