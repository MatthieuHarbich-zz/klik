'use strict';

angular.module('klikApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsController',
        authenticate: true
      });
  });



