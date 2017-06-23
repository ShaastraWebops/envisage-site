'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('prevprojects', {
    url: '/prevprojects',
    template: '<prevprojects></prevprojects>'
  });
}
