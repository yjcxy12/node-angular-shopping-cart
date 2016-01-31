import angular from 'angular';

export default () => {
  angular.module('shoppingCart')
  .controller('checkoutCtrl', ['cartService', function (cartService) {
    const vm = this;

    vm.submit = (formData) => {
      cartService.submitPayment(formData);
      cartService.clearCart();
    };
  }]);
};
