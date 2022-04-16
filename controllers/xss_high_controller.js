const { express } = require('express')
const {validationResult, check} = require('express-validator')

const today = new Date().toISOString().slice(0, 10)
const photosArray = new Array(
    ['https://i.ibb.co/n0RDTsq/boat-gaa2ca329d-640.jpg', 'Barca pe Balea Lac, priveliste frumoasa la munte', today],
    ['https://i.ibb.co/WVVZFt1/dog-g213168153-640.jpg', 'Caine zambaret', today],
    ['https://i.ibb.co/KjbwsxR/grill-g30f8f79f9-640.jpg', 'Foisor pentru gratar', today],
    ['https://i.ibb.co/wrZxm7t/meat-gde809f16d-640.jpg', 'Carne pe gratar', today],
    ['https://i.ibb.co/kJL8Sc8/dog-g71b6deabf-640.jpg', 'Caine in excurie pe munte', today],
    ['https://i.ibb.co/sFqVVbt/mountains-g70563c951-640.jpg', 'Vedere de la munte', today],
    ['https://i.ibb.co/xDgN75g/person-g5c2bd8b55-640.jpg', 'On top of the world munte', today],
    ['https://i.ibb.co/TvNSymX/rottweiler-g31139b978-640.jpg', 'Cainii vecinului', today]);



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