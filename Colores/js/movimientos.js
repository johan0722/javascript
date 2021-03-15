// Declaramos las variables

var uno, dos, tres, cuatro, cinco;
uno = document.getElementById("uno");
dos = document.getElementById("dos");
tres = document.getElementById("tres");
cuatro = document.getElementById("cuatro");
cinco = document.getElementById("cinco");

uno.onmouseover = function(){MouseOver(uno)};
uno.onmouseout = function(){MouseOut()};

dos.onmouseover = function(){MouseOver(dos)};
dos.onmouseout = function(){MouseOut()};

tres.onmouseover = function(){MouseOver(tres)};
tres.onmouseout = function(){MouseOut()};

cuatro.onmouseover = function(){MouseOver(cuatro)};
cuatro.onmouseout = function(){MouseOut()};

cinco.onmouseover = function(){MouseOver(cinco)};
cinco.onmouseout = function(){MouseOut()};


// Funcion mouse over
function MouseOver(variable) {
	 // document.getElementById("uno").classList.add("rojo");
	 // 
	 switch(variable){
	 	case uno:
	 		document.getElementById("uno").classList.add("rojo");
	 		break;
	 	case dos:
	 		document.getElementById("dos").classList.add("amarillo");
	 		break;
	 	case tres:
	 		document.getElementById("tres").classList.add("azul");
	 		break;
	 	case cuatro:
	 		document.getElementById("cuatro").classList.add("morado");
	 		break;
	 	case cinco:
	 		document.getElementById("cinco").classList.add("verde");
	 		break;
	 	default:
	 		break;

	 }
}
function MouseOut() {
	document.getElementById("uno").classList.remove("rojo");
	document.getElementById("dos").classList.remove("amarillo");
	document.getElementById("tres").classList.remove("azul");
	document.getElementById("cuatro").classList.remove("morado");
	document.getElementById("cinco").classList.remove("verde");


}

MouseOut();
