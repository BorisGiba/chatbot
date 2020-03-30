var rpsOngoing=0;
var rpsResponse=3;
var rpsScore=[0,0]; // human-bot
var respondTime=0;
var jokesOngoing=0;
var wikiOngoing=0;
var wikiQuery = "";
var jokes=getJokes();
var questions;
questions=getQuestions();

async function loadModel() {
    model = await tf.loadLayersModel("https://raw.githubusercontent.com/BorisGiba/chatbot/master/js/model/model.json");
    return model
    }

function chooseReply(tag){
    replies=getReplies(tag);
    if (typeof replies!=="string"){
        reply=choose(replies);
    } else {
        reply=replies;
    }
    return reply
}

function predictTag(text){  // for example
    const bowText = bow(text,voc);
    const bowTensor = tf.tensor([bowText]);
    const prediction = model.predict(bowTensor);
    const max = tf.argMax(prediction,1);
    const predictionIndex = max.dataSync()[0];
    return predictionIndex
}

function getResponse(text){
    const tag = predictTag(text);
    const response = chooseReply(tag);
    return reply
}

function getQuestion(){
    return choose(questions);
}

function sendText(botText) {
    var botHtml = '<p class="message"><span>' + botText + "</span></p>";
    chatWait(botHtml=botHtml);
    document
    .getElementById("userInput")
    .scrollIntoView(false);
    document.getElementById("suggestion").textContent=getQuestion();
    setTimeout(function(){
        document.getElementById("userInput").scrollIntoView(false);
    }, 1000);
    }

function playRps(){
    rpsOngoing=1;
    jokesOngoing=0;
    wikiOngoing=0;
    rpsResponse=choose([0,1,2]);
    const rpsResponseArray=["Rock","Paper","Scissors"]
    var rpsResponseText = rpsResponseArray[rpsResponse]
    var botHtml3 = '<p class="message"><span>' + "3.." + "</span></p>";
    var botHtml2 = '<p class="message"><span>' + "2.." + "</span></p>";
    var botHtml1 = '<p class="message"><span>' + "1.." + "</span></p>";
    var botHtmlGo = '<p class="message"><span>' + "Go!" + "</span></p>";
    var botHtmlResponse = '<p class="message"><span>' + rpsResponseText + "!" + "</span></p>";
    setTimeout(function(){
    document.getElementById("userInput").scrollIntoView(false);
    }, 1);
    chatWait(botHtml3,100);
    setTimeout(function(){
        chatWait(botHtml2,100)
        setTimeout(function(){
            chatWait(botHtml1,100)
            setTimeout(function(){
                chatWait(botHtmlGo,100)
                setTimeout(function(){
                    chatWait(botHtmlResponse,100)
                    respondTime=Date.now()
            }, 1000);}, 1000);}, 1000);}, 1000);
};

