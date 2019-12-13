function myFunction() {
	alert("i lied ;-)");
	window.close();
}
function myFunction2() {
	alert("i thought so ;-)");
	window.close();
}

var checkpointValue = 1;
//checkpoints became the screens

var loadUserInfo = function(){
	if (!storageAvailable('localStorage')){ return; }
	if(localStorage.getItem('checkpointValue')){

		checkpointValue = parseInt(localStorage.getItem('checkpointValue'));
		console.log("available!", checkpointValue)
	}

	var newCheckpoint = document.getElementById("checkpoint" + checkpointValue);
	if(newCheckpoint === null){
		checkpointValue = 1;
		newCheckpoint = document.getElementById("checkpoint" + checkpointValue);
		console.log(checkpointValue, newCheckpoint)
	}
		newCheckpoint.classList.add("current")

	// var newDiv = document.querySelector(".myDiv" + checkpointValue);
	// if(newDiv === null){
	// 	checkpointValue = 1;
	// 	newDiv = document.querySelector(".myDiv" + checkpointValue);
	// 	console.log(newDiv)
	// }
	// 	newDiv.classList.add("current")
}

loadUserInfo(); // on site load

var updateCheckpoint = function(){
	var oldCheckpoint = document.getElementById("checkpoint" + checkpointValue);
	oldCheckpoint.classList.remove("current");
	checkpointValue++;

	var newCheckpoint = document.getElementById("checkpoint" + checkpointValue);

	// var newDiv = document.querySelector(".myDiv" + checkpointValue);

	if(newCheckpoint === null){
		checkpointValue = 1;
		newCheckpoint = document.getElementById("checkpoint" + checkpointValue);
		console.log(checkpointValue, newCheckpoint)
	}

	// if(newDiv === null){
	// 	checkpointValue = 1;
	// 	newDiv = document.querySelector(".myDiv" + checkpointValue);
	// 	}

		console.log(checkpointValue)
	newCheckpoint.classList.add("current")
		// newDiv.classList.add("current")
	localStorage.setItem('checkpointValue', checkpointValue); // save new state
}

	var saveUserInfo = function(){
		var mybuttons = document.querySelectorAll(".thediv");

			for (var i = 0; i < mybuttons.length; i++) {
				mybuttons[i].addEventListener('click', function(){
					updateCheckpoint();
				})
			}



		document.querySelector(".myDiv" + checkpointValue).addEventListener('click', function(){
			// updateCheckpoint();
		})
	}
saveUserInfo();
