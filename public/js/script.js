$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 200) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
})