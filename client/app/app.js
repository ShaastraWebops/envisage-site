'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-validation-match';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import main from './main/main.component';
import account from './account';
import navbar from '../components/navbar/navbar.component';
import info from './info/info.component';
import footer from '../components/footer/footer.component';
import projects from './projects/projects.component';
import news from './news/news.component';
import prevprojects from './prevprojects/prevprojects.component';
import sponsors from './sponsors/sponsors.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.css';

angular.module('envisageApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, _Auth,
  account, projects, prevprojects, news, info, sponsors, 'validation.match', navbar, footer, main, constants, util
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['envisageApp'], {
      strictDi: true
    });
  });
