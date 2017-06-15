'use strict';

import angular from 'angular';
import routes from './news.routes';
import newsController from './news.controller';

export default angular.module('envisageApp.news', ['envisageApp.auth', 'ui.router'])
  .config(routes)
  .controller('newsController', newsController)
  .name;
