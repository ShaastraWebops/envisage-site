'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('contact', {
    url: '/contact',
    template: '<contact></contact>'
  });
}
