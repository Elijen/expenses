var angular = require('angular');
var dependencies = [
    require('angular-ui-router'),
    require('./chart/chart.module.js')
];
var expenses = angular.module('expenses', dependencies);

// Routing
expenses.config(require('./expenses.routing.js'));

// Services
expenses.service('expensesData', require('./data/data.service.js'));

// Directives
expenses.directive('expensesList', require('./list/list.directive.js'));

module.exports = expenses;