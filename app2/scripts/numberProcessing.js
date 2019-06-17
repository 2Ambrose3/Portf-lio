var urlParams = new URLSearchParams(window.location.search);
var num = Number(urlParams.get('valor'));
var num2 = Number(urlParams.get('valor2'));
var op = urlParams.get('op');


if(op == "fat"){
 var fat = fatorial(num);
 document.write("<h1> Fatorial = " +fat+ "</h1>");
}else if(op=="ar"){
	var a = arranjo(num,num2);
	document.write("<h1> Arranjo = "+a+" </h1>");
}else{
	var c = combinação(num,num2);
	document.write("<h1> Combinação = " +c+ "</h1>");
}

function fatorial(n) {
	var fat = 1;
	for(var i = n; i>0; i--){
		fat *= i;
	}
    return fat;
}
function arranjo(n1,n2) {
   return fatorial(n1)/fatorial(n1-n2);
}
function combinação(n,p) {
   return fatorial(n)/ (fatorial(p) * fatorial(n-p));
}
