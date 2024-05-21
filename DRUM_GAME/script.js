let no_of_buttons=document.querySelectorAll(".drum").length;

for(let i=0; i<no_of_buttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttontext = this.innerHTML;
        sound(buttontext);
        animations(buttontext);
    })
}

document.addEventListener("keydown",function(event){
    sound(event.key);
    animations(event.key);
})

function sound(key){
    switch (key) {
        case "w":
            let audio1=new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;

        case "a":
            let audio2=new Audio('sounds/tom-2.mp3');
            audio2.play();
            break;

        case "s":
            let audio3=new Audio('sounds/snare.mp3');
            audio3.play();
            break;

        case "d":
            let audio4=new Audio('sounds/kick-bass.mp3');
            audio4.play();
            break;

        case "j":
            let audio5=new Audio('sounds/crash.mp3');
            audio5.play();
            break;

        case "k":
            let audio6=new Audio('sounds/tom-3.mp3');
            audio6.play();
            break;

        case "l":
            let audio7=new Audio('sounds/tom-4.mp3');
            audio7.play();
            break;
    }
}

function animations(key){
   var button= document.querySelector("."+key);
   button.classList.add("animate");
   setTimeout(function(){
    button.classList.remove("animate")
   },30)
}

