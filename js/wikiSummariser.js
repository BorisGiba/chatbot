var error = 1;
var link="";
var extractRegex="";
async function displayWikiSummary(query,details=0){
error=1;
var find = "test";
const filterRegex = new RegExp("Disambiguation page providing links to topics that could be referred to by the same search term")
const noExtractRegex = new RegExp("may refer to:")
// read text from URL location
if (details===0){
    link='https://en.wikipedia.org/api/rest_v1/page/summary/'+query;
    extractRegex = new RegExp('"description":"(.*)","description_source":')
} else{
    link="https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=+"+query+"&origin=*";
    extractRegex = new RegExp('"extract":"(.*)"')
}
var request = new XMLHttpRequest();
request.open('GET', link, true);
request.send(null);
request.onreadystatechange = async function () {
    if (request.readyState === 4 && request.status === 200) {
        var type = request.getResponseHeader('Content-Type');
        if (type.indexOf("text") !== 1) {
            error = 0;
            console.log(typeof request.responseText);
            console.log(request.responseText);
            var t = request.responseText;
            //const regex = new RegExp('"description":"(.*)","description_source":')
            find = extractRegex.exec(t)[1].split('}').join(' ').split('\\').join(' ')//replaceAll("}","").replace("\\","")
            if (filterRegex.test(find)){
                extractRegex = new RegExp('"extract":"(.*)","extract_html')
                find =  extractRegex.exec(t)[1].split('}').join(' ').split('\\').join(' ')//replaceAll("}","").replace("\\","")
            }
            if (noExtractRegex.test(find)){
                find="I am sorry, I can not find any information."
            }
            getBotResponse(response=find,forceSend=true)
            return find;
        
    }
}
}
return find;
}	