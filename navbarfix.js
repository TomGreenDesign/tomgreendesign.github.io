//Code from conradfr: https://stackoverflow.com/users/1031015/conradfr

const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)'); const menuToggle = document.getElementById('navbarNav'); const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false }); navLinks.forEach(function (l) {
    l.addEventListener('click', function () { // avoid flickering on desktop if (menuToggle.classList.contains('show')) 
        { bsCollapse.toggle(); }
    });
});