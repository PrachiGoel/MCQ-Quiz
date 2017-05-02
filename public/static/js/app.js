'use strict';

// angular.module('qbs.service', []);
// angular.module('qbs.directive', []);
// angular.module('qbs.filter', []);

// angular.module('qbs', ['qbs.service','qbs.directive','qbs.filter']);

var qbsApp = angular.module('qbs', ['ngRoute']);

qbsApp.config(function($routeProvider) { 
  
 $routeProvider.when('/index', {
   templateUrl : 'views/main.html',
   controller : 'QuizController'   
 }).when('/', {
    templateUrl : 'views/main.html',
    controller : 'QuizController' 
    }); 
});
