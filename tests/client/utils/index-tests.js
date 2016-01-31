import { expect } from 'chai';
import { calculateTotalPrice } from '../../../src/client/utils';

describe('utils', () => {
  describe('#calculateTotalPrice', () => {
    it('should return 0 if param is not passed', () => {
      expect(calculateTotalPrice()).to.equal(0);
    });

    it('should caculate total price from item quantity and price', () => {
      let itemList = [
        { price: 20.23, quantity: 2 },
        { price: 42.52, quantity: 5 }
      ];

      expect(calculateTotalPrice(itemList)).to.equal(253.06);
    });
  });
});
