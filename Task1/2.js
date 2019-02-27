//var User_Name,User_password;

var login = prompt('give me login');
var message = (login == 'Uasya') ? 'hello':
 (login == 'SIR') ? 'Go away':
 (login == '') ? 'dai login':
 '';
alert(message)

var User_Name = prompt('Stoyat kto ti');

if (User_Name =='admin'){
	var User_password = prompt('davai parol sobaka');
	if (User_password =='Black Master'){
	User_password = prompt('davai parol sobaka');
	}else if(User_password == null){
		alert('dazhe ne nazvalsa');
	} else {
		alert('Parol ne pravilno vvel');
	}
}else if(User_Name == null){
	alert('dazhe ne nazvalsa');
} else {
	alert('vi kto takie,ya vas ne zval');
}


/*var c,a,b;
a = 'My';
b = 'String'
c = a+' '+b;
alert(c);
a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

var year = prompt('Dyad ti durak?', '');

if (year != 'da') alert( 'Vresh sobaka' );

if(0){
	alert('zero');
}
if(1){
	alert('odin');
}

var access;
var age = prompt('skolko tebe let?', '');

if (age > 18) {
  access = true;
} else {
  access = false;
}*/
//access = (age > 14) ? true : false;