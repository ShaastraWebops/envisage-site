'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('projects', {
    url: '/projects',
    template: require('./projects.html'),
    controller: 'projectsController',
    controllerAs: 'projects',
    authenticate: 'admin'
  });
}
