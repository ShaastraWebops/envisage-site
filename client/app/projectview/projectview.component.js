'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './projectview.routes';

export class ProjectviewController {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('envisageSiteApp.projectview', [uiRouter])
  .config(routing)
  .component('projectview', {
    template: require('./projectview.html'),
    controller: ProjectviewController,
    controllerAs: 'ProjectviewCtrl'
  })
  .name;

  

