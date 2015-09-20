'use strict';

/* Services */

var BaseUrl = 'http://api.football-data.org/';
var leagueID = 399;

angular.module('Football.services', [])
    .factory('footballdataAPIservice', function($http)
    {
        var token = '2afde9e68d684e7a89749b3b15602184';
        var footballdataAPI = {};

        // Servicio que nos devuelve datos de la liga en cuestión. Nombre de la liga,
        // número de equipos, etc.
        footballdataAPI.getLeague = function ()
        {
            $http.defaults.headers.common['X-Auth-Token'] = token;
            return $http.get(BaseUrl + 'alpha/soccerseasons/' + leagueID);
        };

        // Servicio que nos devuelve la tabla de clasificación de la liga indicada.
        footballdataAPI.getLeagueTable = function ()
        {
            $http.defaults.headers.common['X-Auth-Token'] = token;
            return $http.get(BaseUrl + 'alpha/soccerseasons/' + leagueID + '/leagueTable');
        };

        // Servicio que devuelve los resultados de la jornada indicada.
        footballdataAPI.getMatchs = function (match)
        {
            $http.defaults.headers.common['X-Auth-Token'] = token;
            return $http.get(BaseUrl + 'alpha/soccerseasons/' + leagueID + '/fixtures?matchday=' + match);
        };

        return footballdataAPI;
    });

