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
campo.one('focus',function () { // Funcao one só escuta o evento uma única vez
  var cronometroID = setInterval(function () {
                        tempoRestante--; // subtrai do tempo
                        $('#tempo-digitacao').text(tempoRestante);
                        if (tempoRestante < 1) {
                            campo.attr("disabled", true);
                            clearInterval(cronometroID);
                        }
                    }, 1000);
});
