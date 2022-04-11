function postFunction(){
    axios.post('/level2Low', {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }).then(function(response){
        if(response.data.role == "a"){
            document.getElementById("key").innerHTML = "Here is your admin secret key: " + response.data.key
        }
        else if(response.data.role == "g"){
            document.getElementById("key").innerHTML =  response.data.key
        }
        else if(response.data.role == "i"){
            document.getElementById("key").innerHTML =  response.data.key
        }
    });
}