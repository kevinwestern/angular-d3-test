app.directive('colChart', function() {
  return {
    restrict: 'E',
    scope: {
      domain: '=',
      range: '=',
      watch: '=',
      selection: '&'
    },
    link: function(scope, el, attr) {
      var getDataPoints = function() {
        return scope.domain.map(function(d, i) {
          return {x: d, y: scope.range[i]};
        })
      };
      var elm = el[0];

      var data = getDataPoints();
      var test = function() {console.log('test');}
      d3.select(elm).append('svg').attr('width', 500).attr('height', 500).
        selectAll('rect').data(data).enter().append('rect').
          attr('width', 30).attr('height', function(d) { return d.y; }).
          attr('y', function(d) { return 500 - d.y; }).
          attr('x', function(d, i) { return i * 35; }).
          on('click', function(d) {
            scope.selection({day: d});
          });
    }
  };
});