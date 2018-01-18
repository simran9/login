window.onload = function() {
  document.getElementById('save').onclick = function()
  {
      save_all()
  }
  document.getElementById('save1').onclick = function()
  {
    reload_it()
  }

  function save_all()
  {
   
      var name = document.getElementById('myText').value;
      var fas = document.getElementById('myText1').value;
      try{
        var meta1 = JSON.parse(window.localStorage.getItem("lastname"));
        meta1[name]=fas;
        window.localStorage.setItem("lastname", JSON.stringify(meta1));
       }catch(error){
          si ={};
          si[name]=fas;
          window.localStorage.setItem("lastname", JSON.stringify(meta1));
       }
      
  }
  function reload_it()
  {
    var name = document.getElementById('myText').value;
    var fas = document.getElementById('myText1').value;
    var meta1 = JSON.parse(window.localStorage.getItem("lastname"));
    if(meta1[name] == fas){
      console.log("successful")
      for (i in meta1){
        console.log(i)
      }
    }
    else
      console.log("not successful")
  }
}