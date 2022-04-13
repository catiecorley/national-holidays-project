
document.getElementById("random-form").addEventListener("submit", function(event){
    event.preventDefault();
    var specificList = document.getElementById("random-holiday-list");
    var children = specificList.childNodes;
    var length = children.length;
    for(var i = 0; i<length; i++){
        specificList.removeChild(children[0]); 
    }
 
     var randomMonth = Math.floor(Math.random()*11 + 1);
     var randomDay = Math.floor(Math.random()*30 + 1);
 
 var xhttpRand = new XMLHttpRequest();
 
 xhttpRand.onreadystatechange = function() {
 
     if (this.readyState == 4 && this.status == 200) {
         var outputs = JSON.parse(this.responseText);
         console.log(outputs);
         var insertDate = document.getElementById("generated-date");
         insertDate.innerHTML = "Random Date: " + randomMonth +"/" + randomDay;

         if(outputs.length == 0){
             var holidayList = document.getElementById("random-holiday-list");
             var holiday = document.createElement("li");
             holiday.innerHTML = "There are no holidays on " + randomMonth + "/" + randomDay;
             holidayList.appendChild(holiday);
         }
         else{
         for(var i = 0; i<outputs.length; i++){
             console.log(outputs[i].name);
             postRandom(outputs[i]);
         }
     }
 
     } else if (this.readyState == 4) {
         console.log(this.responseText);
     }
 
 };
 var newmonthURL = "https://holidays.abstractapi.com/v1/?api_key=cfd8595cf99443d19fc7ea2b81be33a9&country=US&year=2020&month=" + randomMonth +"&day=" + randomDay;
 xhttpRand.open("GET", newmonthURL, true);
 xhttpRand.send();

 
     }
 );
 
 
 function postRandom(response){
 
     var holidayList = document.getElementById("random-holiday-list");
     var holiday = document.createElement("li");
     var link = document.createElement("a");
    link.href = "https://en.wikipedia.org/wiki/" + response.name;


    holiday.appendChild(link);
    link.target = "_blank";


    link.innerHTML = response.week_day + ", "+ response.date_month + "/" + response.date_day + ": " + response.name;
    holidayList.appendChild(holiday);
    holidayList.appendChild(link);
    
     

 }