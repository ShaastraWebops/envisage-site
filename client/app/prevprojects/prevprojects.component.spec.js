'use strict';

import prevprojects from './prevprojects.component';
import {
  PrevprojectsController
} from './prevprojects.component';

describe('Component: PrevprojectsComponent', function() {
  beforeEach(angular.mock.module(prevprojects));
  beforeEach(angular.mock.module('stateMock'));

  var scope;
  var prevprojectsComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/prevprojects')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    prevprojectsComponent = $componentController('prevprojects', {
      $http,
      $scope: scope
    });
  }));

  it('should attach a list of prevprojects to the controller', function() {
    prevprojectsComponent.$onInit();
    $httpBackend.flush();
    expect(prevprojectsComponent.prevprojects.length)
      .to.equal(4);
  });
});
