'use strict';

import projects from './projects.component';
import {
  ProjectsController
} from './projects.component';

describe('Component: ProjectsComponent', function() {
  beforeEach(angular.mock.module(projects));
  beforeEach(angular.mock.module('stateMock'));

  var scope;
  var projectsComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/projects')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    projectsComponent = $componentController('projects', {
      $http,
      $scope: scope
    });
  }));

  it('should attach a list of projects to the controller', function() {
    projectsComponent.$onInit();
    $httpBackend.flush();
    expect(projectsComponent.projects.length)
      .to.equal(4);
  });
});
