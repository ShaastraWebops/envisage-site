'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('prevprojects', {
    url: '/prevprojects',
    template: require('./prevprojects.html'),
    controller: 'prevprojectsController',
    controllerAs: 'prevprojects',
    authenticate: 'admin'
  });
}
