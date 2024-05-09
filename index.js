// Create an image object
var img = new Image();// Set the source of the image
img.src = 'image.jpeg';// Wait for the image to load

img.onload = function() {
// Create a canvas element
var canvas = document.createElement('canvas');// Set the canvas dimensions to match the image dimensions
//document.body.appendChild(canvas)
canvas.width = img.width;
canvas.height = img.height;// Draw the image onto the canvas
var ctx = canvas.getContext('2d');
ctx.drawImage(img, 0, 0);// Get the pixel data of the canvas
var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data// The pixel data is an array of RGBA values for each pixel in the image


function divideArray(arr, size) {
    var chunks = [];
    for (var i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

var pixelData = divideArray(imageData,4);

var horizontalData = divideArray(pixelData,img.naturalHeight);

};



     // Get access to the camera
	 navigator.mediaDevices.getUserMedia({ video: true })
	 .then(function(stream) {
		 var videoElement = document.createElement('video');
		 var canvasElement = document.createElement('canvas');
		 document.body.appendChild(videoElement,canvasElement)
		 var ctx = canvasElement.getContext('2d');
         
		 canvasElement.height = videoElement.height;
		 canvasElement.width = videoElement.width;

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
	

			
