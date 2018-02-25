
var Go = function () {

 var userValue = document.getElementById ("username");
 var addressaValue = document.getElementById ("address");
 var phoneValue = document.getElementById ("number_phone");
 var mailValue = document.getElementById ("email");
 var passValue = document.getElementById ("password");
 var pass2Value = document.getElementById ("password_repeat")
 var sel1Value = document.getElementById ("nocheckSelect1");
 var sel2Value = document.getElementById ("nocheckSelect2");
 


  var Errors = [];
    
	   
  userValue = username.value;
    if (userValue === ""){ 
      Errors.push("userError");
    }else {
      document.getElementById("userError").style.display="none"
    };


  var regName = /^[A-zА-я]+$/;
  var resultName = userValue.search(regName);

    if (resultName === -1) {
      Errors.push("noName");
    }else {
      document.getElementById("noName").style.display="none"
    };
    

    if (userValue.length > 32 ) {
    for (var i=0; i < userValue.length;  i++) {
      Errors.push("noName");
    };
    }else{
      document.getElementById("noName").style.display="none"
    };

    if (userValue.length < 4) {
    for (var i=4; i > userValue.length; --i){
      Errors.push("noName");
    };
    }else{
      document.getElementById("noName").style.display="none"
    };


  addressaValue = address.value;
    if (addressaValue === "") {
      Errors.push("addressError");
    } else {
      document.getElementById("addressError").style.display="none"
    }if (addressaValue.length > 255) {
    for (var i=0; i < addressaValue.length; i++){
      Errors.push ("noAddressGood");
    };
    }else{
      document.getElementById("noAddressGood").style.display="none"
    };
   
     
  var regex = /^[0-9]+$/;
  var result2 = phoneValue.value.search(regex);
     
  phoneValue = number_phone.value;
    if (result2 === -1) {
      Errors.push("phoneError");
    }else{
      document.getElementById("phoneError").style.display="none"
    };


  phoneValue.length.value;
    if (phoneValue.length < 10) {
      Errors.push("phoneError");
    }else{
      document.getElementById("phoneError").style.display="none"
    };


  phoneValue = number_phone.value;
    if (phoneValue === "") {
      Errors.push("numberError");
    }else {
      document.getElementById("numberError").style.display="none"
    };
  

  mailValue = email.value;
    if (mailValue === "") {
      Errors.push("mailError");
    }else {
      document.getElementById("mailError").style.display="none"
    };
 
 
  var reg1 = /^[-._0-9A-za-z]+@[a-z]+[.][a-z]+$/;
  var result1 = mailValue.search(reg1);

    if (result1 === -1){
      Errors.push("noMail");
    }else {
      document.getElementById("noMail").style.display="none"
    };


  passValue = password.value;
    if (passValue === "") {
      Errors.push("pass1Error");
    }else {
      document.getElementById("pass1Error").style.display="none"
    };

  
    if (passValue.length < 6) {
    for (var i=6; i > passValue.length; --i){
      Errors.push("pass1NoGood");
    }}else{
      document.getElementById("pass1NoGood").style.display="none"
    };


    if (passValue.length > 100) {
    for (var i=0; i < passValue.length; i++){
      Errors.push("pass1NoGood");
    }}else{
      document.getElementById("pass1NoGood").style.display="none"
    };
  

  pass2Value = password_repeat.value;
    if (passValue != pass2Value) {
      Errors.push("passisnoGood");
    }else {
      document.getElementById("passisnoGood").style.display="none"
    };
  

    if (pass2Value === "") {
      Errors.push("pass2Error");
    }else {
      document.getElementById("pass2Error").style.display="none"    
    };
  
  
  sel1Value = nocheckSelect1.value;
    if (sel1Value === "") {
      Errors.push("select1");
    }else {
      document.getElementById("select1").style.display="none"
    };

  
  sel2Value = nocheckSelect2.value;
    if (sel2Value === "") {
      Errors.push("select2");
    }else {
      document.getElementById("select2").style.display="none"
    };
     

    if (Errors.length > 0) {
    for(var i=0; i<Errors.length; i++) {
      document.getElementById(Errors[i]).style.display="block";
    } 
    };
    
      
   if (Errors.length == 0) {
      window.location.href="/home/soprano/Work/School/index3.html"
      alert("Реєстрація завершена !");
    }else{
      alert("Заповніть всі поля!");
    };
    
};
