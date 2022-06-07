
exports.calculator = function(req, res){
    var result = eval(req.body.result);

    var redir = {status: "ok",
                value: result};
    
    return res.json(redir);
}
