// from https://davidwalsh.name/browser-camera

// Put event listeners into place
// window.addEventListener('DOMContentLoaded', function() {
// 	// Grab elements, create settings, etc.
// 	var canvas = document.getElementById('canvas'),
// 		context = canvas.getContext('2d'),
// 		video = document.getElementById('video'),
// 		videoObj = { 'video': true },
// 		errBack = function(error) {
// 			console.log('Video capture error: ', error.code);
// 		};
//
// 	// Put video listeners into place
// 	if(navigator.getUserMedia) { // Standard
// 		navigator.getUserMedia(videoObj, function(stream) {
// 			video.src = stream;
// 			video.play();
// 		}, errBack);
// 	} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
// 		navigator.webkitGetUserMedia(videoObj, function(stream){
// 			video.src = window.webkitURL.createObjectURL(stream);
// 			video.play();
// 		}, errBack);
// 	}
// 	else if(navigator.mozGetUserMedia) { // Firefox-prefixed
// 		navigator.mozGetUserMedia(videoObj, function(stream){
// 			video.src = window.URL.createObjectURL(stream);
// 			video.play();
// 		}, errBack);
// 	}
//
// 	document.getElementById('snap').addEventListener('click', function() {
// 		context.drawImage(video, 0, 0, 640, 480);
// 	});
// }, false);

window.onload = main;

function main() {
	console.log('hello world');

	var fps = 10;
	var video = document.createElement('video');
	video.width = 640;
	video.height = 480;

	var canvas = document.getElementById('canvas');
	canvas.width = video.width;
	canvas.height = video.height;

	var context = canvas.getContext('2d');

	if (navigator.webkitGetUserMedia) { // webkit
		navigator.webkitGetUserMedia({video: true}, function(stream) {
			video.src = window.webkitURL.createObjectURL(stream);
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
