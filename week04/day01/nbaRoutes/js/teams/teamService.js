var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {

    // service code
    this.addNewGame = function(gameObj) {

      var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;

      if (gameObj.homeTeamScore/1 > gameObj.opponentScore/1) {
        gameObj.won = true;
      } else {
        gameObj.won = false;
      }

      return $http({
        method: 'POST',
        url: url,
        data: gameObj
      });
    }

    this.getTeamData = function(team) {
      var deferred = $q.defer();

      var url = 'https://api.parse.com/1/classes/' + team;

      $http({
        method: 'GET',
        url: url
      })

      .then(function(data) {

          var results = data.data.results;
          var wins = 0;
          var losses = 0;

          //results.forEach(function(value/*, index*/){
          //  if (value.won === true) {
          //    wins++;
          //  } else if (value.won === false) {
          //    losses++;
          //  }
          //});

          for (i = 0; i < results.length; i++) {
            if (results[i].won === true) {
              wins++;
            }
            else if (results[i].won === false) {
              losses++;
            }
          }

          results.wins = wins;
          results.losses = losses;

          deferred.resolve(results);
      });

      return deferred.promise;
    }

});
