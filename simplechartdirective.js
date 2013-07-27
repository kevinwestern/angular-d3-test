app.directive('simpleChart', function() {
  var link = function(scope, el, attrs) {
    scope.$watch('data', function(data) {
      drawChart(data);
    });
    var chart;
    var drawChart = function(data) {
      if (chart) {
        chart.remove();
      }
      chart = d3.select(el[0]).
        append('div').
        attr('class', 'chart').
        selectAll('div').
        data(data).
        enter().
        append('div').
        style('width', function(d) { return d * 20 + 'px';});
    };
  };

  return {
    scope: {
      'data': '='
    },
    link: link
  }
});