import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './info.routes';

export class infoController {


  project = {};
  edit = false;
  id = null;
  /*@ngInject*/
  constructor($stateParams,$http,$scope,$state,Auth) {
    this.id = $stateParams.id;
    this.$http = $http;
    this.$state = $state;
    this.$scope = $scope;
    $http.get('/api/prevprojects/'+this.id).then(res => {
      $scope.project = res.data;
    });
    Auth.getCurrentUser().then(user => {
      if(user.role === 'admin')
      {
        $scope.isAdmin = true;
      }
    });
    this.prevpath = '../assets/images/prev/';
  }

  $onInit() {
  }

  update() {
    var newproject = this.$scope.project;
    this.$http.put('/api/prevprojects/'+this.id,newproject).then(res => {
      if(res.status === 200)
      {
        this.$scope.success = "Successfully Updated";
        this.$state.reload();
      }
      else {
        this.$scope.error = "Something Went Wrong, try again";
      }
    });
  }
}


export default angular.module('envisageApp.info', [uiRouter])
  .config(routing)
  .component('info', {
    template: require('./info.html'),
    controller: infoController,
    controllerAs: 'info'
  })
  .name;
