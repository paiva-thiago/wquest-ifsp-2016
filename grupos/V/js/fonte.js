var tamanhoFonte = 18;

function aumentar()
{
	tamanhoFonte = tamanhoFonte + 2;
	document.getElementById("texto").style.fontSize=tamanhoFonte+"px";
}

function diminuir()
{
	tamanhoFonte = tamanhoFonte - 2;
	document.getElementById("texto").style.fontSize=tamanhoFonte+"px";
}