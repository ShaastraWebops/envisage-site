'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('news', {
    url: '/news',
    template: require('./news.html'),
    controller: 'newsController',
    controllerAs: 'news',
    authenticate: 'admin'
  });
}
