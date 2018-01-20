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
      var password = document.getElementById('myText1').value;
      try{
        var meta1 = JSON.parse(window.localStorage.getItem("store"));
        meta1[name]=password;
        window.localStorage.setItem("store", JSON.stringify(meta1));
       }catch(error){
          si ={};
          si[name]=password;
          window.localStorage.setItem("store", JSON.stringify(si));
       } 
  }
  function reload_it()
  {
    var name = document.getElementById('myText').value;
    var password = document.getElementById('myText1').value;
    var meta1 = JSON.parse(window.localStorage.getItem("store"));
    window.localStorage.setItem("flag", true);
    
    if(meta1[name] == password){
      window.localStorage.setItem("flag", true);
      window.localStorage.setItem("login_details",name.toString());
      window.location = "login.html"
    }
    else{
      window.localStorage.setItem("flag", false);
      window.location = "index.html"
      alert("wrong username or password")
    }
  }
}