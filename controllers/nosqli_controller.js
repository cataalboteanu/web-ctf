const User = require('../models/nosqli_model');

const get_user = async function(query){
    //const p = await Photo.find({}, 'path description').lean();
    const p = await User.find(query, '-_id');

    return p;
}

exports.login = function(req, res){
    var query = {
        username: req.body.username,
        password: req.body.password
    };

    get_user(query).then(result =>{
        
        if(result.length > 0){
            if(result[0]["role"] == "admin"){
                var redir = {role:"a", key: result[0]["password"]};
                res.json(redir);
            }
            else{
                var redir = {role:"g", key: "You are a guest"};
                res.json(redir);
            } 
        }
        else{
            var redir = {role:"i", key: "Incorrect credentials"};
            res.json(redir);
        }
    });
}