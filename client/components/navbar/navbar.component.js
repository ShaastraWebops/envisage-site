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
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;

    $("#containers").hover( function(){
        $("#containers").css("width","100%");
      setTimeout(function(){ 
        $('.navbar-item').css("display","block");
        $('.navbar-default .navbar-nav > li > a').css("display","block");
        $('.navbar-nav > li ').css("display","block");

        
       }, 500);
    },
    function(){

      $('.navbar-default .navbar-nav > li > a').css("display","none");
      $('.navbar-nav > li ').css("display","none");
      $('.navbar-item').css("display","none");
      $("#containers").css("width","12%");
    })
  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
