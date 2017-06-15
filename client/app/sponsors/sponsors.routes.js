'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('sponsors', {
    url: '/sponsors',
    template: require('./sponsors.html'),
    controller: 'sponsorsController',
    controllerAs: 'sponsors',
    authenticate: 'admin'
  });
}
