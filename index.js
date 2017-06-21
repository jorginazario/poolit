function submitClick(){
        
	var  name = document.getElementById("name").value;
	var  phone = document.getElementById("phone").value;
	var  departure = document.getElementById("departure").value;
	var  destination = document.getElementById("destination").value;
	var  date = document.getElementById("date").value;
	var  time = document.getElementById("time").value;
        var submitBtn = document.getElementById("submitBtn");
	var firebaseData = firebase.database().ref();
	 var firebaseRef= firebaseData.child(phone);

	firebaseRef.child("name").push(name);
	document.getElementById("name").value;

	firebaseRef.child("phone").push(phone);
	document.getElementById("phone").value;

	firebaseRef.child("departure").push(departure);
	document.getElementById("departure").value;

	firebaseRef.child("destination").push(destination);
	document.getElementById("destination").value;

	firebaseRef.child("date").push(date);
	document.getElementById("date").value;

	firebaseRef.child("time").push(time);
	document.getElementById("time").value;

	// Get a database reference to our posts
	var f = new Firebase('https://poolit-1bf15.firebaseio.com/'+phone+"/name/");
         f.once("value", function(snap){
	 	console.log(snap.val());
		 var val=snap.val();
		 for (var k in val){
	           document.getElementById("firstname").innerHTML=val[k];
	         }
	 });
	
	

/*
       // Attach an asynchronous callback to read the data at our posts reference
       ref.on("value", function(name) {
          console.log(name.val());
       }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
       });
*/
   

}

