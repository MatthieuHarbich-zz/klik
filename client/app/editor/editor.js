'use strict';

angular.module('klikApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editor', {
        url: '/editor/:projectId',
        templateUrl: 'app/editor/editor.html',
        controller: 'EditorCtrl',
        authenticate: true
      });
  });

 