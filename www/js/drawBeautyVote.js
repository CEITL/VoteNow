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

	drawResult();

});

function drawResult(){
	// draw canvas
	var canvas = document.getElementById('result');
	var context = canvas.getContext('2d');
	context.rect( 0, 0, canvas.width, canvas.height);
	context.fillStyle = '#E6E6E6';
	context.fill();

	context.beginPath();
	context.moveTo(20, canvas.height/2);
	context.lineTo(canvas.width-20, canvas.height/2);
	context.lineWidth = 2;
	// set line color
	context.strokeStyle = '#D699FF';
	context.stroke();

	context.beginPath();
	context.moveTo(canvas.width/2, 20);
	context.lineTo(canvas.width/2, canvas.height-20);
	context.lineWidth = 2;

	// set line color
	context.strokeStyle = '#D699FF';
	context.stroke();

	context.font = 'bold 10pt Calibri';
	context.fillStyle = 'black';
	context.textAlign = 'center';
	context.fillText('calm', canvas.width/2, canvas.height);

	context.font = 'bold 10pt Calibri';
	context.fillStyle = 'black';
	context.textAlign = 'center';
	context.fillText('hot', canvas.width/2, 20);	

	context.font = 'bold 10pt Calibri';
	context.fillStyle = 'black';
	context.textAlign = 'right';
	context.fillText('agree', canvas.width, canvas.height/2);

	context.font = 'bold 10pt Calibri';
	context.fillStyle = 'black';
	context.textAlign = 'left';
	context.fillText('disagree', 0, canvas.height/2);	

	//drawCandidate
	$.getJSON( "beautyCandidateData.json", function( candidateArray ) {
		if(candidateArray.length > 0 )
		{
			var candidateTemplate = document.getElementById('candidate');
			for(var candidateElement in candidateArray)
			{
				var id = candidateArray[candidateElement].CandidateID;
				var name = candidateArray[candidateElement].CandidateName;
				var img = candidateArray[candidateElement].CandidatePic;
				var canvas = '<div style="position:absolute; top:235px; left:'+(480/(candidateArray.length+1)*id-40)+'px; z-index:'+id+'"><canvas id="result_'+id+'" class="draggable" from="neutralArea" width="100" height="110"></canvas></div>';
				$(canvas).insertAfter("#result") ;
				//$("#result").insertAfter(canvas);

				drawCandidate("result_"+id, name, img)

			}
		}
	});	

}

function drawCandidate(id, name, img) {
	var c = document.getElementById(id);
	var ctx = c.getContext("2d");
	
	ctx.beginPath();
	ctx.arc(50 ,50, 45, 0, 2*Math.PI, true);
	ctx.lineWidth = 5;
      ctx.closePath();
	ctx.stroke();

	var thumbnail = new Image();
	thumbnail.src = img;
	thumbnail.width = 10;
	thumbnail.height = 10; 
	thumbnail.onload = function(){
		var pattern = ctx.createPattern(this, "no-repeat");
		ctx.fillStyle = pattern;
		ctx.fill();
	};
	
	ctx.font = "20px";
	ctx.textAlign = "center";
	ctx.fillText(name, 50, 108);
}
