'use strict';
// @flow

import angular from 'angular';

export default class SignupController {

  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
    this.user = {
      name: '',
      email: '',
      password: '',
      linkedin: ''
    };
    this.errors = {};
    this.submitted = false;

  }

  register(form) {
    this.submitted = true;
    if(form.$valid) {
      return this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        linkedin: this.user.linkedin
      })
        .then(() => {
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}
