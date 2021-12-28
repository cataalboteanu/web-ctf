var _id;
function setCard(clicked_element){ _id = clicked_element }

function modifyDescription(){
    var text = document.getElementById('photo').value;
    axios.post('/level1Low/update', {
        id: _id,
        description: text
      })
      .then(function(response){
        if(response.data.status == 'ok'){
          window.location = '/level1Low'
        }
        else if(response.data.status == 'error'){
          window.location = '/level1Low/warning'
          
        }
      });
}