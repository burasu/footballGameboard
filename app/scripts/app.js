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
            controller: 'LeagueCtrl',
            templateUrl: 'views/leagues.tpl.html'
        })
        .when('/league/:leagueID', {
            controller: 'LeagueTableCtrl',
            templateUrl: 'views/home.tpl.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
