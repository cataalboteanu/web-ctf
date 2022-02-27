var mysql = require('mysql2');

exports.reset = function(req, res) {
    //MySQL db creationrs
    var pool  = mysql.createPool({
        connectionLimit : 10,
        host            : 'localhost',
        user            : 'admin',
        password        : '1234'
    });
  
    pool.getConnection(function(err, connection){
        if(err){
            console.log(err.message);
        }
        connection.query("CREATE DATABASE IF NOT EXISTS vulns;", function(err, data){
            connection.release();
            if(err){
                console.log(err.message);
            }
        });
  
    });
  
    pool.getConnection(function(err, connection){
        if(err){
            console.log(err.message);
        }
        connection.changeUser({database : "vulns"});

        let deleteProducts = "DROP TABLE `Product`";
        connection.query(deleteProducts, function(err, results, fields) {
            if (err) 
                console.log(err.message);
        });
        
        let createProducts = "CREATE TABLE IF NOT EXISTS `Product` ( `id` int unsigned NOT NULL AUTO_INCREMENT, `name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL, `feedback` varchar(64) DEFAULT NULL, `review` json DEFAULT NULL, PRIMARY KEY (`id`) ) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci";
        connection.query(createProducts, function(err, results, fields) {
            if (err) 
                console.log(err.message);
        });

        let insertProducts = "insert into `Product` (`feedback`, `id`, `name`, `review`) values ('ok', 1, 'Periuta de dinti', '{\"price\":5,\"rating\":3}'), ('great sound quality', 2, 'Boxa JBL', '{\"price\":300,\"rating\":3}'), ('expensive but quality', 3, 'Iphone 12', '{\"price\":3000,\"rating\":5}'), ('quality milk', 4, 'Milka', '{\"price\":10,\"rating\":4}'), ('great entertainment', 5, 'Bilet meci', '{\"price\":20,\"rating\":3}'), ('good fabric', 6, 'Camasa', '{\"price\":65,\"rating\":3}')"; 
        connection.query(insertProducts, function(err, results, fields) {
            if (err) 
                console.log(err.message);
        });

        //--------------------------------------------------------------------------------


        let deleteUsers = "DROP TABLE `Users`";
        connection.query(deleteUsers, function(err, results, fields) {
            if (err) 
                console.log(err.message);
        });

        let createUsers = "CREATE TABLE IF NOT EXISTS `Users` ( `id` int unsigned NOT NULL AUTO_INCREMENT, `nume` varchar(255) DEFAULT NULL, `pass` varchar(255) DEFAULT NULL, PRIMARY KEY (`id`) ) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci";
        connection.query(createUsers, function(err, results, fields) {
            if (err) 
                console.log(err.message);
        });

        let insertUsers = "insert into `Users` (`id`, `nume`, `pass`) values (1, 'Andrei', '1234'), (2, 'Nivel Urmator', 'w3x7UtQL');"
        connection.query(insertUsers, function(err, results, fields) {
            if (err) 
                console.log(err.message);
            connection.release();
        });

        pool.end();
    });

    //----------------------------------------------------------------------------------------------------

    //Mongo db creation
    const User = require('../models/nosqli_model');
    const Photo = require('../models/xss_stored_model')

    console.log("ajunge mongo");
    User.deleteMany({}, function (err) {});
    var users = [
        {
            username: "user",
            password: "user",
            role: "guest"
        },
        {
            username: "gabriel",
            password: "gabi1234",
            role: "guest"
        },
        {
            username: "admin",
            password: "yO36MeEu",
            role: "admin"
        }
    ];

    for (var i = 0; i < users.length; i++) {
		var user = new User(users[i]);
		user.save().catch(err => {
            console.log("Error adding user ")
        });
    }


    Photo.deleteMany({}, function (err) {});
    var photos = [
        {
            path: "/images/boat-gaa2ca329d_640.jpg",
            description: "Barca pe lac, priveliste de munte"
        },
        {
            path: "/images/dog-g213168153_640.jpg",
            description: "Caine zambaret"
        },
        {
            path: "/images/grill-g30f8f79f9_640.jpg",
            description: "Foisor pentru gratar"
        },
        {
            path: "/images/meat-gde809f16d_640.jpg",
            description: "Carne pe gratar"
        },
        {
            path: "/images/dog-g71b6deabf_640.jpg",
            description: "Caine in excurie pe munte"
        },
        {
            path: "/images/mountains-g70563c951_640.jpg",
            description: "Vedere de la munte"
        },
        {
            path: "/images/person-g5c2bd8b55_640.jpg",
            description: "On top of the world munte"
        },
        {
            path: "/images/rottweiler-g31139b978_640.jpg",
            description: "Cainii vecinului"
        }
    ];
    
    for (var i = 0; i < photos.length; i++) {
		var photo = new Photo(photos[i]);
		photo.save().catch(err => {
            console.log("Error adding photo ")
        });
    }

    res.send("Updated dbs");
}


