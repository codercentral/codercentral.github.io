$(document).ready(function() {

	// Animates the circle
	function circle_animation(name, scalarEnlarge, lh1, lh2, speed) {
		// Default values for lh1, lh2 to vertically align text and speed
		scalarEnlarge = typeof scalarEnlarge !== 'undefined' ? scalarEnlarge : 1.1;
		lh1 = typeof lh1 !== 'undefined' ? a : 0.93;
		lh2 = typeof lh2 !== 'undefined' ? a : 0.87;
		speed = typeof speed != 'undefined' ? speed : 175;

		var circleName = '#'+name+'-circle';

		// Obtain pixel sizes from DOM
		var circleDimString = $(circleName).css('height');
		var circleDim = parseInt(circleDimString.substring(0, circleDimString.length-2));

		var circleTopString = $(circleName).css('width');
		var circleTop = parseInt(circleTopString.substring(0, circleTopString.length-2));

		var circleLeftString = $(circleName).css('left');
		var circleLeft = parseInt(circleLeftString.substring(0, circleLeftString.length-2));

		// Equation so that circle to enlarge in the center
		var enlarge = (circleDim / 2) * (scalarEnlarge - 1);

		// mouseenter - circle gets bigger, mouseleave - returns to normal size
		$(circleName).on('mouseenter mouseleave', function (ev) {
	    	if(ev.type == 'mouseenter'){
	    		$(circleName).animate({'height': scalarEnlarge*circleDim+'px', 'line-height': lh1*circleDim+'px', 'width': scalarEnlarge*circleDim+'px', 'top': circleTop-enlarge+'px', 'left': circleLeft-enlarge+'px'}, speed);
	    	} else {
	    		$(circleName).animate({'height': circleDim+'px', 'line-height': lh2*circleDim+'px', 'width': circleDim+'px', 'top': circleTop+'px', 'left': circleLeft+'px'}, speed);
	    	}
	    });
	}

	// Create event handlers for animating circles
	circle_animation('robotics');
	circle_animation('apcs');
	circle_animation('webdesign');
});