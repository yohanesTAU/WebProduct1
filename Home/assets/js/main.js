window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});