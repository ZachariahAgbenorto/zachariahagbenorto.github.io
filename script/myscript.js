function myLightFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
}

//Responsive Topnav
function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//change classname on click for topnav links
const navLinkEls = document.querySelectorAll('.nav_link');

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        navLinkEl.classList.add('active');
    });
});
