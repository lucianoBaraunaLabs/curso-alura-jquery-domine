// Inseri placar
function inserirPlacar() {
  var corpoTabela = $('.placar').find('tbody');
  var usuario =  "Seu nome";
  var numPalavras = $('#contador-palavras').text();
  var linha = novaLinha(usuario, numPalavras);
  linha.find('.botao-remover').click(removeLinha);
  corpoTabela.prepend(linha);
}

$('.botao-remover').click(removeLinha);

// Nova linha
function novaLinha(usuario, palavras) {
  var linha = $('<tr>');
  var colunaUsuario = $('<td>').text(usuario);
  var colunaPalavras = $('<td>').text(palavras);
  var colunaRemover = $("<td>");

  var link = $('<a>').addClass('botao-remover').attr('href', '#');
  var icone = $('<i>').addClass("small material-icons").text("delete");
  link.append(icone);

  colunaRemover.append(link);
  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}

// Remove linha
function removeLinha(event) {
  event.preventDefault();
  $(this).closest('tr').remove();
}
