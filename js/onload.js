// Wait for the page to load first
window.onload = function() {
var vocList;
var model;
var labels;
vocList = getVoc();
model = loadModel();
voc = extractDictionary(vocList);
var suggestionRef = document.getElementById("suggestion");

suggestionRef.onclick = function() {
    var inp =  document.getElementById("textInput");
    inp.value = suggestionRef.textContent;
    getBotResponse();
}

setTimeout(function(){
    chatWait("<p class='message'><span>" + "Hi! ^.^" + "</span></p>")
    setTimeout(function(){
        chatWait("<p class='message stark'><span>" + "I'm Cy, an interactive chatbot! You can talk to me, play rock-paper-scissors with me, ask for definitions or request a joke! For more details, check the info-tab!" + "</span></p>")
    }, 2000);
}, 1000);
}