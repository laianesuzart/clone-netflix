(function () {
    let menu = document.getElementById("menu");
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) 
        menu.classList.add("darkMenu");
        else 
        menu.classList.remove("darkMenu");
    });
})();