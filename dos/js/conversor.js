function EaP() {
	var euro = document.getElementById("E");
	var peseta = document.getElementById("P");
	var resultado = euro.value * 166.386;
	peseta.value = resultado;
}

function PaE() {
	var euro = document.getElementById("E");
	var peseta = document.getElementById("P");
	var resultado = peseta.value / 166.386;
	euro.value = resultado;
}
