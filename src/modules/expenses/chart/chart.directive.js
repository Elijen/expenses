var angular = require('angular');

module.exports = ChartDirective;

ChartDirective.$inject = ['$timeout'];

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
        var labels = [];
        var values = [];

        angular.forEach(expenses, function(expense){
            labels.push(expense.date);
            values.push(expense.amount);
        });

        return {
            labels: labels,
            series: [values]
        };
    }
}