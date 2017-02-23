'use strict';

var router = function($routeProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider.when('/:id', {
    templateUrl: 'show/show-coursetype.html',
    controller: 'CoursetypeShowController'
  }).when('/:id/edit', {
    template: '<npdc:formula></npdc:formula>',
    controller: 'CoursetypeEditController'
  }).when('/', {
    templateUrl: 'search/search.html',
    controller: 'CoursetypeSearchController',
    reloadOnSearch: false
  });
};

module.exports = router;
