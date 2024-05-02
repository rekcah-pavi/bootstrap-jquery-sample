function load_img(){

    var images = ['image-0-0.png','july-b.webp','KBHP_1242x450_EN.jpg','the-librarian-of-burned-books-inspiration.jpg','BEST_GRAMER_BOOKS.jpg','Black-Friday-2023-Kindle-deals-complete-list.jpg','fd344e83-be71-4205-8483-b166fe.jpg']
    var random_index = Math.floor(Math.random() * images.length);
    $('#roll_img').attr('src', "IMG/"+images[random_index]);
}

setInterval(load_img, 3000); 


$(".change_color").mouseenter(function change_color(){
        $(this).css("color","green");
     }
);

$(".change_color").mouseleave(function change_color(){
    $(this).css("color","black");
    }
);


function auto_color(){
    var colors = ['red','green','black','purple','blue'];
    var random_index = Math.floor(Math.random() * colors.length);
    $(".title").css("color",colors[random_index]);

}


setInterval(auto_color, 500); 


