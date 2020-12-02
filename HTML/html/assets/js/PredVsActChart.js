


function init() {
    // select dropdown menu read data and append to dropdown list
    var dropdown = d3.select("#selDataset");
    var values = ['CS_Mnth','CD_Mnth','Enrgy_Mnth','Fncl_Mnth','HlthC_Mnth','Indstrl_Mnth',
    'Mtrls_Mnth','Tech_Mnth','Util_Mnth'];
    values.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
    sector = d3.select("#selDataset").property("value")
    });
    // console.log(values[0])
    getplots(sector)
    getpredictions()
}

init();

function getplots(sector) {
    sector = d3.select("#selDataset").property("value")
    console.log(sector)
    if (sector == "CS_Mnth") {
        Plot = "../../../../assets/CS_Mnth.png"
      } else if (sector == "CD_Mnth") {
        Plot = "../../../../assets/CD_Mnth.png"
      } else if (sector == "Enrgy_Mnth") {
        Plot = "../../../../assets/Enrgy_Mnth.png"
      }else if (sector == "Fncl_Mnth") {
        Plot = "../../../../assets/Fncl_Mnth.png"
      }else if (sector == "HlthC_Mnth") {
        Plot = "../../../../assets/HlthC_Mnth.png"
      }else if (sector == "Indstrl_Mnth") {
        Plot = "../../../../assets/Indstrl_Mnth.png"
      }else if (sector == "Mtrls_Mnth") {
        Plot = "../../../../assets/Mtrls_Mnth.png"
      }else if (sector == "Tech_Mnth") {
        Plot = "../../../../assets/Tech_Mnth.png"
      }else {
        Plot = "../../../../assets/Util_Mnth.png"
      }

    var img = document.createElement("img");
        img.src = Plot;
        img.width="950" 
        img.height="500"
    var src = document.getElementById("PvA");
        src.appendChild(img);

    console.log(img.src)
    
}

function getpredictions() {
    sector = d3.select("#selDataset").property("value")
    console.log(sector)
    if (sector == "CS_Mnth") {
        title = "Consumer staples"
        text = "Predicting the returns:<br>\
        Assuming a $100 investment starting 1/1/2006 - buy when the model predicts a positive return and sell when the model predicts a loss-<br>\
        Predicted Balance: 348.78, Actual Balance: 188.61, Nostradamus: 2368.29"
      } else if (sector == "CD_Mnth") {
        title = "Consumer discretionary"
        text = "Predicting the returns:<br>\
        Assuming a $100 investment starting 1/1/2006 - buy when the model predicts a positive return and sell when the model predicts a loss-<br>\
        Predicted Balance: 682.61, Actual Balance: 465.39, Nostradamus: 8610.93"
      } else if (sector == "Enrgy_Mnth") {
          title = "Energy"
          text = "Predicting the returns:<br>\
        Assuming a $100 investment starting 1/1/2006 - buy when the model predicts a positive return and sell when the model predicts a loss-<br>\
        Predicted Balance: 186.19, Actual Balance: 61.01, Nostradamus: 10618.13"
      }else if (sector == "Fncl_Mnth") {
          title = "Financial"
          text = "Predicting the returns:<br>\
        Assuming a $100 investment starting 1/1/2006 - buy when the model predicts a positive return and sell when the model predicts a loss-<br>\
        Predicted Balance: 128.80, Actual Balance: 97.78, Nostradamus: 8814.23"
      }else if (sector == "HlthC_Mnth") {
          title = "Health care"
          text = "Predicting the returns:<br>\
        Assuming a $100 investment starting 1/1/2006 - buy when the model predicts a positive return and sell when the model predicts a loss-<br>\
        Predicted Balance: 491.54, Actual Balance: 348.08, Nostradamus: 3223.06"
      }else if (sector == "Indstrl_Mnth") {
          title = "Industrials"
          text = "Predicting the returns:<br>\
        Assuming a $100 investment starting 1/1/2006 - buy when the model predicts a positive return and sell when the model predicts a loss-<br>\
        Predicted Balance: 209.19, Actual Balance: 259.72, Nostradamus: 7576.34"
      }else if (sector == "Mtrls_Mnth") {
          title = "Materials"
          text = "Predicting the returns:<br>\
        Assuming a $100 investment starting 1/1/2006 - buy when the model predicts a positive return and sell when the model predicts a loss-<br>\
        Predicted Balance: 296.87, Actual Balance: 230.77, Nostradamus: 8420.46"
      }else if (sector == "Tech_Mnth") {
          title = "Information technology"
          text = "Predicting the returns:<br>\
        Assuming a $100 investment starting 1/1/2006 - buy when the model predicts a positive return and sell when the model predicts a loss-<br>\
        Predicted Balance: 330.75, Actual Balance: 580.33, Nostradamus: 10857.03"
      }else {
          title = "Utilities"
          text = "Predicting the returns:<br>\
        Assuming a $100 investment starting 1/1/2006 - buy when the model predicts a positive return and sell when the model predicts a loss-<br>\
        Predicted Balance: 369.00, Actual Balance: 188.61, Nostradamus: 2368.29"
      }

   document.getElementById("pred").innerHTML = text;
   document.getElementById("title").innerHTML = title;
  
}

function optionChanged(sector) {

    d3.select("#pred").selectAll("p").remove();
    d3.select("#PvA").selectAll("img").remove();
    d3.select("#title").selectAll("h4").remove();
    var sector = d3.select("#selDataset").property("value")
    updatePage(sector);
    getplots(sector);
    getpredictions()
    // console.log(sector)
}

// // Call updatePlotly() when a change takes place
d3.selectAll("#selDataset").on("change", updatePage);

// // This function is called when a dropdown menu item is selected
function updatePage() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var sector = dropdownMenu.property("value");
}

// C:\Users\phill\Documents\Class\homework\project_three\assets\Util_Mnth.png
// var img = document.createElement("img"); 
 
// img.src = "image.png"; 
// var src = document.getElementById("x"); 
 
// src.appendChild(img); 