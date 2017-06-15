'use strict';

import angular from 'angular';
import routes from './sponsors.routes';
import sponsorsController from './sponsors.controller';

export default angular.module('envisageApp.sponsors', ['envisageApp.auth', 'ui.router'])
  .config(routes)
  .controller('sponsorsController', sponsorsController)
  .name;
