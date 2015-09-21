'use strict';

/* Controllers */

angular.module('Football.controllers', [])

    // Controlador que muestra la lista de clasificación de la liga.
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

    // Controlador que muestra los resultados de la jornada seleccioanda.
    .controller('MatchsCtrl', function($scope, $routeParams, footballdataAPIservice)
    {
        $scope.league = [];
        $scope.matchs = [];
        $scope.principal = true;

        footballdataAPIservice.getLeague().success(function (response)
        {
            $scope.league = response;
            $scope.getNumber = function(num)
            {
                num = (num - 1) * 2;
                return new Array(num);
            };

        });

        if ($routeParams.matchID !== 'season')
        {
            $scope.macth = $routeParams.matchID;

            $scope.principal = false;
            footballdataAPIservice.getMatchs($routeParams.matchID).success(function (response)
            {
                console.log(response);
                $scope.matchs = response;
            });
        }

        $scope.match = $routeParams.matchID;
    });
