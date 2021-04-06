

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
    
}

//usage:
readTextFile("https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json", function(text){
    var data = JSON.parse(text);
    console.log(data.vendors);
    var myJSON = JSON.stringify(data.vendors);
    document.getElementById("displayDa").innerHTML = myJSON;
    })


function popupFunction() {
  var popup = document.getElementById("displayDa");
  popup.classList.toggle("show");
}


       











