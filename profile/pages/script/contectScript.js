window.onload = function () {
    var contactCount = document.getElementById("contectListCont").children.length;
    if (contactCount == 0) {
        document.getElementById("contactList").innerHTML = "No contact here.!";
    }
}


function showProfilePic() {
    var profileDp = document.getElementById("profileDp");
    var image = localStorage.getItem(sessionStorage.getItem("user_mail") + "ProfilePic")
    profileDp.style.backgroundImage = "url(" + image + ")";
    profileDp.style.backgroundRepeat = "no-repeat";
    profileDp.style.backgroundPosition = "center";
    profileDp.style.backgroundSize = "cover";
}

showProfilePic();

function contectValidation() {
    var fullName = document.getElementById("fullname");
    var primaryNumber = document.getElementById("primaryNumber");
    var secondaryNumber = document.getElementById("secondaryNumber");
    fullName.onchange = function () {
        if (fullName.value == "") {
            fullName.style.backgroundColor = "red";
            fullName.setAttribute("placeholder", "please enter any name");
            fullName.onfocus = function () {
                fullName.style.backgroundColor = "white";
                fullName.setAttribute("placeholder", "Fullname");
            }
        }
    }
    primaryNumber.onchange = function () {
        if (primaryNumber.value.length != 10 || primaryNumber.value == "") {
            primaryNumber.style.backgroundColor = "red";
            primaryNumber.value = "";
            primaryNumber.setAttribute("placeholder", "Primary number should be 10 digits");
            primaryNumber.onfocus = function () {
                primaryNumber.value = "";
                primaryNumber.setAttribute("placeholder", "Primary number")
                primaryNumber.style.backgroundColor = "white";
            }
        }

    }
    secondaryNumber.onchange = function () {
        if (secondaryNumber.value.length != 10 || secondaryNumber.value == "") {
            secondaryNumber.style.backgroundColor = "red";
            secondaryNumber.value = "";
            secondaryNumber.setAttribute("placeholder", "Primary number should be 10 digits");
            secondaryNumber.onfocus = function () {
                secondaryNumber.value = "";
                secondaryNumber.setAttribute("placeholder", "Secondary number")
                secondaryNumber.style.backgroundColor = "white";
            }
        }
    }
}

contectValidation();

function add_contects() {
    var fullName = document.getElementById("fullname");
    var fullnameVal = fullName.value;
    var primaryNumber = document.getElementById("primaryNumber");
    var primaryNumberVal = primaryNumber.value;
    var secondaryNumber = document.getElementById("secondaryNumber");
    var secondaryNumberVal = secondaryNumber.value;
    var form = document.getElementById("contctInputForm");
    var successfullySaved = document.getElementById("successfullySaved");
    if (fullName.value != "" && primaryNumber.value != "" && secondaryNumber.value != "") {
        var userContect = { fname: fullnameVal, pnum: primaryNumberVal, snum: secondaryNumberVal };
        var userContectDetail = JSON.stringify(userContect);
        localStorage.setItem(sessionStorage.getItem("user_mail") + "contect" + fullnameVal, userContectDetail);
        successfullySaved.style.display = "block";
        form.reset();
        setTimeout(function () {
            successfullySaved.style.display = "none";
            location.reload();
        }, 1300);
    }
    else {
        alert("some field empty!");
    }
}


function showContect() {
    var i;
    for (i = 0; i < localStorage.length; i++) {
        var keys = localStorage.key(i);
        if (keys.match(sessionStorage.getItem("user_mail") + "contect")) {
            var json_text = localStorage.getItem(keys);
            var json_extract = JSON.parse(json_text);
            var contect = document.getElementById("contectListCont");
            var fieldset = document.createElement("FIELDSET");
            var legend = document.createElement("LEGEND");
            var ol = document.createElement("OL");
            var li_one = document.createElement("LI");
            var li_two = document.createElement("LI");
            var activityBtnCont = document.createElement("DIV");
            var saved = document.createElement("SPAN");
            saved.setAttribute("class", "span-saved");
            activityBtnCont.setAttribute("id", "activityBtnCont");
            var trash = document.createElement("I");
            trash.setAttribute("class", "fas fa-trash-alt activity_icon")
            var edit = document.createElement("I");
            edit.setAttribute("class", "fas fa-edit activity_icon");
            var save = document.createElement("I");
            save.setAttribute("class", "far fa-save activity_icon")
            save.style.display = "none";
            contect.appendChild(fieldset);
            fieldset.appendChild(legend);
            fieldset.appendChild(ol);
            ol.appendChild(li_one);
            ol.appendChild(li_two);
            ol.appendChild(activityBtnCont);
            ol.appendChild(saved);
            activityBtnCont.appendChild(trash);
            activityBtnCont.appendChild(edit);
            activityBtnCont.appendChild(save);
            legend.appendChild(document.createTextNode(json_extract.fname));
            li_one.appendChild(document.createTextNode(json_extract.pnum));
            li_two.appendChild(document.createTextNode(json_extract.snum));
            saved.appendChild(document.createTextNode("successfully saved"));
            del_contect(keys, trash);
            edit_contect(keys, edit, save, saved);
        }

    }
}
showContect();


function del_contect(keys, trash) {
    trash.onclick = function () {
        var btnBox = this.parentElement;
        var ol = btnBox.parentElement;
        var fieldset = ol.parentElement;
        var answer = confirm("Do you want to delete this");
        if (answer == true) {
            document.cookie = keys + "=" + localStorage.getItem(keys) + "; max-age : 2592000";
            fieldset.remove();
            localStorage.removeItem(keys);

        }
        var contactCount = document.getElementById("contectListCont").children.length;
        if (contactCount == 0) {
            document.getElementById("contactList").innerHTML = "No contact here.!";
        }
    }
}

