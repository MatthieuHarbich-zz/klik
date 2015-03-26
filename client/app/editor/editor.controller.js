'use strict';

angular.module('klikApp')
  .controller('EditorCtrl', function ( $state, $http, $scope, $stateParams) {
    $scope.message = 'Hello editor';

	var projectId = $stateParams.projectId;

    var project = $http.get('/api/projects/' + projectId).success(function(project){
    	$scope.project = project;    	
    });


    

  });
