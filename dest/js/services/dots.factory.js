app.factory('DotsFactory', function () {

	var DotsProps = {};
	var tools = ['circle'];
	var currentTool = 0;
	var radius = 8;
	var x = 0;
	var y = 0;
	var lastX = 0;
	var lastY = 0;
	var sw = 5;
	
	DotsProps.storedDots = [];
	
	DotsProps.graph = {'width': 749, 'height': 1335};
	
	// addDots.create = function (newDot) {
		

	// };
	
	// DotsProps.seatDot = function (e) {
 //        this.lastX = this.x;
 //        this.lastY = this.y;
 //        this.x = e.offsetX;
 //        this.y = e.offsetY;
 //        this.elements.push({
 //            "type": this.currentTool,
 //            "x": this.x,
 //            "y": this.y,
 //            "lx": this.lastX,
 //            "ly": this.lastY,
 //            "r": this.radius,
 //            "f": 0,
 //            "sw": this.sw
 //        });

        
 //    };

	return DotsProps;


});