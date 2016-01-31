import angular from 'angular';
import { calculateTotalPrice, generateDepartmentList } from '../utils';

export default () => {
  angular.module('shoppingCart')
  .controller('itemListCtrl', ['itemService', 'cartService', '$scope', '$state',
    function (itemService, cartService, $scope, $state) {
      const vm = this;

      // FetchItems
      itemService.getItemList()
        .then((res) => {
          vm.itemList = res.data;
          vm.departmentList = generateDepartmentList(res.data);
          $scope.$apply();
        })
        .catch((err) => {
          console.error(err);
        });

      // Get Cart Items
      vm.cartItemList = cartService.getCartItems() || [];
      vm.cartTotalPrice = calculateTotalPrice(vm.cartItemList);

      // Assign functions
      vm.addItemToCart = (item) => {
        cartService.addItem(item);
        vm.cartItemList = cartService.getCartItems() || [];
        vm.cartTotalPrice = calculateTotalPrice(vm.cartItemList);
      };


      vm.removeItemFromCart = (itemId) => {
        cartService.removeItem(itemId);
        vm.cartItemList = cartService.getCartItems() || [];
        vm.cartTotalPrice = calculateTotalPrice(vm.cartItemList);
      };

      vm.filterItemsByDepartment = (item) => {
        return !vm.selectedDepartments ||
          vm.selectedDepartments.length === 0 ||
          vm.selectedDepartments.includes(item.department);
      };

      vm.toggleSelectedDepartment = (department) => {
        if (!vm.selectedDepartments) {
          vm.selectedDepartments = [department];
          return;
        }
        const index = vm.selectedDepartments.indexOf(department);
        if (index === -1) {
          vm.selectedDepartments.push(department);
          return;
        }
        vm.selectedDepartments.splice(index, 1);
      };

      vm.directToInfoView = (itemId) => {
        $state.go('^.info', { itemId });
      };
    }]);
};
