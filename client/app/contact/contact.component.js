import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './contact.routes';

export class contactController {
  /*@ngInject*/
  constructor($http) {
    this.cores = [];
    this.coords = [];
    this.supercoords = [];
    var app = this;
    $http.get('/api/users/').then(res => {
      for(var i=0;i<res.data.length;i++)
      {
        if(res.data[i].role === "core")
        {
          app.cores.push(res.data[i]);
        }
        else if(res.data[i].role === "heads")
        {
          app.supercoords.push(res.data[i]);
        }
        else if(res.data[i].role === "user")
        {
          app.coords.push(res.data[i]);
        }
      }
    });
  }

  $onInit() {
  }

}


  export default angular.module('envisageApp.contact', [uiRouter])
    .config(routing)
    .component('contact', {
      template: require('./contact.html'),
      controller: contactController,
      controllerAs: 'contact'
    })
    .name;
