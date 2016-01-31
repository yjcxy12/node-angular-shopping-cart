import angular from 'angular';

export default () => {
  angular.module('shoppingCart')
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        template: '<h1>Welcome!</h1>'
      })
      .state('items', {
        url: '/items',
        templateUrl: 'templates/items',
        controller: 'itemListCtrl as vm'
      })
      .state('items.list', {
        url: '/list',
        templateUrl: 'templates/item-list'
      })
      .state('items.info', {
        url: '/:itemId',
        templateUrl: 'templates/item-info',
        controller: 'itemInfoCtrl as vm'
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'templates/checkout',
        controller: 'checkoutCtrl as vm'
      });
  }]);
};
