const path = require('path')


exports.upload = function(req, res){

    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
    }

    const file = req.files.file;
    const save_path = __dirname + "/../files/"  + "../bin/" + file.name;

    // const extensionName = path.extname(file.name);
    // const allowedExtension = ['.png','.jpg','.jpeg'];

    // if(!allowedExtension.includes(extensionName)){
    //     return res.status(422).send("Invalid Image");
    // }
   
    file.mv(save_path, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.send({ status: "success", path: save_path });
    });

}