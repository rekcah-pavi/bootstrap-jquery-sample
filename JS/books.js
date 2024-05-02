

function auto_color(){
    var colors = ['red','green','black','purple','blue'];
    var random_index = Math.floor(Math.random() * colors.length);
    $(".title").css("color",colors[random_index]);

}


setInterval(auto_color, 500);    


$("#tit").mouseenter(function change_color(){
        $(this).css("color","green");
     }
);

$("#tit").mouseleave(function change_color(){
    $(this).css("color","white");
    }
);



function change_b3_color() {
  $("#b3").css("background-color", "green");
}

function change_b2_color() {
  $("#b2").css("background-color", "blue");
}

function change_b1_color() {
  $("#b1").css("background-color", "purple");
}

function reset_colors() {
  $("#b1, #b2, #b3").css("background-color", "");
}

function loopColorChange() {
  change_b3_color();
  setTimeout(function() {
    change_b2_color();
    setTimeout(function() {
      change_b1_color();
      setTimeout(function() {
        reset_colors();
      }, 500);
    }, 500);
  }, 500);
}

setInterval(loopColorChange, 2000);