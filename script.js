function spamenu(){
    var i, clickcontent, ikonlink;
    clickcontent = document.container("clickcontent");
    for (i = 0; i <
    clickcontent.length; i++) {
        clickcontent[i].style.display = "none";
    }
    ikonlink = document.container("ikonlink");
    for (i = 0; i < ikonlink.length; i++) {
        ikonlink[i].className = ikonlink[i].className.replace(" active", "");
    }
     document.getElementById(cityName).style.display = "block";
     evt.currentTarget.className += " active";
}