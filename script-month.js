
document.getElementById("month-form").addEventListener("submit", function(event){
    event.preventDefault();
    var monthInput = document.getElementById("month-input").value;
    console.log(monthInput);

    var specificList = document.getElementById("month-holidays");
   var children = specificList.childNodes;
   var length = children.length;
   for(var i = 0; i<length; i++){
       specificList.removeChild(children[0]); 
   }
if(monthInput != ""){

var xhttp2 = new XMLHttpRequest();

xhttp2.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        var outputs = JSON.parse(this.responseText);
        console.log(outputs);
        for(var i = 0; i<outputs.length; i++){
            console.log(outputs[i].name);
            postHoliday(outputs[i]);
        }

    } else if (this.readyState == 4) {
        console.log(this.responseText);
    }

};
var newmonthURL = "https://holidays.abstractapi.com/v1/?api_key=cfd8595cf99443d19fc7ea2b81be33a9&country=US&year=2020&month=" + monthInput //+"&day=1";
xhttp2.open("GET", newmonthURL, true);
xhttp2.send();
document.getElementById("month-input").value = ""; 

    }
}
);

function postHoliday(task){

    var holidayList = document.getElementById("month-holidays");
    var holiday = document.createElement("li");

    var link = document.createElement("a");
    link.href = "https://en.wikipedia.org/wiki/" + task.name;


    holiday.appendChild(link);
    link.target = "_blank";


    link.innerHTML = task.week_day + ", "+ task.date_month + "/" + task.date_day + ": " + task.name;
    holidayList.appendChild(holiday);
    holidayList.appendChild(link);

}
