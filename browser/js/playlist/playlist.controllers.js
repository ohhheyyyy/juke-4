'use strict';

/* PLAYLIST (SINGULAR) CONTROLLER */

juke.controller('newPlaylist', function ($scope, PlayerFactory, thePlaylist) {

  $scope.playlist = thePlaylist;

});


The new playlist: {
  name: "my cool playlist"
}