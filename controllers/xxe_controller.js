var libxmljs = require("libxmljs");

var export_data = []
export_data.push("Andrei")
export_data.push("Georgescu")
export_data.push("0752725336")
export_data.push("N. Balcescu")
export_data.push("aaa@aaa.com")
export_data.push("RO")
export_data.push("Olt")

exports.show = function(req, res){
    return res.render("xxe", {profile: export_data});
}

exports.upload = function(req, res){
    if (req.files.profile && req.files.profile.mimetype == 'text/xml'){
        try {
            var profile = libxmljs.parseXmlString(req.files.profile.data.toString('utf8'), {noent:true, noblanks:true})
        } catch (error) {
            return res.render("XXEedit", {message: "Invalid XML Format"});
        }
		

        if(profile.root().childNodes().length != 7){
            return res.render("XXEedit", {message: "Invalid XML Format"});
        }
        else{
            export_data = []
            profile.root().childNodes().forEach(profile => {
                export_data.push(profile.text().trim())
            })
        }
    } 
    else{
        return res.render("XXEedit", {message: "Invalid File Format"});
    }

    return res.redirect("/xxe");
}