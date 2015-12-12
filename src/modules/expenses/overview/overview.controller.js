module.exports = OverviewController;

OverviewController.$inject = ['$scope', 'expensesData'];

function OverviewController($scope, expensesData){
    $scope.expenses = [];

    activate();

    function activate() {
        expensesData.getUserExpenses().then(handleExpensesData);
    }

    function handleExpensesData(response) {
        if(response && response.expenses) {
            $scope.expenses = response.expenses;
        }
    }
}

