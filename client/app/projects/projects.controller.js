'use strict';

angular.module('klikApp')

    .factory('projects', function($http){
   
        return{
            
            
           getProjects: function(callback) {
              $http({
                  method: 'GET',
                  url: 'api/projects/'
                }).success(function(projects) {

                  callback(null, projects);
                 

                }).error(function(err){
                  callback(err);
                });
          },

          getLastProject: function(callback) {
              $http({
                  method: 'GET',
                  url: 'api/projects/last'
                }).success(function(project) {

                  callback(null, project);
                 

                }).error(function(err){
                  callback(err);
                });
          }
        }
        

  })
   
  .controller('ProjectsController', function(projects, $scope, $http, ngDialog) {
    $scope.message = 'Here is projects my friend!!';

    projects.getProjects(function(err, projects){
      if (err) {

      } else{
        $scope.projects = projects;
      };
    });



    $scope.openDialog = function(project) {
        $scope.project = project;

        ngDialog.open({ template: 'closeTmpl.html', scope: $scope  });
        
    }

    $scope.deleteProject = function(project){

        
        var index = $scope.projects.indexOf(project);
        $http.delete('api/projects/' + project._id);
        $scope.projects.splice(index,1);
        

    }

    $scope.addProject = function(){
    	var newProject = {
    		name: $scope.newProjectName
    	};
      

      $scope.newProjectName = '';
    	$scope.projects.push(newProject);

      $http.post('/api/projects', newProject);

      projects.getLastProject(function(err, project){
      if (err) {
        console.log(err);
      } else{     
        _.last($scope.projects)._id = project._id;
      };
    });

        
    	// console.log($scope.projects);
    }
  });
