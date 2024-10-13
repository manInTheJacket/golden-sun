const scrollTopButton = document.getElementById('scroll_top');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.hidden = false;
    } else {
        scrollTopButton.hidden = true;
    }
};
scrollTopButton.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
});