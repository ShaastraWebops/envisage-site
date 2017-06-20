'use strict';
import $ from 'jquery';

export default class LoginController {
  user = {
    name: '',
    email: '',
    password: ''
  };
  errors = {
    login: undefined
  };
  submitted = false;


  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;

      $('.navbar-nav > li ').css("display","none");
      $('.navbar-item').css("display","none");
      $('.navbar-default .navbar-nav > li > a').css("display","none");
      $("#containers").css("width","25%");
      $("#login-button").css("display","none");
      $("#form-contain").css("display","block");
      $("#heading").css("text-align","center");
      $("#form-contain").css("animation","expand 0.7s linear forwards"); 
    
    $("#email").focus(function(){
      if( $("#email").val() == "")
        $("#email-label").removeClass("float-label");
      
    });

    $("#password").focus(function(){
      if( $("#password").val() == "")
        $("#password-label").removeClass("float-label");
      
    });

    $("#email").focusout(function(){
      if( $("#email").val() == "")
       $("#email-label").addClass("float-label");
      
    });

    $("#password").focusout(function(){
      if( $("#password").val() == "")
        $("#password-label").addClass("float-label");
      
    });

    $("#email-label").click(function(){
      $("#email").focus();
    });

    $("#password-label").click(function(){
      $("#password").focus();
    });
  }

  login(form) {
    this.submitted = true;

    if(form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
        .then(() => {
          // Logged in, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          this.errors.login = err.message;
        });
    }
  }
}
