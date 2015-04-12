(function($) {
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
            var dataContent = [];

            dataset['data'] = dataContent;
            drawingData['datasets'].push(dataset);
      }

      console.log($('#histroyDrawing').attr('id'));
})(jQuery);
