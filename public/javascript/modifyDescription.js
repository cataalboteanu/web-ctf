var _id;
function setCard(clicked_element){ _id = clicked_element }

function modifyDescription(){
    var text = document.getElementById('photo').value;
    axios.post('/level1Low', {
        id: _id,
        description: text
      })
      .then(function(response){
        if(response.data.status == 'ok'){
          window.location = '/level1Low'
        }
        else if(response.data.status == 'error'){
          $('#staticBackdrop').modal('hide');
          document.getElementById('message').innerHTML = "Don't try running any scripts!";
          document.getElementById('message').style.color = "red";
        }
      });
}