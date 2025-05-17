if (!!window.EventSource) {
  var source = new EventSource('/events');
  
  source.addEventListener('open', function(e) {
   console.log("Events Connected");
  }, false);
  source.addEventListener('error', function(e) {
   if (e.target.readyState != EventSource.OPEN) {
     console.log("Events Disconnected");
   }
  }, false);
  
  source.addEventListener('message', function(e) {
   console.log("message", e.data);
  }, false);
  
  source.addEventListener('angle', function(e) {
   console.log("angle", e.data);
   document.getElementById("angle").innerHTML = e.data;
  }, false);
 
 }