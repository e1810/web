(function(){
	'use strict';
	var birthTime = new Date(2002, 4, 5, 2, 0);
	function updateP(){
		var now = new Date();
		var seconds = (now.getTime() - birthTime.getTime()) / 1000;
		document.getElementById('birth-time').innerText = seconds+" passed since you were born";
	}
	setInterval(updateP, 50);
})();
