/* Override window.alert */
var originalAlert = window.alert;
window.alert = function(s) {
  //parent.postMessage("success", "*");
  setTimeout(function() { 
    originalAlert("Congratulations, you executed an alert:\n\n" 
      + s + "\n\nHere is your flag: CsvG4Y");
  }, 50);

}

