var angular = require('angular');

module.exports = ChartDirective;

ChartDirective.$inject = ['$timeout'];

/**
 * Directive rendering expenses into a chart
 */
function ChartDirective($timeout) {
    return {
        link: link,
        template: require('./chart.html'),
        expenses: '=expensesChart'
    };

    function link($scope, $element) {
        $scope.chartData = {};
        $scope.chartOptions = {
            height: 200
        };

        $scope.$watch('expenses', function(newValue) {
            $scope.chartData = getChartistDataFromExpenses(newValue);

            $timeout(function() {
                // Hack: ng-chartist does not call update, we need to do it manually
                $element.find('chartist')[0].__chartist__.update();
            }, 100);
        });
    }

    function getChartistDataFromExpenses(expenses) {
        var expensesReversed = expenses.slice().reverse();
        var labels = [];
        var values = [];

        angular.forEach(expensesReversed, function(expense){
            var label = expense.day ? expense.day + '/' + expense.month : expense.month + '/' + expense.year;

            labels.push(label);
            values.push(expense.amount);
        });

        return {
            labels: labels,
            series: [values]
        };
    }
}