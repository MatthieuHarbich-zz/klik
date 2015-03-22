'use strict';

angular.module('klikApp')
  .controller('ProjectsCtrl', function ($scope, $http, ngDialog) {
    $scope.message = 'Here is projects my friend!!';

    $http.get('/api/projects').success(function(projects){
        $scope.projects = projects;
        console.log(projects);
    })



    $scope.openDialog = function (project) {
        $scope.project = project;

        ngDialog.open({ template: 'closeTmpl.html', controller: 'ProjectsCtrl', scope: $scope  });
        
    }

    $scope.deleteProject = function(project){
       
        $http.delete('api/projects/' + project._id);

        var index = $scope.projects.indexOf(project);
        $scope.projects.splice(index,1);
        

    }

    $scope.addProject = function(){
    	var newProject = {
    		name: $scope.newProjectName
    	};
    	$scope.projects.push(newProject);

        $http.post('/api/projects', newProject);

        
    	console.log($scope.projects);
    }
  });
