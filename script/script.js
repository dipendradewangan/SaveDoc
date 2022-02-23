
// sidebar coding start

function sidebarOpen(){
    var sidebar = document.getElementById("sideBar");
    sidebar.style.display = "block";
    sidebar.style.top= "0px";
    sidebar.style.left= "0px";
    // sidebar.style.transition = "0.5s";
    sidebar.style.animationDuration = "0.3s";
    sidebar.setAttribute("class","animated slideInLeft 0.5s");
}

function sideBarClose(){
    var sidebar = document.getElementById("sideBar");
    sidebar.style.top= "0px";
    sidebar.style.left= "-300px";
    setTimeout(function(){
        sidebar.style.display="none";
    }, 350);
}