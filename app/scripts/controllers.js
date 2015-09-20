'use strict';

/* Controllers */

angular.module('Football.controllers', [])

    .controller('LeagueTableCtrl', function($scope, footballdataAPIservice)
    {
        $scope.league = [];
        $scope.leagueTable = [];

        footballdataAPIservice.getLeague().success(function (response)
        {
            $scope.league = response;

            $scope.getNumber = function(num)
            {
                num = (num - 1) * 2;

                return new Array(num);
            };

        });

        footballdataAPIservice.getLeagueTable().success(function (response)
        {
            $scope.leagueTable = response;
        });

    })

    .controller('MatchsCtrl', function($scope, $routeParams, footballdataAPIservice)
    {
        $scope.matchs = [];

        footballdataAPIservice.getMatchs($routeParams.matchID).success(function (response)
        {
            $scope.matchs = response;

            console.log($scope.matchs);
        });
        $scope.match = $routeParams.matchID;
        $scope.prueba = 'Funciona';
    });
