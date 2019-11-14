$(function () {
    let offset = $(".navBar").offset();
    console.log(offset.top)
    $(document).scroll(function () {
        let offset = $(".navBar").offset();
        console.log(offset.top)
        if (offset.top > 0) {
            $(".navbar").removeClass("navbar-expand-lg")
            $(".navBar").css("position", 'fixed')
            $(".navBar").css("z-index", '10')
            $(".navBar").removeClass("justify-content-center")

        } else if(offset.top == 0)  {
            $(".navbar").addClass("navbar-expand-lg")
            $(".navBar").css("position", 'initial')
            $(".navBar").css("z-index", '0')
            $(".navBar").addClass("justify-content-center")

        }
    });
    $('#bg1').click(function () {
        $('.body').css('background-color', '#1D1A21');
        $('#headerImg').attr("src", "assets/img/10325_b.jpg");
    })
    $('#bg2').click(function () {
        $('.body').css('background-color', '#031306');
        $('#headerImg').attr("src", "assets/img/10400_b.jpg");
    })
    $('#bg3').click(function () {
        $('.body').css('background-color', '#DBB61D');
        $('#headerImg').attr("src", "assets/img/10507_b.jpg");
    })
})
