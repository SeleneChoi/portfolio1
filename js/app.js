
function pageLoad() {
    document.body.classList.toggle("dark-theme", localStorage.getItem('darkmode') === 'true');
    imageChange();
}

var icon = document.querySelector(".icon");

icon.onclick = function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true' ;
    localStorage.setItem('darkmode', !wasDarkmode);
    document.body.classList.toggle("dark-theme", !wasDarkmode);
    imageChange();
}
    
function imageChange(){
        // var icon = document.querySelector(".icon");
        var logo = document.getElementById("logo");
        var linkedin = document.getElementById("linkedin");
        var insta = document.getElementById("insta");
        var github = document.getElementById("github");
        var mail = document.getElementById("mail");
        var linkedin2 = document.getElementById("linkedin2");
        var insta2 = document.getElementById("insta2");
        var github2 = document.getElementById("github2");
        var mail2 = document.getElementById("mail2");
    
    if(document.body.classList.contains("dark-theme")){
        icon.src="image/moon_night.png",
        logo.src="image/logo_darkmode.png"
        linkedin.src="image/linkedin_night.png"
        insta.src="image/insta_night.png"
        github.src="image/github_night.png"
        mail.src="image/mail_night.png"
        linkedin2.src="image/linkedin_night.png"
        insta2.src="image/insta_night.png"
        github2.src="image/github_night.png"
        mail2.src="image/mail_night.png"
    }else {
        icon.src="image/moon_day.png",
        logo.src="image/logo_daymode.png"
        linkedin.src="image/linkedin_day.png"
        insta.src="image/insta_day.png"
        github.src="image/github_day.png"
        mail.src="image/mail_day.png"
        linkedin2.src="image/linkedin_day.png"
        insta2.src="image/insta_day.png"
        github2.src="image/github_day.png"
        mail2.src="image/mail_day.png"
    }
}


/* JS To Open & Close The Menu */
const menu = document. querySelector(".js-menu");
const menu_open = document.querySelector(".js-menu-open");
const menu_close = document.querySelector(".js-menu-close");

menu_open.addEventListener('click', () => {
    menu.classList.add('open');
    console.log("open");

});
menu_close.addEventListener('click', () => {
    menu.classList.remove('open');
    console.log("close");
});



$(document).ready(function(){

// console.log("flickity");
    $('.main-carousel').flickity({
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        freeScroll: true,
        groupCells: 1
    });
})


