function validate(){
    user = 'Admin';
    pass = '123';
   var username=document.getElementById("username").value;
   var  password=document.getElementById("password").value;
   if(username == user && password == pass) {
      // document.write("soo gudub");
       // console.log('loged')
       window.location = "index (2).html"
   }
   else{
       alert("Username OR password encorrect");
   }

}