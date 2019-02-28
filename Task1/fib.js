var f=0 ,g=1;
var a = prompt('enter a');
var F[];
var n=1;
F[0]=f;
F[1]=g;
while (F[n]<a){
	F[n] = F[n-1]+F[n-2];
n+=1;
}
alert(n);