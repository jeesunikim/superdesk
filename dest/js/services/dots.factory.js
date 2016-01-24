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
	
	DotsProps.graph = {'width': 1200, 'height': 900};

	return DotsProps;

});