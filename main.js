let button = document.getElementById("buttonSpeak");
let text = document.getElementById("textArea");
button.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterance);
});