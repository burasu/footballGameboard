'use strict';

/* Services */

var BaseUrl = 'http://api.football-data.org/';

angular.module('Football.services', [])
    .factory('footballdataAPIservice', function($http)
    {
        var token = '2afde9e68d684e7a89749b3b15602184';
        var footballdataAPI = {};

        // Servicio que nos devuelve la tabla de clasificación de la liga indicada.
        footballdataAPI.getLeagueTable = function ()
        {
            $http.defaults.headers.common['X-Auth-Token'] = token;
            return $http.get(BaseUrl + 'alpha/soccerseasons/399/leagueTable?callback=JSON_CALLBACK');
        };

        // Servicio que devuelve un listado de las ligas aceptadas en la web.
        footballdataAPI.getLeagues = function ()
        {
            $http.defaults.headers.common['X-Auth-Token'] = token;
            return $http.get(BaseUrl + 'alpha/soccerseasons?callback=JSON_CALLBACK');
        };

        return footballdataAPI;
    });