function getBotResponse(response="",forceSend=false) {
    var botText = response;
    var rawText = String($("#textInput").val()).replace("<script>","").replace("</script>","");
    if (rawText != "" || forceSend===true ){
        var userHtml = '<p class="message user"><span>' + rawText + "</span></p>";
        if (rawText!=""){
        String($("#textInput").val("")).replace("<script>","").replace("</script>","");
        $("#chat").append(userHtml);
        }
        document
        .getElementById("userInput")
        .scrollIntoView(false);

    const wikiRegex = new RegExp("[Hh]ey [Cc]y,? (who|what) (is|are) ?a? (.*)");
    const wikiMoreRegex = new RegExp("(tell me )?more");
    const rpsRegex = new RegExp("([Hh]ey [Cc]y,? )?let'?s play r(ock)?[- ]?p(aper)?[- ]?s(cissors)?");
    const rpsAgainRegex = new RegExp("another one|(one )?more|[Rr]evanche|[Rr]evenge|[Rr]ematch|again")
    const jokeRegex = new RegExp("[Hh]ey [Cc]y,? (tell (me )?a )?joke");
    const jokeAgainRegex = new RegExp("another one|(one )?more|again");
    if (response!=""){
        botText=response;
    }
    else if (wikiRegex.test(rawText)){
        jokesOngoing=0;
        wikiOngoing=1;
        rpsOngoing=0;
        var queryText=wikiRegex.exec(rawText)[3];
        var searchText = queryText.replace(" ","_").replace("?","");
        wikiQuery = searchText;
        displayWikiSummary(searchText);
        setTimeout(function(){ //workaround :/
            if (error===1){
                chatWait('<p id="wiki_not_found" class="message"><span>' + "I am sorry, I do not know."+ "</span></p>")
            }}, 1000);
        } else if(wikiMoreRegex.test(rawText)&&wikiOngoing){
        jokesOngoing=0;
        wikiOngoing=1;
        displayWikiSummary(wikiQuery,details=1);
        } else if (rpsRegex.test(rawText)){
            playRps();
        } else if(rpsOngoing===1){
            jokesOngoing=0;
            wikiOngoing=0;
            rpsOngoing=2;
            var cheated=0;
            var message = "";
            var situationId=0;
            var wait=1;
            const rpsRewardArray=[[0,1,0],[0,0,1],[1,0,0]]; // Stein (Stein,Papier,Schere), Papier (Stein,Papier,Schere), Schere (Stein,Papier,Schere) 0=lose, 1=win, 2=tie
            const rpsReverseRewardArray=[[0,0,1],[1,0,0],[0,1,0]];
            const rpsStateArray=[["It's a tie!","You win!","You lose!"],["You lose!","It's a tie!","You win!"],["You win!","You lose!","It's a tie!"]];
            const rockRegex = new RegExp("[Rr]ock")
            const paperRegex = new RegExp("[Pp]aper")
            const scissorsRegex = new RegExp("[Ss]cissors?")
            if (Date.now()-respondTime>2000){
                cheated=1;
            }
            if (rockRegex.test(rawText)){
                situationId=0;
            } else if (paperRegex.test(rawText)){
                situationId=1;
            }
            else if (scissorsRegex.test(rawText)){
                situationId=2;
            }
            if (cheated===0){
            message = rpsStateArray[rpsResponse][situationId]
            rpsScore[0]+=rpsRewardArray[rpsResponse][situationId]
            rpsScore[1]+=rpsReverseRewardArray[rpsResponse][situationId]
            } else {
                var messageCheater="<p class='message'><span>"+"You think you're reaaaally smart don't you? Well sorry to say so, but technology wins this time! -1 point for you!!"+ "</span></p>"
                message="you cheater.."
                rpsScore[0]-=1
                wait=1500;
                chatWait(messageCheater,1000)
            }
            var chatMessage='<p class="message"><span>' + message+'<br>Your score: '+rpsScore[0].toString()+'<br>My score: '+rpsScore[1].toString()  + "</span></p>"
            setTimeout(function(){
            document.getElementById("userInput").scrollIntoView(false);
            }, wait+1);
            setTimeout(function(){
            chatWait(chatMessage,1000)
            }, wait);
        } else if(rpsOngoing===2 && rpsAgainRegex.test(rawText)){
            playRps();
        }else if(jokeRegex.test(rawText)){
        wikiOngoing=0;
        jokesOngoing=1;
        var botText = choose(jokes);
        } else if(jokeAgainRegex.test(rawText)&&jokesOngoing===1){
        wikiOngoing=0;
        jokesOngoing=1;
        var botText = choose(jokes);
        }else{
            jokesOngoing=0;
            wikiOngoing=0;
            var botText = getResponse(rawText);
        }
    if (botText!=""){
    $(sendText(botText));
    }}
}

function chatWait(botHtml,delay=1000){
    toggleWait();
    setTimeout(function(){
        removeWait();
        $("#chat").append(botHtml);
        setTimeout(function(){
            document.getElementById("userInput").scrollIntoView(false);
        }, 1);
    }, 1000);
}
function toggleWait() {
    $("#chat").append(`<div id="wait" style="display:none" class="message">
    <div class="typing typing-1"></div>
    <div class="typing typing-2"></div>
    <div class="typing typing-3"></div>
    </div>`);
    var x = document.getElementById("wait");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    }
function removeWait() {
    var elem = document.getElementById('wait');
    elem.parentNode.removeChild(elem);
    return false;
}
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
    }