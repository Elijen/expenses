module.exports = Service;

Service.$inject = ['$http', 'API_URL'];

function Service($http, API_URL) {
    return {
        getUserExpenses: getUserExpenses,
        getUserExpensesMonthly: getUserExpensesMonthly,
        addUserExpense: addUserExpense,
        deleteUserExpense: deleteUserExpense
    };

    function getUserExpensesMonthly(user_id) {
        return $http.get(API_URL + '/users/' + user_id + '/expenses/monthly')
    }

    function getUserExpenses(user_id) {
        return $http.get(API_URL + '/users/' + user_id + '/expenses');
    }

    function addUserExpense(user_id, expense) {
        return $http.post(API_URL + '/users/' + user_id + '/expenses', expense);
    }

    function deleteUserExpense(user_id, expense_id) {
        return $http.delete(API_URL + '/users/' + user_id + '/expenses/' + expense_id);
    }
}