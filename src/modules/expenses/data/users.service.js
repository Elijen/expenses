module.exports = Data;

Data.$inject = ['$http', '$q', 'API_URL'];

function Data($http, $q, API_URL) {
    return {
        getUserProfiles: getUserProfiles,
    };

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