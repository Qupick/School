
var Go = function () {
 // inputs object
 var user = document.getElementById ("username");
 var addressa = document.getElementById ("address");
 var phone = document.getElementById ("number_phone");
 var mail = document.getElementById ("email");
 var pass = document.getElementById ("password");
 var pass2 = document.getElementById ("password_repeat")
 var sel1 = document.getElementById ("nocheckSelect1");
 var sel2 = document.getElementById ("nocheckSelect2");
 
 // var id options Selects and Payments
/* var nosel1 = document.getElementById ("nocheckSelect1");
 var nosel2 = document.getElementById ("nocheckSelect2");
 var over = document.getElementById ("overFinish");
*/
 // Errors message.
 /*var userEror = document.getElementById ("userError");
 var addressEror = document.getElementById ("addressError");
 var phoneEror = document.getElementById ("phoneError");
 var mailEror = document.getElementById ("mailError");
 var passEror = document.getElementById ("passError");
 var pass2Eror = document.getElementById ("pass2Error");
 var sel1Eror = document.getElementById ("select1");
 var sel2Eror = document.getElementById ("select2"); 
*/
   /* var Errors = ["userError", "addressError", "phoneError", "mailError", 
    "passError", "pass2Error", "sel1Error", "sel2Error"];*/

    var Errors = [];

  username = user.value;
  if (username === "") {
     Errors.push ("userError");
   }else {
     document.getElementById ("userError").style.display="none"
   };


  address = addressa.value;
  if (address === "") {
     Errors.push ("addressError");
   }else{
     document.getElementById ("addressError").style.display="none"
   };


  phone = number_phone.value;
  if (phone === "") {
     Errors.push ("numberError");
   }else {
     document.getElementById ("numberError").style.display="none"
   };
  

  mail = email.value;
  if (mail === "") {
     Errors.push ("mailError");
   } else {
     document.getElementById ("mailError").style.display="none"
   };
  

  pass = password.value;
  if (pass === "") {
     Errors.push ("pass1Error");
   } else {
     document.getElementById ("pass1Error").style.display="none"
   };
  

  pass2 = password_repeat.value;
  if (pass != pass2) {
     Errors.push ("passisnoGood");
   } else {
     document.getElementById ("passisnoGood").style.display="none"
   };
  

  if (pass2 === "") {
     Errors.push ("pass2Error");
   } else {
     document.getElementById ("pass2Error").style.display="none"    
   };
  
  

  sel1 = nocheckSelect1.value;
  if (sel1 === "") {
     Errors.push ("select1");
   } else {
     document.getElementById ("select1").style.display="none"
   };

  


  sel2 = nocheckSelect2.value;
  if (sel2 === "") {
     Errors.push ("select2");
   } else {
     document.getElementById ("select2").style.display="none"
   };
     

  if (Errors.length > 0) {
  for(var i=0; i<Errors.length; i++) {
     document.getElementById(Errors[i]).style.display="block";
   } 
  };
    
      
    if (Errors.length == 0) {
      window.location.href="/home/soprano/Work/School/index3.html"
      alert ("НАКАНЕЦ ТО БЛЯТЬ");
      } else {
      alert ("Заповніть всі поля");
    };
    
}; // Function validate Registration 
