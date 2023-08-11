// DRUM KEYS
var numberOfDrumBtn = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var btnInnerHTML = this.innerHTML;

        switch (btnInnerHTML) {

            case "1":
                var tom1 = new Audio("drum keys/tom-1.mp3");
                tom1.play();
                break;

            case "2":
                var tom2 = new Audio("drum keys/tom-2.mp3");
                tom2.play();
                break;

            case "3":
                var tom3 = new Audio("drum keys/tom-3.mp3");
                tom3.play();
                break;

            case "4":
                var tom4 = new Audio("drum keys/tom-4.mp3");
                tom4.play();
                break;

            case "5":
                var crash = new Audio("drum keys/crash.mp3");
                crash.play();
                break;

            case "6":
                var kick = new Audio("drum keys/kick-bass.mp3");
                kick.play();
                break;

            case "7":
                var snare = new Audio("drum keys/snare.mp3");
                snare.play();
                break;

            default: console.log(btnInnerHTML)
        }
    });
}


//PIANO KEYS
var numberOfPianoBtn = document.querySelectorAll(".key").length;
for (var i = 0; i < numberOfPianoBtn; i++) {
    document.querySelectorAll(".key")[i].addEventListener("click", function () {

        var keysInnerHTML = this.innerHTML;

        switch (keysInnerHTML) {

            case "a":
                var keys1 = new Audio("piano keys/key01.ogg");
                keys1.play();
                break;

            case "b":
                var keys2 = new Audio("piano keys/key02.ogg");
                keys2.play();
                break;

            case "c":
                var keys3 = new Audio("piano keys/key03.ogg");
                keys3.play();
                break;

            case "d":
                var keys4 = new Audio("piano keys/key04.ogg");
                keys4.play();
                break;

            case "e":
                var keys5 = new Audio("piano keys/key05.ogg");
                keys5.play();
                break;

            case "f":
                var keys6 = new Audio("piano keys/key06.ogg");
                keys6.play();
                break;

            case "g":
                var keys7 = new Audio("piano keys/key07.ogg");
                keys7.play();
                break;

            case "h":
                var keys8 = new Audio("piano keys/key08.ogg");
                keys8.play();
                break;

            case "i":
                var keys9 = new Audio("piano keys/key09.ogg");
                keys9.play();
                break;

            case "j":
                var keys10 = new Audio("piano keys/key10.ogg");
                keys10.play();
                break;

            case "k":
                var keys11 = new Audio("piano keys/key11.ogg");
                keys11.play();
                break;

            case "l":
                var keys12 = new Audio("piano keys/key12.ogg");
                keys12.play();
                break;

            case "m":
                var keys13 = new Audio("piano keys/key13.ogg");
                keys13.play();
                break;

            case "n":
                var keys14 = new Audio("piano keys/key14.ogg");
                keys14.play();
                break;

            case "o":
                var keys15 = new Audio("piano keys/key15.ogg");
                keys15.play();
                break;

            case "p":
                var keys16 = new Audio("piano keys/key16.ogg");
                keys16.play();
                break;

            case "q":
                var keys17 = new Audio("piano keys/key17.ogg");
                keys17.play();
                break;

            case "r":
                var keys18 = new Audio("piano keys/key18.ogg");
                keys18.play();
                break;

            case "s":
                var keys19 = new Audio("piano keys/key19.ogg");
                keys19.play();
                break;

            case "t":
                var keys20 = new Audio("piano keys/key20.ogg");
                keys20.play();
                break;

            case "u":
                var keys21 = new Audio("piano keys/key21.ogg");
                keys21.play();
                break;

            case "v":
                var keys22 = new Audio("piano keys/key22.ogg");
                keys22.play();
                break;

            case "w":
                var keys23 = new Audio("piano keys/key23.ogg");
                keys23.play();
                break;

            case "x":
                var keys24 = new Audio("piano keys/key24.ogg");
                keys24.play();
                break;
            default:


        }
    });
}