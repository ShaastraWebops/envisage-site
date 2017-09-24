import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './projects.routes';

export class ProjectsController {

  projects = [];
  newProject = [];

  /*@ngInject*/
  constructor($http, Auth) {
    this.$http = $http;
    this.isAdmin = Auth.isAdminSync;
  }

  $onInit() {
    this.$http.get('/api/projects')
      .then(response => {
        this.projects = response.data;
        console.log(response.data);
        for(var i=0;i<this.projects.length;i++)
            {
                this.projects[i].image = '/api/projects/view/'+this.projects[i].image;
            }
      });
  }

  addProject() {
    if(this.newProject) {
      this.$http.post('/api/projects', {
        name: this.newProject.name,
        info: this.newProject.info
      });
      this.newProject = '';
      window.location.reload();
    }
  }

  deleteProject(index) {
    this.project = this.projects[index];
    this.$http.delete(`/api/posts/${this.project._id}`);
  }
}

export class ProjectController{
  constructor($http, $stateParams)
  {
    this.$http = $http;
    this.$stateParams = $stateParams;

    this.id = $stateParams.id;
    console.log(this.id);
  }
}

export default angular.module('envisageApp.projects', [uiRouter])
  .config(routing)
  .component('projects', {
    template: require('./projects.html'),
    controller: ProjectsController,
    controllerAs: "pCtrl"
  })
  .component('project', {
    template: require('./project.html'),
    controller: ProjectController,
    controllerAs: "prCtrl"
  })
  .name;
