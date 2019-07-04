(function(){
	"use strict";
	var header = document.getElementById("header");
	var deg = 0;
	
	function rotateHeader(){
		deg += 6;
		deg %= 360;
		if(90 < deg && deg < 270) header.className = "back";
		else header.className = "face";
		header.style.transform = "rotateX(" + deg + "deg)";
	}
	setInterval(rotateHeader, 20);
})();
