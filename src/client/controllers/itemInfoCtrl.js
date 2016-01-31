import angular from 'angular';

export default () => {
  angular.module('shoppingCart')
  .controller('itemInfoCtrl', ['itemService', 'cartService', '$stateParams', '$scope',
    function (itemService, cartService, $stateParams, $scope) {
      const vm = this;
      const itemId = $stateParams.itemId;

      itemService.getItem(itemId)
        .then((res) => {
          vm.item = res.data;
          $scope.$apply();
        })
        .catch(console.error);

      vm.addItemToCart = cartService.addItem;
    }]);
};
