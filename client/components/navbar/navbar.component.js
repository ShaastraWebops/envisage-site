'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';
import $ from 'jquery';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];

  isCollapsed = true;

  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync||Auth.isHeadsSync;
    this.getCurrentUser = Auth.getCurrentUserSync;

    }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
