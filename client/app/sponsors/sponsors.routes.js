'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('sponsors', {
    url: '/sponsors',
    template: '<sponsors></sponsors>',
    authenticate: 'admin'
  });
}
