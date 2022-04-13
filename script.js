
const key = "cfd8595cf99443d19fc7ea2b81be33a9";
var url = "https://holidays.abstractapi.com/v1/?api_key=8fcd69618b6a4e5b83c98043de47b851&country=US&year=2020&month=12&day=25"

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    console.log(response[0].name);
        }
    
};

xhttp.open("GET", url, true);
xhttp.send();

