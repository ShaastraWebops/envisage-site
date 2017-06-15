'use strict';

import angular from 'angular';
import routes from './prevprojects.routes';
import prevprojectsController from './prevprojects.controller';

export default angular.module('envisageApp.prevprojects', ['envisageApp.auth', 'ui.router'])
  .config(routes)
  .controller('prevprojectsController', prevprojectsController)
  .name;
