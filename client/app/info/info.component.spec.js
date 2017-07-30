'use strict';

import info from './info.component';
import {
  infoController
} from './info.component';

describe('Component: infoComponent', function() {
  beforeEach(angular.mock.module(info));
  beforeEach(angular.mock.module('stateMock'));

  var scope;
  var infoComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/info')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    infoComponent = $componentController('info', {
      $http,
      $scope: scope
    });
  }));

  it('should attach a list of info to the controller', function() {
    infoComponent.$onInit();
    $httpBackend.flush();
    expect(infoComponent.info.length)
      .to.equal(4);
  });
});
