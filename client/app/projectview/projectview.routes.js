'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('projectview', {
      url: '/projectview',
      template: '<projectview></projectview>',
       params: {
      id: null
    }
    });
}
