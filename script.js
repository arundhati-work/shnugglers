document.addEventListener('DOMContentLoaded', () => {
    var body = document.body;
    var modeToggleBtn = document.getElementById("mode-toggle");
    var modeToggleImg = document.getElementById("mode-toggle-img");

    var facebook = document.getElementById("facebook-img");
    var twitter = document.getElementById("twitter-img");
    var instagram = document.getElementById("instagram-img");
    var email = document.getElementById("email-img");
    var phone = document.getElementById("phone-img");


    
    const currentMode = localStorage.getItem('theme') || 'light';
    body.classList.add(currentMode === 'dark' ? 'dark-mode' : 'light-mode');

    modeToggleImg.src = currentMode === 'dark' ? 'assets/sun.png' : 'assets/moon.png';
    updateIcons(currentMode);

    modeToggleBtn.addEventListener('click', function () {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
            modeToggleImg.src = 'assets/sun.png';
            updateIcons('dark');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
            modeToggleImg.src = 'assets/moon.png';
            updateIcons('light');
        }
    });

    function updateIcons(mode) {
        facebook.src = `assets/facebook-${mode}.png`;
        twitter.src = `assets/twitter-${mode}.png`;
        instagram.src = `assets/instagram-${mode}.png`;
        email.src = `assets/email-${mode}.png`;
        phone.src = `assets/phone-${mode}.png`;
    }

});

window.addEventListener("scroll", ()=>{
    var navbar = document.getElementsByClassName("navbar")[0];
    if (window.scrollY > window.innerHeight) {
        navbar.style.backdropFilter = "blur(4px)";
    } else {
        navbar.style.backdropFilter = "none";
    }
})

function toHome(){
    window.location.href = "index.html";
}

function scrollToSection(section, file) {
    window.location.href = `${file}.html#${section}`;
}

