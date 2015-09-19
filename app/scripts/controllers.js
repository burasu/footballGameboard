'use strict';

/* Controllers */

angular.module('Football.controllers', [])

    .controller('LeagueCtrl', function($scope, footballdataAPIservice)
    {
        $scope.leagues = [];

        footballdataAPIservice.getLeagues().success(function (response)
        {
            $scope.leagues = response;
            console.log($scope.leagues);
        })
    })

    .controller('LeagueTableCtrl', function($scope, footballdataAPIservice)
    {

        $scope.leagueTable = [];

        footballdataAPIservice.getLeagueTable().success(function (response) {

            $scope.leagueTable = response;

            console.log($scope.leagueTable);
        });

    })
    .controller('ScoreController', function($scope) {

        $scope.scores = [
            {
                stadium: 'La Rosaleda',
                homeTeam: {
                    name: 'Málaga',
                    logo: 'https://upload.wikimedia.org/wikipedia/en/c/c3/M%C3%A1laga_CF.png'
                },
                visitorTeam: {
                    name: 'Sevilla',
                    logo: 'https://upload.wikimedia.org/wikipedia/en/8/86/Sevilla_cf_200px.png'
                },
                homeScore: 0,
                visitorScore: 0
            },
            {
                stadium: 'Power8 Stadium',
                homeTeam: {
                    name: 'Espanyol'
                },
                visitorTeam: {
                    name: 'Getafe'
                },
                homeScore: 1,
                visitorScore: 0
            },
            {
                stadium: 'Vicente Calderón',
                homeTeam: {
                    name: 'Atético de Madrid'
                },
                visitorTeam: {
                    name: 'U.D. Las Palmas'
                },
                homeScore: 1,
                visitorScore: 0
            },
            {
                stadium: 'Riazor',
                homeTeam: {
                    name: 'Deportivo de la Coruña'
                },
                visitorTeam: {
                    name: 'Real Sociedad'
                } ,
                homeScore: 0,
                visitorScore: 0
            }
        ];

    });
