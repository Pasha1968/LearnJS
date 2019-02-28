var a,b;
a=prompt('enter da ili net');

switch(a){
	case 'da':
		alert('maladsa');
		break;
	case 'net':
		alert('ploha');
		break;
	case 'priv':
	case 'poka':
		alert('ne to');
		break;	
	default:
		alert('Chtot ne to '+a);
}
a = 3;
alert(a);
a = prompt('enter a');

b = (a==2 || a==3) ? '3 ili 2':'ne 2 i ne 3';
alert(b);