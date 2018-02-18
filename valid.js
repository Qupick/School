
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
 var nosel1 = document.getElementById ("nocheckSelect1");
 var nosel2 = document.getElementById ("nocheckSelect2");
 var over = document.getElementById ("overFinish");

 // Errors message.
 var userEror = document.getElementById ("userError");
 var addressEror = document.getElementById ("addressError");
 var phoneEror = document.getElementById ("phoneError");
 var mailEror = document.getElementById ("mailError");
 var passEror = document.getElementById ("passError");
 var pass2Eror = document.getElementById ("pass2Error");
 var sel1Eror = document.getElementById ("select1");
 var sel2Eror = document.getElementById ("select2"); 

    var Errors = ["userError", "addressError", "phoneError", "mailError", 
    "passError", "pass2Error", "sel1Error", "sel2Error"];


  username = user.value;
  if (username === "") {
     document.getElementById ("userError").style.display="block";
  } else if (username != ""){
    document.getElementById ("userError").style.display="none";
  }; 
 
  address = addressa.value;
  if (address === "") {
      document.getElementById ("addressError").style.display="block";
  } else if (username != ""){
    document.getElementById ("addressError").style.display="none";
  }; 

  phone = number_phone.value;
  if (phone === "") {
      document.getElementById ("numberError").style.display="block";
  } else if (phone != "") {
    document.getElementById ("numberError").style.display="none";
  }; 
  
  mail = email.value;
  if (mail === "") {
      document.getElementById ("mailError").style.display="block";
  } else if (mail != "") {
    document.getElementById ("mailError").style.display="none";
  };
  
  pass2 = password_repeat.value;
  pass = password.value;
  if (pass === "") {
     document.getElementById ("pass1Error").style.display="block";
  } else if (pass != ""){
     document.getElementById ("pass1Error").style.display="none";
  };  
  if (pass != pass2) {
      document.getElementById ("passisnoGood").style.display="block";
  } else if (pass === pass2) {
     document.getElementById ("passisnoGood").style.display="none";
  };
  if (pass2 === "") {
     document.getElementById ("pass2Error").style.display="block"
  }  else if (pass2 != "") {
     document.getElementById ("pass2Error").style.display="none"
  };
  
  sel1 = nocheckSelect1.value;
  if (sel1 === "") {
     document.getElementById ("select1").style.display="block";
  } else if (sel1 != "") {
     document.getElementById ("select1").style.display="none";
  };

  sel2 = nocheckSelect2.value;
  if (sel2 === "") {
     document.getElementById ("select2").style.display="block";
  } else if (sel2 != "") {
     document.getElementById ("select2").style.display="none";
  };
     //========================================================
      

     
       Errors = true.value
      if (Errors === true) {
     alert ("no");
    } else if (Errors != true) {
      alert ("gooo");
    } 

      
  
  }; // Function validate Registration 



   
 