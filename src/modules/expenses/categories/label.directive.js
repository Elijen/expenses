module.exports = CategoryLabel;

CategoryLabel.$inject = ['dataCategories'];

function CategoryLabel(dataCategories) {
    return {
        link: link,
        template: require('./label.html'),
        replace: true,
        scope: {
            categoryId: '=expensesCategoryLabel'
        }
    };

    function link($scope) {
        $scope.$watch('categoryId', function(categoryId) {
            dataCategories.getCategoryById(categoryId).then(function(category){
                $scope.category = category;
                if(category) {
                    $scope.label = $scope.category.color ? 'label-' + $scope.category.color : 'label-default';
                }
            });
        });
    }
}