var angular = require('angular');
var dependencies = [
    require('angular-ui-router'),
    require('angular-ui-bootstrap'),
    require('./chart/chart.module.js')
];
var expenses = angular.module('expenses', dependencies);

// Routing
expenses.config(require('./expenses.routing.js'));

// Services
expenses.service('dataExpenses', require('./data/expenses.service.js'));
expenses.service('dataCategories', require('./data/categories.service.js'));
expenses.service('dataUsers', require('./data/users.service.js'));

// Directives
expenses.directive('expensesList', require('./list/list.directive.js'));
expenses.directive('expensesCategoryLabel', require('./categories/label.directive.js'));

// Constants
expenses.constant('API_URL', 'http://localhost:3000');

module.exports = expenses;