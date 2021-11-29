// check browser

function checkBrowser() {
    if (navigator.userAgent.indexOf("MSIE") != -1) {
        var webpage = document.getElementById("webpage");
        webpage.style.display = "none";
        document.body.style.backgroundColor = "black";
        document.body.innerHTML = "<h1 style='font-family: calibri; font-size: 100px; color: white;width: auto;text-align: center;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);'>Please Open in chrome browser......!</h1>"

    }
}

checkBrowser();


// checkCookieEnabled
function checkCookieEnabled() {
    if (navigator.cookieEnabled == false) {
        var webpage = document.getElementById("webpage");
        webpage.style.display = "none"
        document.body.style.backgroundColor = "black";
        document.body.innerHTML = "<h1 style='font-family: calibri; font-size: 100px; color: white;width: auto;text-align: center;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);'>Please enable cookies......!</h1>"

    }

}

checkCookieEnabled();
