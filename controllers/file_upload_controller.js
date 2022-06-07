const path = require('path')


exports.upload = function(req, res){

    if (!req.files) {
        return res.render("fileupload", {message: "No files were uploaded"});
    }
    if(!(req.files.file.mimetype == 'image/jpeg' || req.files.file.mimetype == 'image/png')){
        return res.render("fileupload", {message: "Please upload a photo"});
    }
    const file = req.files.file;
    const save_path = __dirname + "/../files/" + decodeURIComponent(file.name);

    //const extensionName = path.extname(file.name);
    // const allowedExtension = ['.png','.jpg','.jpeg'];

    // if(!allowedExtension.includes(extensionName)){
    //     return res.status(422).send("Invalid Image");
    // }
   
    file.mv(save_path, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.render("fileupload", {succes: "Success! The file is stored at: " + save_path});
    });
}