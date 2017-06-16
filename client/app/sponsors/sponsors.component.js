import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './sponsors.routes';

export class SponsorsController {

  sponsors = [];
  newSponsor = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/sponsors')
      .then(response => {
        this.sponsors = response.data;
      });
  }

  addSponsor() {
    if(this.newSponsor) {
      this.$http.post('/api/sponsors', {
        name: this.newSponsor
      });
      this.newSponsor = '';
    }
  }

  deleteSponsor() {
    this.$http.delete(`/api/sponsors/${sponsor._id}`);
  }
}

export default angular.module('envisageApp.sponsors', [uiRouter])
  .config(routing)
  .component('sponsors', {
    template: require('./sponsors.html'),
    controller: SponsorsController
  })
  .name;
