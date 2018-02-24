
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


  var reg = /^[A-z]+$/;
     
  var result = username.search(reg);

  
   if (result === -1) {
    Errors.push("noName");
    } else {
      document.getElementById("noName").style.display="none"
    };
     


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
    };
  }else{
     document.getElementById("noAddressGood").style.display="none"
   };
   
     
     var regex = /^[0-9]+$/;
     
     var result2 = number_phone.search(regex);

     console.log(result2);

     if (result2 === -1) {
      Errors.push("phoneError");
     }else{
      document.getElementById("phoneError").style.display="none"
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
  


    var reg1 = /^[0-9A-za-z]+@[a-z]+[.][a-z]+$/;
    var result1 = mail.search(reg1);



    
    if (result1 === -1){
      Errors.push("noMail");
    } else {
      document.getElementById("noMail").style.display="none"
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
      }}else{
      document.getElementById("pass1NoGood").style.display="none"
    };

    if (pass.length > 100) {
      for (var i=0; i < pass.length; i++){
        Errors.push("pass1NoGood");
      }}else{
       document.getElementById("pass1NoGood").style.display="none"
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
