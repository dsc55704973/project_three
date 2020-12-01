


function init() {
    // select dropdown menu read data and append to dropdown list
    var dropdown = d3.select("#selDataset");
    var values = ['CS_Mnth','CD_Mnth','Enrgy_Mnth','Fncl_Mnth','HlthC_Mnth','Indstrl_Mnth',
    'Mtrls_Mnth','Tech_Mnth','Util_Mnth'];
    values.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
       
    });
    console.log(values[0])
    getplots()
}

init();

function getplots() {
    var img = document.createElement("img");
        img.src = "..\..\..\assets\Util_Mnth.png";
        img.width="900" 
        img.height="600"
    var src = document.getElementById("PvA");
        src.appendChild(PvA);

    console.log(img.src)
}
// C:\Users\phill\Documents\Class\homework\project_three\assets\Util_Mnth.png
var img = document.createElement("img"); 
 
img.src = "image.png"; 
var src = document.getElementById("x"); 
 
src.appendChild(img); 