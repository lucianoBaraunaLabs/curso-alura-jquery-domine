// Contando as palavras e colocando na tela
var frase = $('.frase').text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $('#tamanho-frase');
tamanhoFrase.text(numPalavras);
