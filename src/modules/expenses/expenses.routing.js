module.exports = Routing;

Routing.$inject = ['$stateProvider', '$locationProvider'];

function Routing($stateProvider, $locationProvider) {
    // Default state -
    $stateProvider.state("overview", {
        url: '/',
        template: require('./overview/overview.html'),
        controller: require('./overview/overview.controller.js')
    });

    $locationProvider.html5Mode(true);
}