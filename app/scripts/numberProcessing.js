var urlParams = new URLSearchParams(window.location.search);
var numero = Number(urlParams.get('numero'));
console.log(numero);
var op = urlParams.get('op');
switch(op){
case "pi":
if (numero%2 == 0){
	document.write("<h1> Numero PAR </h1>");
}else{
	document.write("<h1> Numero IMPAR </h2>");
}break;
case "primo":
document.write("<h1> Opção Indisponível </h1>");
break;
default:
document.write('<img src ="imgs/dragon.png>');
}	