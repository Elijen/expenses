var angular = require('angular');
require('angular-chartist.js');
require('chartist/dist/chartist.min.css');
require('./chart.css');

module.exports = 'expenses-chart';

var chartModule = angular.module('expenses-chart', ['angular-chartist']);
chartModule.directive('expensesChart', require('./chart.directive.js'));