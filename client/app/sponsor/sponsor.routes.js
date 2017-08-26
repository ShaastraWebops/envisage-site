'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('sponsor', {
    url: '/sponsor',
    template: '<sponsor></sponsor>',
    authenticate: 'admin'
  });
}
