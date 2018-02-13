
function validate() {
 var user = document.getElementById ("username");
 var address = document.getElementById ("address");
 var phone = document.getElementById ("number_phone");
 var mail = document.getElementById ("email");
 var pass = document.getElementById ("password");
 var pass2 = document.getElementById ("password_repeat")



  user = document.getElementById ("username").value;
  if (user === "") {
      alert ("Ведіть Ваше імя");
  } else {
      alert ("Поле Ваше імя- заповнено");
  };
   
  
  address = document.getElementById ("address").value;
  if (address === "") {
      alert ("Ведіть Ваш адрес");
  } else {
      alert ("поле Ваш адрес - заповнено");
  };
  

  phone = document.getElementById ("number_phone").value;
  if (phone === "") {
      alert ("Ведіть Ваш номер телефону");
  } else {
      alert ("поле Ваш номер телефону - заповнено");
  };


  mail = document.getElementById ("email").value;
  if (mail === "") {
      alert ("Ведіть вашу електронну почту");
  } else {
      alert ("Електронна почта - заповнено");
  };


  pass = document.getElementById ("password").value;
  pass2 = document.getElementById ("password_repeat").value;
  if (pass === "") {
      alert ("Ведіть пароль");
  } else if (pass2 === "") {
      alert ("Підтвердіть пароль")
  } else if (pass != pass2) {
      alert ("паролі не співпадають");
    }
  };




