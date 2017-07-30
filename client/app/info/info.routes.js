'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('info', {
    url: '/info',
    params: {
      id: null
    },
    template: '<info></info>',
    authenticate: true
  });
}
