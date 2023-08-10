var numberOfBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      
    //     var audio = new Audio("C:/Users/Asus/Desktop/Project File/Drum kit/Sound/tom-1.mp3");
    //    audio.play();

        var btnInnerHTML = this.innerHTML;
        
        
        switch (btnInnerHTML) { 

            case "w":
                var tom1 = new Audio("C:/Users/Asus/Desktop/Project File/Drum kit/Sound/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("C:/Users/Asus/Desktop/Project File/Drum kit/Sound/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio(" C:/Users/Asus/Desktop/Project File/Drum kit/Sound/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("C:/Users/Asus/Desktop/Project File/Drum kit/Sound/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var crash = new Audio("C:/Users/Asus/Desktop/Project File/Drum kit/Sound/crash.mp3");
                crash.play();
                break;

            case "k":
                var kick = new Audio("C:/Users/Asus/Desktop/Project File/Drum kit/Sound/kick-bass.mp3");
                kick.play();
                break;

            case "l":
                var snare = new Audio("C:/Users/Asus/Desktop/Project File/Drum kit/Sound/snare.mp3");
                snare.play();
                break;


            default: console.log(btnInnerHTML)
        }

    });
}
