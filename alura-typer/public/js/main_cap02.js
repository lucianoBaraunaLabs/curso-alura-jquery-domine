// Contando as palavras e colocando na tela
var frase = $('.frase').text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $('#tamanho-frase');
tamanhoFrase.text(numPalavras);

var campo = $('.campo-digitacao');
campo.on('input', function () {
  var conteudo = campo.val();
  var qtdPalavras = conteudo.split(/\S+/).length - 1; // Busca qualquer caracter, exceto espaço vazio
  $("#contador-palavras").text(qtdPalavras);
  console.log("digito");

  var qtdCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres);
});