function edit_contect(contect_name, editBtn, saveBtn, savedText) {
    editBtn.onclick = function () {
        saveBtn.style.display = "block";
        var activityBtnCont = this.parentElement;
        var ol = activityBtnCont.parentElement;
        var fieldset = ol.parentElement;
        var legend = fieldset.getElementsByTagName("LEGEND");
        var recent_legend;
        var current_legend;
        var recent_number = [];
        var current_number = [];

        legend[0].setAttribute("contenteditable", "true");
        legend[0].focus();

        var li = ol.getElementsByTagName("LI");
        var i;
        for (i = 0; i < li.length; i++) {
            li[i].setAttribute("contenteditable", "true");
        }

        legend[0].onclick = function () {
            recent_legend = this.innerHTML;
        }
        legend[0].onblur = function () {
            current_legend = this.innerHTML;
        }

        li[0].onclick = function () {
            recent_number[0] = this.innerHTML;
        }

        li[0].onblur = function () {
            current_number[0] = this.innerHTML;

        }


        li[1].onclick = function () {
            recent_number[1] = this.innerHTML;
        }

        li[1].onblur = function () {
            current_number[1] = this.innerHTML;

        }
        saveBtn.onclick = function () {
            var edit_data = { fname: current_legend == undefined ? legend[0].innerHTML : current_legend, pnum: current_number[0] == undefined ? li[0].innerHTML : current_number[0], snum: current_number[1] == undefined ? li[1].innerHTML : current_number[1] };
            var final_edit_data = JSON.stringify(edit_data);
            var txtInlocalstorage = localStorage.getItem(contect_name);
            localStorage.setItem(contect_name, txtInlocalstorage.replace(txtInlocalstorage, final_edit_data));
            savedText.style.display = "block";
            setTimeout(function () {
                savedText.style.display = "none";
                saveBtn.style.display = "none";
            }, 2000);

        }
    }
}

function search_contects(user_search_input) {
    var keyword = user_search_input.value.toUpperCase();
    // alert(keyword)
    var contectListContainer = document.getElementById("contectListCont");
    var legend = contectListContainer.getElementsByTagName("LEGEND");
    var i;
    for (i = 0; i < legend.length; i++) {
        if (legend[i].innerHTML.toUpperCase().indexOf(keyword) != -1) {
            legend[i].parentElement.style.display = "";
        }
        else {
            legend[i].parentElement.style.display = "none";
        }
    }

}

function logout() {
    sessionStorage.clear();
    document.getElementsByClassName("logoutContainer")[0].style.display = "block";
    setTimeout(function () {

        window.location = "../../index.html";
    }, 2000);
}

function restore_contects() {

    var contectEntryForm = document.getElementById("contectEntryForm");
    contectEntryForm.style.height = "0";
    contectEntryForm.style.overflow = "hidden";
    contectEntryForm.style.transition = "0.3s";
    var contactRestoreHeading = document.getElementById("contactRestoreHeading");
    if (document.cookie.match(sessionStorage.getItem("user_mail") + "contect") != null) {
        contactRestoreHeading.innerHTML = "Deleted contacts";
        var devideCookie = document.cookie.split(";");
        var i, j;

        for (i = 0; i < devideCookie.length; i++) {
            var key_value = devideCookie[i].split("=");
            for (j = 0; j < key_value.length; j++) {
                if (key_value[j].indexOf(sessionStorage.getItem("user_mail") + "contect") == -1) {
                    var table = document.getElementById("contactStore");
                    var contectInfo_extract = JSON.parse(key_value[j]);
                    var tr = document.createElement("TR");
                    tr.setAttribute("class", "tableRow");
                    var td_contectName = document.createElement("TD");
                    var td_pnum = document.createElement("TD");
                    var td_snum = document.createElement("TD");
                    var td_restore = document.createElement("TD");
                    var restoreIcon = document.createElement("I");
                    restoreIcon.style.color = "red";
                    restoreIcon.setAttribute("class", "fas fa-sync-alt");
                    table.appendChild(tr);
                    tr.appendChild(td_contectName);
                    tr.appendChild(td_pnum);
                    tr.appendChild(td_snum);
                    tr.appendChild(td_restore);
                    td_contectName.appendChild(document.createTextNode(contectInfo_extract.fname))
                    td_pnum.appendChild(document.createTextNode(contectInfo_extract.pnum));
                    td_snum.appendChild(document.createTextNode(contectInfo_extract.snum));
                    td_restore.appendChild(restoreIcon);
                    restoreIcon.onclick = function () {
                        var restoreConfirm = confirm("Do you want to restore this contect..?");
                        if (restoreConfirm == true) {
                            var this_td = this.parentElement;
                            var this_tr = this_td.parentElement;
                            var all_td = this_tr.getElementsByTagName("TD");
                            var contectObj = {fname:all_td[0].innerHTML, pnum:all_td[1].innerHTML, snum:all_td[2].innerHTML};
                            var readyForRestoreContact = JSON.stringify(contectObj);
                            localStorage.setItem(sessionStorage.getItem("user_mail")+"contect"+all_td[0].innerHTML,readyForRestoreContact);
                            document.cookie = sessionStorage.getItem("user_mail")+"contect"+all_td[0].innerHTML+"= ; expires=Thu, 18 Dec 2013 12:00:00 UTC ";
                            this_tr.remove();
                            location.reload();


                        }
                    }
                }
            }

        }

    }
    else {
        contactRestoreHeading.innerHTML = "No deleted contacts";
    }

}

function restoreClose() {
    var contectEntryForm = document.getElementById("contectEntryForm");
    contectEntryForm.style.height = "100vh";
    contectEntryForm.style.overflow = "hidden";
    contectEntryForm.style.transition = "0.3s";
}
