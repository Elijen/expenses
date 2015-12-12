require('./list.css');

module.exports = ListDirective;

ListDirective.$inject = [];

function ListDirective(){
    return {
        link: link,
        template: require('./list.html'),
        scope: {
            expenses: '=expensesList'
        }
    };

    function link($scope) {

    }
}

