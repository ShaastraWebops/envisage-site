import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './prevprojects.routes';

export class PrevprojectsController {

  prevprojects = [];
  newPrevproject = '';

  /*@ngInject*/
  constructor($http, Auth) {
    this.$http = $http;
    this.isAdmin = Auth.isAdminSync;
  }

  $onInit() {
    this.$http.get('/api/prevprojects')
      .then(response => {
        this.prevprojects = response.data;
      });
  }

  addPrevproject() {
    if(this.newPrevproject) {
      this.$http.post('/api/prevprojects', {
        name: this.newPrevproject
      });
      this.newPrevproject = '';
    }
  }

  deletePrevproject(index) {
    this.prevproject = this.prevprojects[index];
    this.$http.delete(`/api/posts/${this.prevproject._id}`);
  }
}

export default angular.module('envisageApp.prevprojects', [uiRouter])
  .config(routing)
  .component('prevprojects', {
    template: require('./prevprojects.html'),
    controller: PrevprojectsController
  })
  .name;
