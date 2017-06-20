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

    $(window).on('resize',function(){
      if($(window).innerWidth() < 775)
      {
          $("#containers").css("width","100%");
          setTimeout( function(){
            $('.navbar-item').css("display","block");
            $('.navbar-default .navbar-nav > li > a').css("display","block");
            $('.navbar-nav > li ').css("display","block");
          },300);
          
      }

      else
      {
        
        setTimeout( function(){
          $('.navbar-nav > li ').css("display","none");
          $('.navbar-item').css("display","none");
          $('.navbar-default .navbar-nav > li > a').css("display","none");
          $("#containers").css("width","25%");
        },300);
        
      }
    })

    if($(window).innerWidth() < 775)
    {
      $("#containers").css("width","100%");
      setTimeout( function(){
        $('.navbar-item').css("display","block");
        $('.navbar-default .navbar-nav > li > a').css("display","block");
        $('.navbar-nav > li ').css("display","block");
      },300);
    }

    else
    {
      setTimeout( function(){
          $('.navbar-nav > li ').css("display","none");
          $('.navbar-item').css("display","none");
          $('.navbar-default .navbar-nav > li > a').css("display","none");
          $("#containers").css("width","25%");
        },300);
    }

    $("#navbar-contain").hover( function(){
         $("#containers").css("width","100%");
          setTimeout( function(){
            $('.navbar-item').css("display","block");
            $('.navbar-default .navbar-nav > li > a').css("display","block");
            $('.navbar-nav > li ').css("display","block");
          },300);
    },
    function(){
      if($(window).innerWidth() > 775)
      {
        setTimeout( function(){
          $('.navbar-nav > li ').css("display","none");
          $('.navbar-item').css("display","none");
          $('.navbar-default .navbar-nav > li > a').css("display","none");
          $("#containers").css("width","25%");
        },300);
      }
    
    })
  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
