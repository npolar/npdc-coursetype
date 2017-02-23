'use strict';
var npdcCommon = require('npdc-common');
var AutoConfig = npdcCommon.AutoConfig;

var angular = require('angular');
require('npdc-common/src/wrappers/leaflet');

var npdcCoursetypeApp = angular.module('npdcCoursetypeApp', ['npdcCommon','leaflet']);

npdcCoursetypeApp.controller('CoursetypeShowController', require('./show/CoursetypeShowController'));
npdcCoursetypeApp.controller('CoursetypeSearchController', require('./search/CoursetypeSearchController'));
npdcCoursetypeApp.controller('CoursetypeEditController', require('./edit/CoursetypeEditController'));

// Bootstrap ngResource models using NpolarApiResource
var resources = [
  {'path': '/', 'resource': 'NpolarApi'},
  {'path': '/user', 'resource': 'User'},
  {'path': '/project', 'resource': 'Project' },
  {'path': '/coursetype', 'resource': 'Coursetype' }
];

resources.forEach(service => {
  // Expressive DI syntax is needed here
  npdcCoursetypeApp.factory(service.resource, ['NpolarApiResource', function (NpolarApiResource) {
  return NpolarApiResource.resource(service);
  }]);
});

// Routing
npdcCoursetypeApp.config(require('./router'));

npdcCoursetypeApp.config(($httpProvider, npolarApiConfig) => {
  var autoconfig = new AutoConfig("production");
  angular.extend(npolarApiConfig, autoconfig, { resources });
  console.debug("npolarApiConfig", npolarApiConfig);

  $httpProvider.interceptors.push('npolarApiInterceptor');
});

npdcCoursetypeApp.run(($http, npdcAppConfig, NpolarTranslate, NpolarLang) => {
  NpolarTranslate.loadBundles('npdc-coursetype');
  npdcAppConfig.toolbarTitle = 'NPI coursetypes';
});
