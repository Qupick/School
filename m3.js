
/*var a = +prompt ("ведіть число №1");
var b = +prompt ("ведіть число №2");
alert ("Результат: " + (a+b));
alert ("made Soprano"); */ //простий калькулятор додавання


/*var userName = prompt ("Назвіться ?!");

if (userName == "Soprano"){
	alert ("Wellcome Genneral");
	confirm ("Надати доступ до матеріалів ?");
	alert ("Було виявлено інше втручання, всі файли зашифровані та в безпеці !")
} else if (userName = prompt)  {
	alert ("ХИБНО ! Файли будуть зашифровані через...");
	alert ("3..");
	alert ("2..");
	alert ("1..");
	alert ("Файли успішно зашифровані!");
} */ //код для перевірки логіна


/*var num = +prompt ("Ведіть число:", "")
if (num>0){
	alert ("zna4enya 11");
} else if (num<0){
	alert ("zna4enya -11");
} else if (num==0){
	alert ("zna4enya = 00");
} // код операції з числом */


/*var userAgent = prompt ("Ведіть логін");
if (userAgent == "Soprano"){
var userPassword = prompt ("Ведіть пароль");
if (userPassword == "123"){
	alert ("Hello Soprano");
} else if (userPassword == null){
	alert ("Вхід заборонений");
} else {
	alert ("password error");
}} else if (userAgent == null){
	alert ("Вхід скасований");
} else {
	alert ("Невідомий user");
} */  //перевірка логіна та паролю.

 

/*var age = +prompt ("you age?"); */


/*for (var i=2; i<=10; ++i){
	if (i%2==0) {
		alert (i);
	}
} */  //цикл "for"


/*var i =0;
while (i<3){
alert ("namber" +i + "!" );
i++;
} */  //цикл "while"


/*var num;
do{
	num = +prompt ("BeDiTb 4ucJIo < 1000", "0");
}	while (num <=100 && num !=null);*/




/*for (var i=0; i<=10; ++i){
	if (i%2==0){
		alert (i);
	}
};*/ //цикл "for", тільки парні числа.



/* Назви функцій
getAge(..)          // get, "получает" возраст
calcD(..)           // calc, "вычисляет" дискриминант
createForm(..)      // create, "создает" форму
checkPermission(..) // check, "проверяет" разрешение, возвращает true/false
*/

//=====================================================================================

/*var userName = prompt ("who are you?");

if (userName == "admin") {
	var password = prompt ("password ?");

if (password == "black") {
	alert ("Wellcome")
} else if (password == null) {
	alert ("not password");
} else {
	alert ("wrong password"); 
}

} else if (userName == null) {
	alert ("don't inkognito");
} else {
	alert ("not Wellcome");
}*/ 
//перевірка логіна і пароля

// ===============================   ЦИКЛИ  ==================

/*var i = 0;
do {
	alert(i);
	i++;
} while (i<3); */



/*for (var i = 0; i < 3; i++) {
	alert (i);
}*/


/*var i=0;
while (i<3){
	alert (i);
	i++
} */

/*var q = +prompt ("number ?")
switch (q){
	case 2:
	alert ("очень мало..");
	break;
	case 4:
	alert ("все ще мало..((");
	break;
	case 6:
	alert ("no..(");
	break;
	case 8:
	alert ("вже блище..");
	break;
	case 10:
	alert ("yeees");
	break;
	default:
	alert ("не знаю таких значень " + q);
} */ // цикл SWITCH


//==========================  FUNCTIONS  =================================

/*function showMessage (name){
	alert ("Kto takoi " + name)
} 
showMessage ("Soprano"); */ 
//функція по ІМЕНІ (showMessage) та ПАРАМЕТРАМИ (name)

 
 /*var bS = function(){
	
	for (var i = 0; i < 5; i++){
		alert (i);
	}
}

bS(); */   
// об"явлення функції через перемінну

/*var bbw = (function(){
	var i;
	for (i=0; i < 5; i++) {
		alert (i);
	}
});

bbw();  */ 
//самовикликаюча функція 





//====================================================
/*
var check = function (){
var userName = prompt ("n?","");
if (userName === "admin") {
	var userPassword = prompt ("p?","");
	if (userPassword === "admin2") {
		alert ("Wellcome");
	} else if (userPassword === null) {
		alert ("no Wellcome");
	}
} else if (userName === null) {
	alert ("error userName");
} else {
	alert ("?????");
}};

var value1 = confirm ("GO ?");
if (value1 === true) {
	check ();
} else {
	alert ("no? okey...");
};

 var value2 = confirm ("...or no and go ?");
  if (value2 === true) {
	check ();
} else {
	alert ("ok-ok")
};
*/ 

var a = +prompt ("a", "");
switch (a){
case 0:
alert (0);
break;
case 1:
alert(1);
break;
case 2 || 3:
alert (2,3);
}




































































































