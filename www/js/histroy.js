function drawHistory(data) {
      var drawingData = [];
      drawingData['datasets'] = [];
      drawingData['labels'] = [];

      for(var i=0; i<3; i++) {
            drawingData['labels'][i] = '';

            var dataset = [];
            dataset['label_'] = 'data_' + i;
            dataset['fillColor'] = 'rba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + '0.2)';
            dataset['strokeColor'] = 'rba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + '1)';
            dataset['pointColor'] = 'rba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + '1)';
            dataset['pointStrokeColor'] = '#fff';
            dataset['pointHighlightFill'] = '#fff';
            dataset['pointHighlightStroke'] = 'rba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + '1)';
            dataset['data'] = data[i];
            drawingData['datasets'].push(dataset);
      }

      var ctx = $('#histroyDrawing')[0].getContext('2d');
      var chart = new Chart(ctx).Line(drawingData, { responsive: true });
} 
