import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './projects.routes';

export class ProjectsController {

  projects = [];
  newProject = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/projects')
      .then(response => {
        this.projects = response.data;
      });
  }

  addProject() {
    if(this.newProject) {
      this.$http.post('/api/projects', {
        name: this.newProject
      });
      this.newProject = '';
    }
  }

  deleteProject() {
    this.$http.delete(`/api/projects/${project._id}`);
  }
}

export default angular.module('envisageApp.projects', [uiRouter])
  .config(routing)
  .component('projects', {
    template: require('./projects.html'),
    controller: ProjectsController
  })
  .name;
