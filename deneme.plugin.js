/**
 * @name deneme3
 * @version 0.0.3
 * @description deneme3 Description
 * @author Emrovsky
 *  
 */

 var called = "acik";

 var items = ["discord.gg/neptun","https://selfbotdiscord.readthedocs.io/en/latest/","discord.io/pythongunlukleri","emrovsky"]


 module.exports = class Example{
     
    load() {
        BdApi.showToast("Deneme has been enabled")

    }

    start() {
        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
              currentDate = Date.now();
            } while (currentDate - date < milliseconds);
          }

        var interval = setInterval(function(){

                while (called=="kapali"){
                    called = "acik";
                    return clearInterval(interval)}
                    //kodlar buradan itibaren
                    

                    var token = Object.values(webpackJsonp.push([ [], { ['']: (_, e, r) => { e.cache = r.c } }, [ [''] ] ]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken()

                    setTimeout(() => {

                        for (var input = 0; input <= (items.length - 1); input++) {
                            var deneme = items[input]
                            console.log(deneme)
                            //deneme = özel duruma yazılacak şey 
                            var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
                            var theUrl = "https://discord.com/api/v8/users/@me/settings";
                            xmlhttp.open("PATCH", theUrl);
                            xmlhttp.setRequestHeader("Content-Type", "application/json");
                            xmlhttp.setRequestHeader("authorization", token);
                            xmlhttp.send(JSON.stringify({"custom_status":{"text":deneme}}));
                            xmlhttp.onload = function () {
                            if (xmlhttp.readyState === xmlhttp.DONE) {
                            if (xmlhttp.status === 200) {
                            console.log("Tamamdır")
    }
    
                            
      }
    };
                           }


                            
                    }, 3000);

                    
          }, 3000);
        

            
            


//code here

//stop coding
}
stop(){
    called = "kapali";


}
}





/*
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
var theUrl = "https://discord.com/api/v8/users/@me/settings";
xmlhttp.open("PATCH", theUrl);
xmlhttp.setRequestHeader("Content-Type", "application/json");
xmlhttp.setRequestHeader("authorization", "ODg5MDY0NDkzODY5NTkyNjM3.YUbz3Q.r7hFlkm2pOs9L7ETTEZJxmz8wWE");
xmlhttp.send(JSON.stringify({"custom_status":{"text":"ŞÜKÜR OLDU o ye"}}));
xmlhttp.onload = function () {
  if (xmlhttp.readyState === xmlhttp.DONE) {
      if (xmlhttp.status === 200) {
          console.log(xmlhttp.response);
          console.log(xmlhttp.responseText);
      }
  }
};
*/