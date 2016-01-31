export function calculateTotalPrice(itemList) {
  const totalPrice = itemList ? itemList.reduce((acc, item) => {
    return acc + item.quantity * parseFloat(item.price);
  }, 0) : 0;
  return parseFloat(totalPrice.toFixed(2));
}

export function generateDepartmentList(itemList) {
  const dup = {};
  return itemList
    .map((item) => {
      if (dup[item.department]) {
        return false;
      }
      dup[item.department] = true;
      return item.department;
    })
    .filter((item) => !!item);
}
