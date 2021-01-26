function checkConx(){
  if(navigator.onLine){ // if the browser is online:
    document.getElementById("state").style.display = "none"; // hide the dialog
 } else { // if the browser is offline
  document.getElementById("state").style.display = "block"; // show the dialog
 }
}
// this below means check the internet every 1000ms (1sec) and you can change it
$(document).ready(function() {
  checkConx();
  setInterval(function(){
      checkConx();
  }, 1000);
});
