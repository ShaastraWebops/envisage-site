import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './news.routes';

export class NewsController {

  news = [];
  newNews = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/news')
      .then(response => {
        this.news = response.data;
      });
  }

  addNews() {
    if(this.newNews) {
      this.$http.post('/api/news', {
        name: this.newNews
      });
      this.newNews = '';
    }
  }

  deleteNews() {
    this.$http.delete(`/api/news/${news._id}`);
  }
}

export default angular.module('envisageApp.news', [uiRouter])
  .config(routing)
  .component('news', {
    template: require('./news.html'),
    controller: NewsController
  })
  .name;
