import angular from 'angular';

export default () => {
  angular.module('shoppingCart')
  .factory('itemService', ['$http', function ($http) {
    return {
      getItemList() {
        return new Promise((resolve, reject) => {
          $http({
            method: 'GET',
            url: '/items'
          }).then((res) => {
            resolve(res);
          }).catch((err) => {
            reject(err);
          });
        });
      },
      getItem(id) {
        return new Promise((resolve, reject) => {
          $http({
            method: 'GET',
            url: `/items/${id}`
          }).then((res) => {
            resolve(res);
          }).catch((err) => {
            reject(err);
          });
        });
      }
    };
  }]);
};
