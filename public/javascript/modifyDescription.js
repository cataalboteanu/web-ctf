var _id;
function setCard(clicked_element){ _id = clicked_element }

function modifyDescription(){
    var text = document.getElementById('photo').value;
    axios.post('/level1/update', {
        id: _id,
        description: text
      })

}