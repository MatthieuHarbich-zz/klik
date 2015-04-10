'use strict';

angular.module('klikApp')
  .controller('EditorCtrl', function ( $state, $http, $scope, $stateParams) {
    $scope.message = 'Hello editor';

	var projectId = $stateParams.projectId;

    $http.get('/api/projects/' + projectId).success(function(project){
    	$scope.project = project;    	
    });


    

  })
  	.controller('SocketTestCtrl', function($state, $http, $scope, $stateParams, socket){

  		 var projectId = $stateParams.projectId;

		    $http.get('/api/projects/' + projectId).success(function(project) {
		      $scope.project = project;
		      $scope.word = project.number;
		      socket.syncUpdates('word', $scope.word);
		    });

		    

		   

		    $scope.change = function(newWord){
		    	console.log(newWord);
		    	$scope.word = newWord;

		    	$http.put('/api/projects/' + projectId, { number: $scope.word });
		      	$scope.word = '';
		    };

		    $scope.addThing = function() {
		      if($scope.newThing === '') {
		        return;
		      }
		      $http.post('/api/things', { name: $scope.newThing });
		      $scope.newThing = '';
		    };

		    $scope.deleteThing = function(thing) {
		      $http.delete('/api/things/' + thing._id);
		    };

		    $scope.$on('$destroy', function () {
		      socket.unsyncUpdates('thing');
		    });

});
