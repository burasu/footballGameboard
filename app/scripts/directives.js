(function ()
{
    'use strict';

    angular.module('GameboardApp.directives', []);

    function game()
    {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: 'views/game.tpl.html'
        }
    }

    angular
        .module('GameboardApp.directives')
        .directive('game', game);

})();
