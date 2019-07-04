(function(){
	"use strict";
	var header = document.getElementById("header");
	var xdeg = 0;
	var ydeg = 0;
	var xy = 0;
	var faceback = 0;


	function rotateHeader(){
		faceback = 0;
		if (xy) {
			ydeg += 6;
			ydeg %= 360;
			if(90 <= xdeg && xdeg <= 270) faceback += 1;
			if(90 < ydeg && ydeg < 270) faceback += 1;
			
			header.style.transform = "rotateX(" + xdeg + "deg) rotateY(" + ydeg + "deg)";
		
			if (ydeg == 180 || ydeg == 0) xy = 0;
		}
		else{
			xdeg += 6;
			xdeg %= 360;
			if(90 <= xdeg && xdeg <= 270) faceback += 1;
			if(90 < ydeg && ydeg < 270) faceback += 1;
		
			header.style.transform = "rotateX(" + xdeg + "deg) rotateY(" + ydeg + "deg)";
		
			if (xdeg == 180 || xdeg == 0) xy = 1;
			
		}
		if (faceback==0) header.className = "face";
		else if (faceback==1) header.className = "back";
		else header.className = "true";
	}
	setInterval(rotateHeader, 30);
})();
