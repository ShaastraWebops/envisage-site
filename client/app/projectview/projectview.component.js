'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './projectview.routes';

export class ProjectviewComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('envisageSiteApp.projectview', [uiRouter])
  .config(routes)
  .component('projectview', {
    template: require('./projectview.html'),
    controller: ProjectviewComponent,
    controllerAs: 'projectviewCtrl'
  })
  .name;
