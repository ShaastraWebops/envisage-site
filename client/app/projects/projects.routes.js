'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider
  .state('projects', {
    url: '/projects',
    template: '<projects></projects>'
    })

  .state('project', {
  	url: '/projects/:id',
  	template: '<p>Project page</p>'
  })
}
