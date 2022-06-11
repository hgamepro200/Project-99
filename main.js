var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textBox").innerHTML = " ";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content)

    document.getElementById("textBox").innerHTML = Content;
    speak();
}

function speak(){
    var Synth = window.speechSynthesis;
    speak_data = document.getElementById("textBox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    Synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
width: 360,
height: 250,
image_format : 'png',
png_quality : 90
});
camera = document.getElementById("camera");