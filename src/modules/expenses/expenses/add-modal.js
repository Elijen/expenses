module.exports = {
    template: require('./add-modal.html'),
    controller: Controller
};

Controller.$inject = ['$scope', '$rootScope', '$uibModalInstance', 'dataCategories', 'dataExpenses'];

function Controller($scope, $rootScope, $uibModalInstance, dataCategories, dataExpenses) {
    $scope.expense = {};
    $scope.submit = submit;
    $scope.cancel = cancel;

    activate();

    function activate() {
        dataCategories.getCategories().then(function(categories){
            $scope.categories = categories;
        });
    }

    function submit() {
        var expense = $scope.expense;

        dataExpenses.addUserExpense(1, expense).then(function(response) {
            if(response.status == 200) {
                $rootScope.$broadcast('expense:added', response.data);
                $uibModalInstance.close();
            } else {
                // TODO: handle error
            }
        });
    }

    function cancel() {
        $uibModalInstance.close();
    }
}

