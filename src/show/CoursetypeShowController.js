'use strict';

var CoursetypeShowController = function($controller, $routeParams,
  $scope, $q, Coursetype, npdcAppConfig, Project) {
    'ngInject';


  $controller('NpolarBaseController', {
    $scope: $scope
  });
  $scope.resource = Coursetype;


  let show = function() {

    $scope.show().$promise.then((Coursetype) => {

    });

  };


  show();

};


module.exports = CoursetypeShowController;
