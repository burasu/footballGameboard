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
            template: '<div class=col-sm-4><div class="row scorecard"><p class=period>{{ info.period }}</p><div class="visitor col-xs-4"><h2 class=visitor-score>{{ info.visitor_score }}</h2><h3><span class=visitor-city>{{ info.visitor_team.city }}</span><br><span class=visitor-name>{{ info.visitor_team.name }}</span></h3></div><div class="dash col-xs-3"><h2>-</h2></div><div class="home col-xs-4"><h2 class=home-score>{{ info.home_score }}</h2><h3><span class=home-city>{{ info.home_team.city }}</span><br><span class=home-name>{{ info.home_team.name }}</span></h3></div></div></div>'
        }
    }

    angular
        .module('GameboardApp.directives')
        .directive('game', game);

})();
