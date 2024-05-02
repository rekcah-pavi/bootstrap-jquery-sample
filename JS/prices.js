

function auto_color(){
    var colors = ['red','green','black','purple','blue'];
    var random_index = Math.floor(Math.random() * colors.length);
    $(".title").css("color",colors[random_index]);

}


setInterval(auto_color, 500);    


$(".title2").mouseenter(function change_color(){
        $(this).css("color","yellow");
     }
);

$(".title2").mouseleave(function change_color(){
    $(this).css("color","black");
    }
);

 $("#button2").click(function(){
        window.location.href = 'faq.html';
    });

  $("#button1").click(function(){
        window.location.href = 'pricedetails.html';
    });