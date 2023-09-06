


$("#container_1").hover(function(){
     
    $(this).css("background-color", "#ffcb00");
    $("#square1").css({
        "background-color": "#181d24",
        transition : 'background-color 0.5s ease-out'
    },
    );
    $("#imagen_selecter").attr("src", "./Assets/banner-01-home.jpg"); 
    $("#imagen_selecter").css({
        "animation-name": "selectorKeyAnimationFade",
        "animation-duration": "1s",
        "animation-timing-function": "ease-in-out"
    }); 
   
},
function(){ 
    $(this).css("background-color", "#181d24");
    $("#square1").css({
        "background-color": "#ffcb00",
        transition : 'background-color 0.5s ease-in'
    });
    $("#imagen_selecter").css({
        "animation-name": "",
        "animation-duration": "1s"
    }); 
}
);


$("#container_2").hover(function(){ 
    $(this).css("background-color", "#ffcb00");
    $("#square2").css({
        "background-color": "#181d24",
        transition : 'background-color 0.5s ease-out'
    });
    $("#imagen_selecter").attr("src", "./Assets/image_banner.jpg"); 
    $("#imagen_selecter").css({
        "animation-name": "selectorKeyAnimationFade",
        "animation-duration": "1s",
        "animation-timing-function": "ease-in-out"
    });  
},
function(){ 
    $(this).css("background-color", "#181d24");
    $("#square2").css({
        "background-color": "#ffcb00",
        transition : 'background-color 0.5s ease-in'
    });
    $("#imagen_selecter").css({
        "animation-name": "",
        "animation-duration": "1s"
    }); 
});



$("#container_3").hover(function(){
    $(this).css("background-color", "#ffcb00");
    $("#square3").css({
        "background-color": "#181d24",
        transition : 'background-color 0.5s ease-out'
    });
    $("#imagen_selecter").attr("src", "./Assets/banner-03-home.jpg");  
    $("#imagen_selecter").css({
        "animation-name": "selectorKeyAnimationFade",
        "animation-duration": "1s",
        "animation-timing-function": "ease-in-out"
    }); 
},
function(){ 
    $(this).css("background-color", "#181d24");
    $("#square3").css({
        "background-color": "#ffcb00",
        transition : 'background-color 0.5s ease-in'
    });
    $("#imagen_selecter").css({
        "animation-name": "",
        "animation-duration": "1s"
    }); 
});

