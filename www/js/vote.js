$(document).ready(function(){
	$(".droppable").droppable({
		drop: function( event, ui ) {
			var id = $(ui.draggable[0]).attr('id');
			var from = $(ui.draggable[0]).attr('from');
			var to = event.target.id;
			$(ui.draggable[0]).attr('from', to);
			var voteScore = 0;
			if (from == 'neutralArea') {
				if (to == 'neutralArea') {
					voteScore = 0;
				} else if (to == 'goodArea') {
					voteScore = 1;
				} else if (to == 'badArea') {
					voteScore = -1;
				}
			} else if (from == 'goodArea') {
				if (to == 'neutralArea') {
					voteScore = -1;
				} else if (to == 'goodArea') {
					voteScore = 0;
				} else if (to == 'badArea') {
					voteScore = -2;
				}
			} else if (from == 'badArea') {
				if (to == 'neutralArea') {
					voteScore = 1;
				} else if (to == 'goodArea') {
					voteScore = 2;
				} else if (to == 'badArea') {
					voteScore = 0;
				}
			}
			if (voteScore != 0) {
				//console.log('Candidate:' + id +', sum:' + voteScore);
				socket.emit('vote', { 'Candidate': id, 'sum': voteScore });
			};
			
		}
	});
});
