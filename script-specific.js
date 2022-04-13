
document.getElementById("specific-date").addEventListener("submit", function(event){
    event.preventDefault();
    var monthInput = document.getElementById("specific-month-input").value;
    var dayInput = document.getElementById("day-input").value;

    var specificList = document.getElementById("specific-holiday-list");
    var children = specificList.childNodes;
    var length = children.length;
    for(var i = 0; i<length; i++){
        specificList.removeChild(children[0]); 
    }
var xhttp3 = new XMLHttpRequest();

xhttp3.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
        var outputs = JSON.parse(this.responseText);
        console.log(outputs);

        if(outputs.length == 0){
            var holidayList = document.getElementById("specific-holiday-list");
            var holiday = document.createElement("li");
            holiday.innerHTML = "There are no holidays on " + monthInput + "/" + dayInput;
            holidayList.appendChild(holiday);
        }
        

        else{
        for(var i = 0; i<outputs.length; i++){
        postSpecificHoliday(outputs[i]);
        }
    }
    } else if (this.readyState == 4) {
        console.log(this.responseText);
    }

};
var newmonthURL = "https://holidays.abstractapi.com/v1/?api_key=cfd8595cf99443d19fc7ea2b81be33a9&country=US&year=2020&month=" + monthInput +"&day=" + dayInput;
xhttp3.open("GET", newmonthURL, true);
xhttp3.send();
document.getElementById("specific-month-input").value = ""; 
document.getElementById("day-input").value = ""; 

    }
);

function postSpecificHoliday(response){

    var holidayList = document.getElementById("specific-holiday-list");
    var holiday = document.createElement("li");
    
    var link = document.createElement("a");
    link.href = "https://en.wikipedia.org/wiki/" + response.name;


    holiday.appendChild(link);
    link.target = "_blank";


    link.innerHTML = response.week_day + ", "+ response.date_month + "/" + response.date_day + ": " + response.name;
    holidayList.appendChild(holiday);
    holidayList.appendChild(link);

}


