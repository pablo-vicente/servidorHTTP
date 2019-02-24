const http = require('http');
const port = 3000;
const hostname = '0.0.0.0';



const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Context-Type', 'text/plain');

	var valorPorExtenso = validarNumero(req.url);

	res.write(valorPorExtenso)
	res.end()
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})

function validarNumero(numero){
	var tamanho = numero.length;//Tamanho da string contando a barra
	var numeroLimpo = numero.substring(1,tamanho); // numero sem a barra
	var sinal = true;//Sinal do número true positivo e false negativo

	if (numeroLimpo[0] === "-") {//Verifica se tem caractere negativo
		sinal = false;
		numeroLimpo = numeroLimpo.substring(1,tamanho);
	}

	if (!isNaN(numeroLimpo)){//Verifica se é número, somente positivo,
		//Verifica se número é decimal
		if (parseInt(numeroLimpo) === parseFloat(numeroLimpo)){
			numeroLimpo = parseInt(numeroLimpo);
			//Verifica se número está intervalor 0 - 99.999, testa somente o positivo
			if (numeroLimpo>=0 && numeroLimpo<=99999) {
				var valorEmExtenso = converteParaExtenso(numeroLimpo);
				if(sinal === true || valorEmExtenso === "zero"){
					return JSON.stringify({'extenso': valorEmExtenso},null,'\t');
				}else {
					valorEmExtenso = "menos " + valorEmExtenso;
					return JSON.stringify({'extenso': valorEmExtenso},null,'\t');
				}
			}
		}
	}
	//var t = "Valor fora do intervalo";
	return JSON.stringify({'erro': 'valor do do intervalo [-99.999 ~ 99.999]'},null,'\t');
}
function converteParaExtenso(inteiro){
	var inteiro = String(inteiro);
	var tabela =[
	['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove'],
	['dez','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove'],
	['-','-','vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa'],
	['cem','cento','duzentos','trezentos','quatrocentos','quinhentos','seiscentos','setecentos','oitocentos','novecentos'],
	];

	var extenso;
	var tamanho = inteiro.length;
	while (tamanho !== 0){
		switch(tamanho){
			case 5:
				var dezenaMilhar = inteiro[0];
				var unidadeMilhar = inteiro[1];
				if (dezenaMilhar === "1"){
					extenso = tabela[dezenaMilhar][unidadeMilhar]+" mil";
				} else if(dezenaMilhar>=2 && unidadeMilhar === "0"){
					extenso = tabela[2][dezenaMilhar]+" mil";
				}else{
					extenso = tabela[2][dezenaMilhar] + " e " +tabela[0][unidadeMilhar] + " mil";
				}
				//Retirar a dezena e unidade milhar, tira zero a esquerda (parseInt) retorna para string
				inteiro = String(parseInt(inteiro.substring(2,tamanho)));
				tamanho = inteiro.length;
				break;
			case 4:
				var unidadeMilhar = inteiro[0];
				if(unidadeMilhar === "1" ){
					extenso = "mil";
				}else{
					extenso = tabela[0][unidadeMilhar] + " mil";
				}
				//Retirar a dezena e unidade milhar, tira zero a esquerda (parseInt) retorna para string
				inteiro = String(parseInt(inteiro.substring(1,tamanho)));
				tamanho = inteiro.length;//Atualiza o tamanho do número sem zero a esquerda
				break;
			case 3:
				var centena = inteiro[0];
				var dezena = inteiro[1];
				var unidade = inteiro[2];
				//Verifica se número possui unidades/ dezenas de milhar
				if (extenso !== undefined){
					extenso = extenso + " e ";
				}else {
					extenso = "";
				}
				//Verifica centena é 100 cem
				if(parseInt(centena)+ parseInt(dezena) + parseInt(unidade) === 1){
					extenso = extenso + tabela[3][0];
					//Verifica se a centena é redonda
				}else if(dezena === "0" && unidade === "0" ){
					extenso = extenso + tabela[3][centena];
				}else{
					extenso = extenso + tabela[3][centena];
				}
				inteiro = String(parseInt(inteiro.substring(1,tamanho)));
				break;
			case 2:
				var dezena = inteiro[0];
				var unidade = inteiro[1];
				//Verifica se número possui unidades/ dezenas de milhar
				if (extenso !== undefined){
					extenso = extenso + " e ";
				}else {
					extenso = "";
				}
				//
				if(dezena === "1"){
					extenso = extenso + tabela[dezena][unidade];
				}else if (dezena >=2 && unidade === "0"){
					extenso =extenso +  tabela[2][dezena];
				} else{
					extenso = extenso + tabela[2][dezena] + " e " + tabela[0][unidade];
				}
				inteiro = "0";
				break;
			case 1:
				var unidade = inteiro[0];
				if (extenso !== undefined){
					extenso = extenso + " e ";
				}else {
					extenso = "";
				}
				extenso = extenso + tabela[0][unidade];
				inteiro = "0";
				break;
		}
		if(inteiro ==="0"){//Verifica se numero e redonoo inteiro,
			break;
		}else {
			tamanho = inteiro.length;
		}
	}
	return extenso;
}
