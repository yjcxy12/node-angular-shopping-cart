import angular from 'angular';

export default () => {
  angular.module('shoppingCart')
  .factory('cartService', ['$http', ($http) => {
    return {
      getCartItems() {
        const itemList = window.localStorage.getItem('cartItemList');
        return itemList && JSON.parse(itemList);
      },
      addItem(item) {
        const itemStr = window.localStorage.getItem('cartItemList');
        const itemList = itemStr ? JSON.parse(itemStr) : [];
        const itemInCart = itemList.find((cartItem) => cartItem.id === item.id);
        if (itemInCart) {
          itemInCart.quantity += 1;
        } else {
          itemList.push({
            id: item.id,
            productName: item.productName,
            price: item.price,
            quantity: 1
          });
        }

        window.localStorage.setItem('cartItemList', JSON.stringify(itemList));
      },
      removeItem(itemId) {
        const itemStr = window.localStorage.getItem('cartItemList');
        const itemList = itemStr ? JSON.parse(itemStr) : [];
        const index = itemList.findIndex((item) => item.id === itemId);
        if (index === -1) return;
        if (itemList[index].quantity > 1) {
          itemList[index].quantity -= 1;
        } else {
          itemList.splice(index, 1);
        }

        window.localStorage.setItem('cartItemList', JSON.stringify(itemList));
      },
      clearCart() {
        window.localStorage.removeItem('cartItemList');
      },
      submitPayment(details) {
        return new Promise((resolve, reject) => {
          $http({
            method: 'POST',
            url: `/submit`,
            data: details
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
