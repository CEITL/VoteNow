$(document).ready(function(){
	var canvas = document.getElementById('goodArea');
	var context = canvas.getContext('2d');

	context.beginPath();
	context.rect( 0, 0, canvas.width, canvas.height);
	context.fillStyle = 'lightblue';
	context.fill();

	var neutralArea = document.getElementById('neutralArea');
	var context = neutralArea.getContext('2d');

	context.beginPath();
	context.rect( 0, 0, canvas.width, canvas.height);
	context.fillStyle = '#888888';
	context.fill();


	var canvas = document.getElementById('badArea');
	var context = canvas.getContext('2d');

	context.beginPath();
	context.rect( 0, 0, canvas.width, canvas.height);
	context.fillStyle = 'pink';
	context.fill();

	
});

function drawCandidate(id, img) {
	var c = document.getElementById(id);
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(50 ,50,45,0,2*Math.PI);
	ctx.lineWidth = 5;
	ctx.stroke();

	var thumbnail = new Image();
	thumbnail.src = img; 
	thumbnail.width = c.width;
	thumbnail.height = c.height ; 
	thumbnail.onload = function(){
		var pattern = ctx.createPattern(this, "repeat");
		ctx.fillStyle = pattern;
		ctx.fill();
	};
}