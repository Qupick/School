
var Go = function () {

 var user = document.getElementById ("username");
 var addressa = document.getElementById ("address");
 var phone = document.getElementById ("number_phone");
 var mail = document.getElementById ("email");
 var pass = document.getElementById ("password");
 var pass2 = document.getElementById ("password_repeat")
 var sel1 = document.getElementById ("nocheckSelect1");
 var sel2 = document.getElementById ("nocheckSelect2");
 


    var Errors = [];
    

   
    username = user.value;
  if (username === ""){ 
    Errors.push("userError");
   }else {
    document.getElementById("userError").style.display="none"
   };


var reg = .match /\d/g;
     


    username != reg.value;
   if (username === reg) {
    Errors.push("noName");
   document.getElementById("noName").style.display="none"
    }
     


     if (username.length > 32 ) {
    for (var i=0; i < username.length;  i++) {
    Errors.push("noName");
      document.getElementById("noName").style.display="none"
   };
  };

  if (username.length < 4) {
    for (var i=4; i > username.length; --i){
      Errors.push("noName");
      document.getElementById("noName").style.display="none"
    };
  };




    address = addressa.value;
  if (address === "") {
     Errors.push("addressError");
    } else {
      document.getElementById("addressError").style.display="none"
   }; 
  if (address.length > 255) {
    for (var i=0; i < address.length; i++){
      Errors.push ("noAddressGood");
      document.getElementById("noAddressGood").style.display="none"
    };
  };
   
     
  

    phone = number_phone.value;
  if (phone === "") {
     Errors.push("numberError");
   }else {
     document.getElementById("numberError").style.display="none"
   };
  

    mail = email.value;
  if (mail === "") {
     Errors.push("mailError");
   } else {
     document.getElementById("mailError").style.display="none"
   };
  

    pass = password.value;
  if (pass === "") {
     Errors.push("pass1Error");
   } else {
     document.getElementById("pass1Error").style.display="none"
   };


    if (pass.length < 6) {
      for (var i=6; i > pass.length; --i){
        Errors.push("pass1NoGood");
        document.getElementById("pass1NoGood").style.display="none"
      };
    };

    if (pass.length > 100) {
      for (var i=0; i < pass.length; i++){
        Errors.push("pass1NoGood");
        document.getElementById("pass1NoGood").style.display="none"
      };
    };

  

    pass2 = password_repeat.value;
  if (pass != pass2) {
     Errors.push("passisnoGood");
   } else {
     document.getElementById("passisnoGood").style.display="none"
   };
  

  if (pass2 === "") {
     Errors.push("pass2Error");
   } else {
     document.getElementById("pass2Error").style.display="none"    
   };
  
  

    sel1 = nocheckSelect1.value;
  if (sel1 === "") {
     Errors.push("select1");
   } else {
     document.getElementById("select1").style.display="none"
   };

  


    sel2 = nocheckSelect2.value;
  if (sel2 === "") {
     Errors.push("select2");
   } else {
     document.getElementById("select2").style.display="none"
   };
     

  if (Errors.length > 0) {
  for(var i=0; i<Errors.length; i++) {
     document.getElementById(Errors[i]).style.display="block";
   } 
  };
    
      
    if (Errors.length == 0) {
      window.location.href="/home/soprano/Work/School/index3.html"
      alert ("Реєстрація завершена !");
      } else {
      alert ("Заповніть всі поля!");
    };
    
};