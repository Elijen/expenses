var ng = require('angular');

module.exports = CategoriesService;

CategoriesService.$inject = ['$http', '$q', 'API_URL'];

function CategoriesService($http, $q, API_URL) {
    /**
     * Fetch all categories on intial load
     */
    var categoriesMap = fetchCategories();

    return {
        getCategoryById: getCategoryById,
        getCategories: getCategories,
        deleteCategory: deleteCategory,
        addCategory: addCategory
    };

    /**
     * Returns category by its id
     *
     * @param categoryId
     * @returns {Promise}
     */
    function getCategoryById(categoryId) {
        return categoriesMap.then(function(categories) {
            return categories[categoryId];
        });
    }

    /**
     * Returns already cached categories
     * @returns {Promise}
     */
    function getCategories() {
        return categoriesMap;
    }

    /**
     * Returns map of categories indexed by category.id and refreshes local categoriesMap
     *
     * @returns {Promise}
     */
    function fetchCategories() {
        categoriesMap = $http.get(API_URL + '/categories').then(function(response) {
            var categories = {};
            var colors = ['primary', 'success', 'info', 'warning', 'danger'];

            if(response && response.data) {
                ng.forEach(response.data, function(category) {
                    category.color = colors.pop();
                    categories[category.id] = category;
                });
            }

            return categories;
        });

        return categoriesMap;
    }

    /**
     * Creates a new category and updates categoriesMap
     *
     * @param name
     * @returns Promise
     */
    function addCategory(name) {
        return $http.post(API_URL + '/categories', {
            name: name
        }).then(function() {
            fetchCategories();
        });
    }

    /**
     * Deletes an existing category and updates categiresMap
     */
    function deleteCategory(category_id) {
        return $http.delete(API_URL + '/categories/' + category_id).then(function() {
            fetchCategories();
        });
    }
}