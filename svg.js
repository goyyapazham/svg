var svg = document.getElementById("svg");

var lastX=0;
var lastY=0;

var clearFrame = function() {

    svg.innerHTML = '';
    lastX = 0; lastY = 0;

}

var nextDot = function(e) {
    
    var thisX = e.clientX;
    var thisY = e.clientY;

    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    dot.setAttribute("cx", thisX);
    dot.setAttribute("cy", thisY);
    dot.setAttribute("r", 10);
    dot.setAttribute("fill", "green");

    svg.appendChild(dot);

    if( lastX + lastY > 0 ) {

	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

	line.setAttribute("x1", lastX);
	line.setAttribute("y1", lastY);
	line.setAttribute("x2", thisX);
	line.setAttribute("y2", thisY);
	line.setAttribute("stroke", "green");

	svg.appendChild(line);
	
    }

    lastX = thisX;
    lastY = thisY;

}

svg.addEventListener("click", nextDot);
document.getElementById("clear").addEventListener("click", clearFrame);
