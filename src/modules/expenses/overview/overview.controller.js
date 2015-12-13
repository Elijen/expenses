module.exports = OverviewController;

OverviewController.$inject = ['$scope', 'dataExpenses', '$uibModal'];

function OverviewController($scope, dataExpenses, $uibModal){
    $scope.expenses = [];
    $scope.showMonthly = false;
    $scope.addExpense = addExpense;
    $scope.manageCategories = manageCategories;
    $scope.deleteExpense = deleteExpense;
    $scope.toggleMonthly = toggleMonthly;
    $scope.$on('expense:added', handleDataUpdate);
    $scope.$on('expense:delete', deleteExpense);
    $scope.$on('category:deleted', handleDataUpdate);

    activate();

    function activate() {
        $scope.$watch('showMonthly', reloadExpenses);
    }

    function reloadExpenses(showMonthly) {
        if(showMonthly) {
            dataExpenses.getUserExpensesMonthly(1).then(handleExpensesData);
        } else {
            dataExpenses.getUserExpenses(1).then(handleExpensesData);
        }
    }

    function handleExpensesData(response) {
        if(response.status == 200) {
            $scope.expenses = response.data;
        }
    }

    function addExpense() {
        $uibModal.open(require('../expenses/add-modal.js'));
    }

    function manageCategories() {
        $uibModal.open(require('../categories/manage-modal.js'));
    }

    function deleteExpense($event, expense) {
        var expense_id = expense.id;
        var user_id = expense.user_id;

        dataExpenses.deleteUserExpense(user_id, expense_id).then(function(response){
            if(response.status == 200) {
                $scope.expenses = $scope.expenses.filter(function(expense){
                    return expense.id !== expense_id;
                })
            }
        });
    }

    function handleDataUpdate() {
        reloadExpenses($scope.showMonthly);
    }

    function toggleMonthly() {
        $scope.showMonthly = !$scope.showMonthly;
    }
}

