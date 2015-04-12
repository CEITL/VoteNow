$(document).ready(function(){
	$(".droppable").droppable({
		drop: function( event, ui ) {
			var id = $(ui.draggable[0]).attr('id');
			var from = $(ui.draggable[0]).attr('from');
			var to = event.target.id;
			$(ui.draggable[0]).attr('from', to);
			var voteMinus = 0;
			var votePlus = 0; 
			if (from == 'neutralArea') {
				if (to == 'neutralArea') {
					votePlus = 0;
					voteMinus = 0;
				} else if (to == 'goodArea') {
					votePlus = 1;
					voteMinus = 0;
				} else if (to == 'badArea') {
					votePlus = 0;
					voteMinus = -1;
				}
			} else if (from == 'goodArea') {
				if (to == 'neutralArea') {
					votePlus = -1;
					voteMinus = 0;
				} else if (to == 'goodArea') {
					votePlus = 0;
					voteMinus = 0;
				} else if (to == 'badArea') {
					votePlus = -1;
					voteMinus = -1;
				}
			} else if (from == 'badArea') {
				if (to == 'neutralArea') {
					votePlus = 0;
					voteMinus = +1;
				} else if (to == 'goodArea') {
					votePlus = +1;
					voteMinus = +1;
				} else if (to == 'badArea') {
					votePlus = 0;
					voteMinus = 0;
				}
			}
			if (votePlus != 0 || voteMinus != 0) {
				socket.emit('vote', { 'Candidate': id, 'votePlus': votePlus , 'voteMinus' : voteMinus });
			};
			
		}
	});
});
