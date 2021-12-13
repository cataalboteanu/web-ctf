//const async = require('async')
//const { express } = require('express')
const {validationResult} = require('express-validator')
const Photo = require('../models/xss_stored_model')


const get_photos = async function(){
   const p = await Photo.find({}, 'path description').lean();
   return p;
}

var photo_array = [];
get_photos().then(values=>{
  for(var i in values){
    photo_array.push(values[i])
  }
});

const update_photos = async function(){

  const filter = { _id: req.body.id };
  const update = { description: req.body.description };

  let doc = await Photo.findOneAndUpdate(filter, update, {
    new: true
  });
  
  return doc;
}

exports.description_update = function (req, res) {
  console.log(req.body)
  //res.redirect('/level1Low')
  update_photos().then(value=>{

    console.log(value)
    res.redirect('http://google.com')
    
  });
    
  

}

// list all photos
exports.photos_list = function (req, res) {

  const errors = validationResult(req)
  var msg = " "

  if (!errors.isEmpty()) {
    const errMsg = errors.array().map(error => error.msg)
    res.render("level1Low", { title: "Web-CTF", photos_list: photo_array, message: errMsg});
  }
  const text = req.query.text.toLowerCase();
  const result = photo_array.filter((p) => p['description'].toLowerCase().includes(text));
      
  if (result.length > 0) {
    msg = "Search results for: " + req.query.text;
    res.render("level1Low", {title: "Web-CTF", photos_list: result, message: msg });
  } 
  else {
    msg = "No results found for " + req.query.text;
    res.render("level1Low", {title: "Web-CTF", photos_list: photo_array, message: msg });
  }
}
