const { express } = require('express')
const {validationResult, check} = require('express-validator')

const today = new Date().toISOString().slice(0, 10)
const photosArray = new Array(
    ['/images/boat-gaa2ca329d_640.jpg', 'Barca pe Balea Lac, priveliste frumoasa la munte', today],
    ['/images/dog-g213168153_640.jpg', 'Caine zambaret', today],
    ['/images/dog-g71b6deabf_640.jpg', 'Caine in excurie pe munte', today],
    ['/images/grill-g30f8f79f9_640.jpg', 'Foisor pentru gratar', today],
    ['/images/meat-gde809f16d_640.jpg', 'Carne pe gratar', today],
    ['/images/mountains-g70563c951_640.jpg', 'Vedere de la munte', today],
    ['/images/person-g5c2bd8b55_640.jpg', 'On top of the world munte', today],
    ['/images/rottweiler-g31139b978_640.jpg', 'Cainii vecinului', today]);




exports.photos_list = function (req, res) {

  const errors = validationResult(req)
  var msg = " "

  if (!errors.isEmpty()) {
    const errMsg = errors.array().map(error => error.msg)
    if (errMsg == 'Blocked Tag')
      return  res.status(404).send('Try all you want, but all tags are blocked');
    if (errMsg == 'Blocked Event')
      return  res.status(404).send('Event blocked');
        
    return res.render("level1Hard", { title: "Web-CTF", photos_list: photosArray, message: errMsg});
  }
  const text = req.query.text.toLowerCase();
  const result = photosArray.filter((p) => p[1].toLowerCase().includes(text));

  if (result.length > 0) {
    msg = "Search results for: " + req.query.text;
    return res.render("level1Hard", {title: "Web-CTF", photos_list: result, message: msg });
  } 
  else {
    msg = "No results found for " + req.query.text;
    return res.render("level1Hard", {title: "Web-CTF", photos_list: photosArray, message: msg });
  }


}