var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

  //Code here
  this.artistSearch = function(artistName) {
    var deferred = $q.defer();

    $http ({
      method: 'JSONP',
      url: 'https://itunes.apple.com/search?term=' + artistName + '&callback=JSON_CALLBACK'
    }).then(function(response) {

      var songs = response.data.results,
      result = [];

      songs.forEach(function (song) {
        result.push({
          AlbumArt: song.artworkUrl100,
          Artist: song.artistName,
          Collection: song.collectionName,
          CollectionPrice: song.collectionPrice,
          Play: song.previewUrl,
          Type: song.kind,
          ReleaseDate: new Date(song.releaseDate).toDateString()
        });
      });

      deferred.resolve(result);
      //console.log('The response is ', response);
      //console.log('The response.data.results is ', response.data.results);

      // var smallArtistArray = [];
      // for (i = 0; i < response.data.results.length; i++) {
      //   var smallArtistObject = {};
      //   smallArtistObject.AlbumArt = response.data.results[i].artworkUrl30;
      //   smallArtistObject.Artist = response.data.results[i].artistName;
      //   smallArtistObject.Collection = response.data.results[i].collectionName;
      //   smallArtistObject.CollectionPrice = response.data.results[i].CollectionPrice;
      //   smallArtistObject.Play = response.data.results[i].previewUrl;
      //   smallArtistObject.Type = response.data.results[i].kind;
      //   smallArtistArray.push(smallArtistObject);
      //
      //   }
      //console.log('The smallArtistArray is ', smallArtistArray);
      // deferred.resolve(smallArtistArray);
    });


    return deferred.promise;

  };

});
