// Function to test alert message
function testAlert () {
    alert("Hello world");
}


// Function for dynamic clock on navbar
function liveClock(){
    var d = new Date().toDateString();
    var t = new Date().toLocaleTimeString();
    var time = d + "  " + t;
    document.getElementById('timer').innerHTML= time;
}
setInterval(function(){liveClock()}, 1000);


// Function for button to show skills and projects
function showList(id){
    var listDetails = document.getElementById(id);
    if (listDetails.style.display === "none"){
        listDetails.style.display = "block";
        document.getElementById('showListbutton').remove();
    }
    else {
        listDetails.style.display === "none";
    }
}


// Function for filter list
function filterSkills(id){
    var filterlist = document.getElementsByClassName("card");
    for (var i = 0; i < filterlist.length; i++){
        var object = filterlist[i];
        var objectlist = object.getAttribute("data-category");

        if (id === "all" || objectlist === id){
            object.style.display = "block";
        }
        else {
            object.style.display = "none";
        }
    }
}
document.getElementById("filterskills").addEventListener("change", function(){
    var id = this.value;
    filterSkills(id);
});


// Functions for Github links in projects page
function westeamPage(){
    location.href = "https://github.com/WSU-4110/westeam";
}


function lightningPage(){
    location.href = "https://github.com/altaimeh/DataProject"
}


function stocksimPage(){
    location.href = "https://github.com/vkadam7/StockMarketApp"
}

function portfolioPage(){
    location.href = "https://github.com/MuneebFKhan1/muneebfkhan1.github.io"
}

// Function for form validation (WIP)
var c = document.getElementById("contact-form");
c.addEventListener("submit",validForm(c));
function validForm(id){
    id.preventDefault();

    var n = document.getElementById("name");
    var e = document.getElementById("email");
    var m = document.getElementById("message");

    if (n.value.trim() === ""){
        alert("Please enter a valid name");
        return;
    }

    if (e.value.trim() === ""){
        alert("Please enter a valid email adress");
        return;
    }

    if (m.value.trim() === ""){
        alert("Message cannot be left blank");
        return;
    }

    alert("Succesful submission");
}