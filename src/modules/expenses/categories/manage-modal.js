module.exports = {
    template: require('./manage-modal.html'),
    controller: Controller
};

Controller.$inject = ['$scope', '$rootScope', '$uibModalInstance', 'dataCategories'];

function Controller($scope, $rootScope, $uibModalInstance, dataCategories) {
    $scope.newCategory = {};
    $scope.addCategory = addCategory;
    $scope.deleteCategory = deleteCategory;
    $scope.close = close;

    activate();

    function activate() {
        reloadCategories();
    }

    function addCategory() {
        dataCategories.addCategory($scope.newCategory.name).then(function(){
            reloadCategories();
            $rootScope.$broadcast('category:added', $scope.newCategory.name);
        });
    }

    function deleteCategory(category) {
        dataCategories.deleteCategory(category.id).then(function(){
            reloadCategories();
            $rootScope.$broadcast('category:deleted', category);
        });
    }

    function reloadCategories() {
        dataCategories.getCategories().then(function(categories) {
            $scope.categories = categories;
        });
    }

    function close() {
        $uibModalInstance.close();
    }
}

