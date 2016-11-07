'use strict';

/* App Module */

var cityApp = angular.module('cityApp', [
  'ngRoute'
]);

cityApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        redirectTo: '/events'
      }).
      when('/events', {
        templateUrl: 'partials/events.html',
        controller: 'eventsCtrl'
      }).
      when('/event/:id', {
        templateUrl: 'partials/event-detail.html',
        controller: 'eventsDetailCtrl'
      })
  }]);

