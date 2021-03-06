'use strict';

import news from './news.component';
import {
  NewsController
} from './news.component';

describe('Component: NewsComponent', function() {
  beforeEach(angular.mock.module(news));
  beforeEach(angular.mock.module('stateMock'));

  var scope;
  var newsComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/news')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    newsComponent = $componentController('news', {
      $http,
      $scope: scope
    });
  }));

  it('should attach a list of news to the controller', function() {
    newsComponent.$onInit();
    $httpBackend.flush();
    expect(newsComponent.news.length)
      .to.equal(4);
  });
});
