'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('news', {
    url: '/news',
    template: '<news></news>'
  });
}
