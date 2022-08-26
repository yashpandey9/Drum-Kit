//  detecting button press
 var No_of_drum_buttons = document.querySelectorAll(".drum").length;
 
 for(let i=0; i<No_of_drum_buttons; i++){
  document.querySelectorAll("button")[i].addEventListener("click",handleClick);
 }
function handleClick(){
  var buttonInnerHTML = this.innerHTML;
  audioIfKeyIsPressed(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// detecting keyboard pressed
document.addEventListener("keydown", function(Event){
    audioIfKeyIsPressed(Event.key);
    buttonAnimation(Event.key);
})

function audioIfKeyIsPressed(key){
    switch (key) {
        case "w":
              var audio = new Audio('sounds/tom-1.mp3');
              audio.play();
            break;
        case "a":
              var audio = new Audio('sounds/tom-2.mp3');
              audio.play();
            break;
        case "s":
              var audio = new Audio('sounds/tom-3.mp3');
              audio.play();
            break;
        case "d":
              var audio = new Audio('sounds/tom-4.mp3');
              audio.play();
            break;
        case "j":
              var audio = new Audio('sounds/snare.mp3');
              audio.play();
            break;
        case "k":
              var audio = new Audio('sounds/crash.mp3');
              audio.play();
            break;
        case "l":
              var audio = new Audio('sounds/kick-bass.mp3');
              audio.play();
            break;
    
        default:
            console.log(Event);
            break;
    }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
}