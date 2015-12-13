require('./list.css');

module.exports = ListDirective;

ListDirective.$inject = ['$rootScope'];

function ListDirective($rootScope){
    return {
        link: link,
        template: require('./list.html'),
        scope: {
            expenses: '=expensesList',
            view: '=expensesListView'
        }
    };

    function link($scope) {
        $scope.view = $scope.view || 'default';
        $scope.deleteExpense = deleteExpense;

        function deleteExpense(expense) {
            $rootScope.$broadcast('expense:delete', expense);
        }
    }
}

