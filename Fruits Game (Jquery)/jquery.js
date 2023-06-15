//jquery.js
var playing = false;
var score;
var livesLeft;
var step;
var action; 
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango'];
$(function(){
    
    
$("#startreset").click(function(){

    if(playing == true){

        location.reload();
    }else{

        playing = true; 
        score = 0; 
        $("#scorevalue").text(score);

        //show lives left 
        $("#livesLeft").show();
        livesLeft = 3;
        addHearts();

        //hide game over box
        $("#gameOver").hide();

        //change button text to reset game
        $("#startreset").text("Reset Game");

        //start sending fruits
        startAction();
    }
});

    
//slice a fruit
    
$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); 
    
    //stop fruit
    clearInterval(action);
    
    //hide fruit
    $("#fruit1").hide("explode", 500); //slice fruit
    
    //send new fruit
    setTimeout(startAction, 800);
});
 
//functions

    
function addHearts(){
    $("#livesLeft").empty();
    for(i = 0; i < livesLeft; i++){
        $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
}

//start sending fruits

function startAction(){
    
    //generate a fruit
    $("#fruit1").show();
    chooseFruit(); 
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
    
    //generate a random step
    step = 1+ Math.round(10*Math.random()); 
    
    // Move fruit down by one step every 10ms
    action = setInterval(function(){
        
        //move fruit by one step - get posistion of the top and move it by one step
        $("#fruit1").css('top', $("#fruit1").position().top + step);                              
    
        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            //check if we have lives left
            if(livesLeft > 1 ){
                //generate a fruit
                $("#fruit1").show();
                chooseFruit(); 
                $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); 

                //generate a random step
                step = 1+ Math.round(10*Math.random()); 
                
                //reduce trials by one
                livesLeft --;
                
                //populate trialsLeft box
                addHearts();
                
            }else{
                playing = false; 
                $("#startreset").text("Start Game");
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                $("#livesLeft").hide();
                stopAction();
            }
        }
    }, 10);
}

// generate a random fruit

function chooseFruit(){
    $("#fruit1").attr('src' , 'images/' + fruits[Math.floor(5*Math.random())]+'.png');   
}

//Stop dropping fruits

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});