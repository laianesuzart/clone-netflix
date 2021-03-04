(function () {
    let menu = document.getElementById("menu");
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) 
        menu.classList.add("stickyMenu");
        else 
        menu.classList.remove("stickyMenu");
    });
})();