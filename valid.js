
function validate() {
 // inputs object
 var user = document.getElementById ("username");
 var address = document.getElementById ("address");
 var phone = document.getElementById ("number_phone");
 var mail = document.getElementById ("email");
 var pass = document.getElementById ("password");
 var pass2 = document.getElementById ("password_repeat")

 /*// Errors message.
 var userEror = document.getElementById ("userError");
 var addressEror = document.getElementById ("addressError");
 var phoneEror = document.getElementById ("phoneError");
 var mailEror = document.getElementById ("mailError");
 var passEror = document.getElementById ("passError");
 var pass2Eror = document.getElementById ("pass2Error");*/

  user = document.getElementById ("username").value;
  if (user === "") {
      document.getElementById ("userError");
  } else {
      document.getElementById ("userGood");
  };
 

  address = document.getElementById ("address").value;
  if (address === "") {
      document.getElementById ("addressError");
  } else {
      document.getElementById ("addressGood");
  };
 
  
  phone = document.getElementById ("number_phone").value;
  if (phone === "") {
      document.getElementById ("phoneError");
  } else {
      document.getElementById ("phoneGood");
  };

  
  mail = document.getElementById ("email").value;
  if (mail === "") {
      document.getElementById ("mailError");
  } else {
      document.getElementById ("mailGood");
  };

  
  pass = document.getElementById ("password").value;
  pass2 = document.getElementById ("password_repeat").value;
  if (pass === "") {
      document.getElementById ("passError");
  } else if (pass2 === "") {
      document.getElementById ("pass2Error");
  } else if (pass != pass2) {
      document.getElementById ("passisnoGood");
  } else {
    document.getElementById ("passisGood");
  }
  };




