$(document).ready(function(){
	var canvas = document.getElementById('goodArea');
	var context = canvas.getContext('2d');


	
	context.beginPath();
	context.rect( 0, 0, canvas.width, canvas.height);
	context.fillStyle = 'lightblue';
	context.fill();

	context.font = 'bold 100pt Calibri';
	context.fillStyle = 'white';
	context.textAlign = 'right';
      context.fillText('+1', canvas.width, canvas.height);


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

	context.font = 'bold 100pt Calibri';
	context.fillStyle = 'white';
	context.textAlign = 'right';
      context.fillText('-1', canvas.width, canvas.height);

      var canvas = document.getElementById('result');
      var context = canvas.getContext('2d');
      context.rect( 0, 0, canvas.width, canvas.height);
      context.fillStyle = '#E6E6E6';
      context.fill();

      context.beginPath();
      context.moveTo(20, canvas.height/2);
      context.lineTo(canvas.width-20, canvas.height/2);
      context.lineWidth = 10;

      // set line color
      context.strokeStyle = ‘#ff0000’;
      context.stroke();
});

function drawCandidate(id, name, img) {
	var c = document.getElementById(id);
	var ctx = c.getContext("2d");
	
	ctx.beginPath();
	ctx.arc(50 ,50, 45, 0, 2*Math.PI);
	ctx.lineWidth = 5;
	ctx.stroke();

	var thumbnail = new Image();
	thumbnail.src = img;
	thumbnail.width = c.width;
	thumbnail.height = c.height; 
	thumbnail.onload = function(){
		var pattern = ctx.createPattern(this, "repeat");
		ctx.fillStyle = pattern;
		ctx.fill();
	};
	
	ctx.font = "20px";
	ctx.textAlign = "center";
	ctx.fillText(name, 50, 108);
}
