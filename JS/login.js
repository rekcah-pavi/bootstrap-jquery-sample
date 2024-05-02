
$(document).ready(function() {
            let slideIndex = 0;
            showSlides();
        
            function showSlides() {
                let slides = $(".mySlides");
                slides.hide();
                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1;
                }
                $(slides[slideIndex - 1]).show();
                setTimeout(showSlides, 2000);
            }
        
           
});


function auto_color(){
    var colors = ['red','green','black','purple','blue'];
    var random_index = Math.floor(Math.random() * colors.length);
    $(".title").css("color",colors[random_index]);

}


setInterval(auto_color, 500);    