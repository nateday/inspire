app.controller('ImageController', function(ImageService, $interval){
	var ic = this;
	ImageService.getImage().then(function(imageData){
		ic.imageData = imageData;
	})
	// DO NOT EDIT ABOVE
	
	ic.time = Date.now()
	if (document.getElementById) onload = function () {
		$interval ( function(){ic.time = Date.now()}, 50)}
	
})