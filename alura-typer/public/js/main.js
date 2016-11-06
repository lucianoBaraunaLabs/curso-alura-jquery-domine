// Contando as palavras e colocando na tela
var frase = $('.frase').text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $('#tamanho-frase');
tamanhoFrase.text(numPalavras);

// Restultado das palavras digitadas realtime
var campo = $('.campo-digitacao');
campo.on('input', function () {
  var conteudo = campo.val();
  var qtdPalavras = conteudo.split(/\S+/).length - 1; // Busca qualquer caracter, exceto espaço vazio
  $("#contador-palavras").text(qtdPalavras);
  console.log("digito");

  var qtdCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres);
});

// Cronometro de tempo restante
var tempoRestante = $('#tempo-digitacao').text();
campo.on('focus',function () {

});
