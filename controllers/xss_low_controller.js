const {validationResult} = require('express-validator')
const Photo = require('../models/xss_stored_model')

const get_photos = async function(){
   const p = await Photo.find({}, 'path description').lean();
   return p;
}

exports.description_update = async function (req, res) {
  var redir = {status: "ok"};

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    redir = {status: "error"};
    return res.json(redir);
  }
  else{
    const update = { description: req.body.description };
    await Photo.findByIdAndUpdate(req.body.id, update, {new: true});
    return res.json(redir);
  }
}

// list all photos
exports.photos_list = function (req, res) {

  var photo_array = [];
  get_photos().then(values=>{
    for(var i in values)
      photo_array.push(values[i])
    

    const errors = validationResult(req)
    var msg = " "

    if (!errors.isEmpty()) {
      const errMsg = errors.array().map(error => error.msg)
      return res.render("level1Low", { title: "Web-CTF", photos_list: photo_array, message: errMsg});
    }
    const text = req.query.text.toLowerCase();
    const result = photo_array.filter((p) => p['description'].toLowerCase().includes(text));
        
    if (result.length > 0) {
      msg = "Search results for: " + req.query.text;
      return res.render("level1Low", {title: "Web-CTF", photos_list: result, message: msg });
    } 
    else {
      msg = "No results found for " + req.query.text;
      return res.render("level1Low", {title: "Web-CTF", photos_list: photo_array, message: msg });
    }
  });
}
