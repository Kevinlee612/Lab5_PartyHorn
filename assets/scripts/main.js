// main.js
document.getElementById("volume-number").addEventListener("input", function(){
    document.getElementById("volume-slider").value = document.getElementById("volume-number").value;
    let volumeNum = document.getElementById("volume-number").value;
    if (volumeNum == 0){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
    else if (volumeNum <= 33){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if (volumeNum <= 66) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    document.getElementById("horn-sound").volume = document.getElementById("volume-slider").value/100;
});

document.getElementById("volume-slider").addEventListener("click", function(){
    document.getElementById("volume-number").value = document.getElementById("volume-slider").value;
    let volumeNum = document.getElementById("volume-slider").value;
    if (volumeNum == 0){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
    else if (volumeNum <= 33){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if (volumeNum <= 66) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    document.getElementById("horn-sound").volume = document.getElementById("volume-slider").value/100;
});

document.getElementById("audio-selection").addEventListener("click", function(){
    if (document.getElementById("radio-air-horn").checked == true) {
        document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    }
    else if (document.getElementById("radio-car-horn").checked == true){
        document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    }
    else{
        document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    }
});
document.getElementById("honk-btn").type="button";
document.getElementById("honk-btn").addEventListener("click", function(){
    document.getElementById("horn-sound").play();
});