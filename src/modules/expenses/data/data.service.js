module.exports = Data;

Data.$inject = ['$http', '$q'];

function Data($http, $q) {
    return {
        getUserProfiles: getUserProfiles,
        getUserExpenses: getUserExpenses
    };

    function getUserExpenses(userId, from, to) {
        var deferred = $q.defer();

        deferred.resolve({
            expenses: [
                {id: 1, date: '2015-10-1', amount: 534, categoryId: 1, userId: userId, note: 'Dinner'},
                {id: 2, date: '2015-11-5', amount: 5465, categoryId: 2, userId: userId, note: 'Flight to London'},
                {id: 3, date: '2015-11-7', amount: 1234, categoryId: 2, userId: userId, note: 'Online course'},
                {id: 4, date: '2015-11-11', amount: 4879, categoryId: 4, userId: userId, note: 'Moto G smartphone'},
                {id: 5, date: '2015-11-11', amount: 966, categoryId: 3, userId: userId, note: 'Mobile bill'},
                {id: 6, date: '2015-11-18', amount: 999, categoryId: 1, userId: userId, note: 'Internet bill'},
                {id: 7, date: '2015-12-2', amount: 299, categoryId: 2, userId: userId, note: 'Google Music'},
                {id: 8, date: '2015-12-8', amount: 14500, categoryId: 1, userId: userId, note: 'Rent'}
            ]
        });

        return deferred.promise;
    }

    function getUserProfiles() {
        var deferred = $q.defer();

        deferred.resolve({
            users: [
                {id: 1, firstname: 'John', lastname: 'Doe'},
                {id: 2, firstname: 'Bob', lastname: 'Doe'},
                {id: 3, firstname: 'Anna', lastname: 'Doe'},
                {id: 4, firstname: 'Frans', lastname: 'Smith'},
                {id: 5, firstname: 'Zoe', lastname: 'Smith'},
                {id: 6, firstname: 'Mark', lastname: 'Smith'}
            ]
        });

        return deferred.promise;
    }
}