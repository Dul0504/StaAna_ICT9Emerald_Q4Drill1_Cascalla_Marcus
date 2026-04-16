
function checkClass() {

  var A = "Lifeline Consumer";    // 0 – 100 kWh
  var B = "Low Consumption";      // 101 – 200 kWh
  var C = "Average Consumption";  // 201 – 300 kWh
  var D = "High Consumption";     // 301 – 500 kWh
  var E = "Very High Consumption"; // Above 500 kWh

  var descA = "Discounted electricity rates to help low-income households.";
  var descB = "Normal residential rate.";
  var descC = "Typical electricity usage.";
  var descD = "Higher electricity usage.";
  var descE = "Heavy electricity users.";

  var cssClass = "";

  var checker = document.getElementById("consumption").value;

  // Get references to output elements
  var errorSpan  = document.getElementById("message1");
  var resultBox  = document.getElementById("resultBox");
  var resultKwh  = document.getElementById("resultKwh");
  var resultCat  = document.getElementById("resultCategory");
  var resultDesc = document.getElementById("resultDesc");

  errorSpan.innerHTML   = "";
  resultBox.style.display = "none";
  resultBox.className     = "result-box";

  if (checker === "") {

    errorSpan.innerHTML = "&#9888; Please enter a kWh value before classifying.";
    return; 
  }


  var kWh = parseFloat(checker);


  if (isNaN(kWh)) {

    window.alert("Invalid input. Please enter a numeric value for kWh.");
    errorSpan.innerHTML = "&#9888; Please input a valid number.";
    return;
  }

  if (kWh < 0) {
    errorSpan.innerHTML = "&#9888; Consumption cannot be a negative number.";
    return;
  }



  if (kWh <= 100) {
     cssClass = "status-lifeline";
    resultKwh.innerHTML  = kWh + " kWh";
    resultCat.innerHTML  = A;
    resultDesc.innerHTML = descA;

  } else if (kWh <= 200) {
    cssClass = "status-low";
    resultKwh.innerHTML  = kWh + " kWh";
    resultCat.innerHTML  = B;
    resultDesc.innerHTML = descB;

  } else if (kWh <= 300) {
     cssClass = "status-average";
    resultKwh.innerHTML  = kWh + " kWh";
    resultCat.innerHTML  = C;
    resultDesc.innerHTML = descC;

  } else if (kWh <= 500) {
    cssClass = "status-high";
    resultKwh.innerHTML  = kWh + " kWh";
    resultCat.innerHTML  = D;
    resultDesc.innerHTML = descD;

  } else {
    cssClass = "status-veryhigh";
    resultKwh.innerHTML  = kWh + " kWh";
    resultCat.innerHTML  = E;
    resultDesc.innerHTML = descE;
  }


  resultBox.className     = "result-box " + cssClass;
  resultBox.style.display = "block";

  console.log("Input kWh: " + kWh);
  console.log("Classification: " + resultCat.innerHTML);

} 