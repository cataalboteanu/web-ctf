// Set up sequelize mysql connection
const Sequelize = require('sequelize');
const { Op } = require('sequelize')

const sequelize = new Sequelize('vulns', 'admin', '1234', {
    host: 'localhost',
    dialect: 'mysql'
  });

class Product extends Sequelize.Model {}

Product.init({
    name: Sequelize.STRING,
    feedback: Sequelize.INTEGER,
    review: Sequelize.JSON,
}, {
    sequelize,
    tableName: 'Product',
    timestamps: false
});


const get_products = async function(){
  await sequelize.sync();
  const p = await Product.findAll({
    raw: true
  });
  //console.log(p)
  return p;
}

const get_popular = async function(req, res){
  //const rating = req.query.rating
  //console.log(rating)
  //const string = "review." + "rating' = 10 UNION SELECT null, nume, pass , 1 from Users; -- ";
  const key = "review." + req.query.filter
  const value = req.query.value
  p = [];

  if(req.query.filter == "price"){
    p = await Product.findAll({
      where: {
        review: {
          price: {
            [Op.lte]:sequelize.cast(value, 'decimal')
          }
        }
      }
    }).catch(function(err){
      return res.send("Eroare SQL\n" + err);
    })
  }

  if(req.query.filter.includes("rating")){
    p = await Product.findAll({
      //where: {review: sequelize.json("review.rating", "10' UNION SELECT null, nume, pass , 1 from Users; -- ")},
      //where: {review: sequelize.json("review.rating", sequelize.literal(rating))},
      where: {review: sequelize.json(key, value)},
    }).catch(function(err){
      return res.send("Eroare SQL\n" + err);
    })
  }
  //console.log(p)

  return p;
}

exports.product_list = function(req, res) {

  var product_array = [];

  if(req.query.filter){
    get_popular(req, res).then(values => {
      for(var i in values)
        product_array.push(values[i]);
      
      return res.render("level2Hard", {title: "Web-CTF", product_list: product_array});
    }); 
  }
  else{
    get_products().then(values => {
      for(var i in values)
        product_array.push(values[i]);
  
      return res.render("level2Hard", {title: "Web-CTF", product_list: product_array});
    }); 
  }


  

}



exports.find_popular = function (req, res){
  get_popular.then().then(values => {
    for(var i in values)
      product_array.push(values[i]);

    return res.render("level2Hard/popular", {title: "Web-CTF", product_list: product_array});
  }); 
  

}

// (async () => {
  //   await sequelize.sync();
  
  //   string = "review.rating' = 3 UNION SELECT VERSION(); -- ";
  
  //   console.log(await Product.findAll({
  //     // where: {
  //     //   review: {
  //     //     "rating') AS DECIMAL) = 3 UNION SELECT VERSION(); -- ": 1
  //     //   }
  //     // },
  //     //where: {review: {'rating': 3}},
  //     where: {name: sequelize.json("review.rating' = 10 UNION SELECT VERSION(); -- ", 10)},
  //     attributes: ['name'],
  //     raw: true
  //   }));
  