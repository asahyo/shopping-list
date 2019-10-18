var i = 0;

function addMe(){
      var newList = document.createElement('li');
      var x = document.createTextNode(document.getElementById('user').value);
      newList.appendChild(x);
      var position = document.getElementsByTagName('ol')[0];
      document.getElementById('user').value = " ";

        if(i < 7){
          i++;
          
          if(x === undefined || newList === 0){
        }
          position.appendChild(newList);
        }
        else{
          document.getElementById('toomany').innerHTML = "LIST IS FULL!!";
        }
        
    }
  
    function removeMe(){
      var userNum = document.getElementById('remove').value;
      var y = parseInt(userNum);
      var child = document.getElementsByTagName('li')[y-1];
      var parent = child.parentNode;
      parent.removeChild(child);
      document.getElementById('remove').value = " ";
    }