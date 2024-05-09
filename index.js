


	 navigator.mediaDevices.getUserMedia({ video: true })
	 .then(function(stream) {
		 var videoElement = document.querySelector('video');
		 var canvasElement = ddocument.querySelector('canvas');
		
		 var ctx = canvasElement.getContext('2d');
         

		 // Set video element as source of canvas
		 videoElement.srcObject = stream;

		 // Draw video frame onto canvas every 100 milliseconds
		 setInterval(function() {
			 ctx.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
		 }, 100);
	 })
	 .catch(function(err) {
		 console.error('Error accessing the camera: ' + err);
	 });
	

			
