var faker = require('faker');
var fs = require('fs');
var path = require('path');

var itemList = [];
var id;

for (var i = 0; i < 50; i++) {
  id = faker.random.uuid();
  itemList.push({
    id: id,
    color: faker.commerce.color(),
    department: faker.commerce.department(),
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.technics() + '/' + id
  });
}

fs.writeFile(path.join(__dirname, '../mock/items.json'), JSON.stringify(itemList));
