/* Override window.alert */
var originalAlert = window.alert;
window.alert = function(s) {
  //parent.postMessage("success", "*");
  setTimeout(function() { 
    originalAlert("Congratulations, you executed an alert:\n\n" 
      + s + "\n\nHere is your flag: KTkbY4");
  }, 50);

}

