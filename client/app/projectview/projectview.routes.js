'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('Projectview', {
      url: '/Projectview',
      template: '<projectview></projectview>'
    });
}
