'use strict';

var app = angular.module('Football', [
    'ngRoute',
    'Football.controllers',
    'Football.services',
    'Football.directives',
    'Football.templates'
]);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'LeagueTableCtrl',
            templateUrl: 'views/leaguetable.tpl.html'
        })

        .when('/matchs/:matchID', {
            controller: 'MatchsCtrl',
            templateUrl: 'views/matchs.tpl.html'
        })

        .otherwise({
            redirectTo: '/'
        });
});
