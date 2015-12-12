module.exports = Session;

Session.$inject = [];

function Session() {
    var currentUser;

    return {
        getUser: getUser,
        setUser: setUser
    };

    function getUser() {
        return currentUser;
    }

    function setUser(user) {
        currentUser = user;
    }
}