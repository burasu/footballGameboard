(function ()
{
    'use strict';

    angular.module('Football.directives', []);

    function game()
    {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: 'views/game.tpl.html'
        };
    }

    angular
        .module('Football.directives')
        .directive('game', game);

})();
