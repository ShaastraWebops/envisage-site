'use strict';

import angular from 'angular';
import routes from './projects.routes';
import projectsController from './projects.controller';

export default angular.module('envisageApp.projects', ['envisageApp.auth', 'ui.router'])
  .config(routes)
  .controller('projectsController', projectsController)
  .name;
