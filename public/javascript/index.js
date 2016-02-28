window.onload = main;

function main() {
	console.log('hello world');

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
	window.URL.createObjectURL = window.URL.createObjectURL || window.webkitURL.createObjectURL;

	var fps = 26;
	var aspectRatio = 4/3;
	var video = document.createElement('video');
	video.width = 360;
	video.height = video.width / aspectRatio;

	var canvas = document.getElementById('canvas');
	canvas.width = video.width;
	canvas.height = video.height;

	var context = canvas.getContext('2d');

	if (navigator.getUserMedia) { // webkit version
		navigator.getUserMedia({video: true}, function(stream) {
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, function () {
			console.error('video error!');
		});
	}
	else {
		console.error('no user media, use chrome');
	}

	start();

	function processVideo() {
		context.drawImage(video, 0, 0, canvas.width, canvas.height);
	}

	function start() {
		window.requestAnimationFrame(step);
	}

	function step() {
		setTimeout(function() {

			processVideo();

			window.requestAnimationFrame(step);
		}, 1000 / fps);
	}

}
