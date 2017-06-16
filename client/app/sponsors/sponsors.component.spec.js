'use strict';

import sponsors from './sponsors.component';
import {
  SponsorsController
} from './sponsors.component';

describe('Component: SponsorsComponent', function() {
  beforeEach(angular.mock.module(sponsors));
  beforeEach(angular.mock.module('stateMock'));

  var scope;
  var sponsorsComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/sponsors')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    sponsorsComponent = $componentController('sponsors', {
      $http,
      $scope: scope
    });
  }));

  it('should attach a list of sponsors to the controller', function() {
    sponsorsComponent.$onInit();
    $httpBackend.flush();
    expect(sponsorsComponent.sponsors.length)
      .to.equal(4);
  });
});
