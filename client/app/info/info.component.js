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
    if(this.id === null)
    {
      $state.go('prevprojects');
    }
    this.$http = $http;
    this.$state = $state;
    this.$scope = $scope;
    $http.get('/api/prevprojects/'+this.id).then(res => {
      console.log(res.data, ' isthe res.data from info component');
      $scope.project = res.data;
      $scope.image = '/api/prevprojects/view/'+ res.data.image;
    });
    Auth.getCurrentUser().then(user => {
      if(user.role === 'admin'||user.role === 'heads')
      {
        $scope.isAdmin = true;
      }
    });
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
