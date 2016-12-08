$('#botao-placar').click(mostrarPlacar);
$('#botao-sync').click(sincronizaPlacar);


// Inseri placar
function inserePlacar() {
  var corpoTabela = $('.placar').find('tbody');
  var usuario =  "Luciano";
  var numPalavras = $('#contador-palavras').text();

  var linha = novaLinha(usuario, numPalavras);
  linha.find('.botao-remover').click(removeLinha);

  corpoTabela.append(linha);
  $(".placar").slideDown(500);
  scrollPlacar();
}

// Scrollar placar
function scrollPlacar() {
  var posicaoPlacar = $(".placar").offset().top;
  $('body').animate({
    scrollTop: posicaoPlacar + "px"
  },1000)
}

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
function removeLinha() {
  event.preventDefault();
  var linha = $(this).closest('tr');
  
  linha.fadeOut(1000, function(){
    setTimeout(function(){
      linha.remove();
    },1000)
  });
}

// Mostrar placar
function mostrarPlacar() {
  $(".placar").stop().slideToggle(600);
}

function sincronizaPlacar(){
  console.log('Foi');
  var placar = [];
  var linhas = $('tbody > tr');
  linhas.each(function() {
    var usuario = $(this).find('td:nth-child(1)').text();
    var palavras = $(this).find('td:nth-child(2)').text();
    var score = { // Montando objetos para enviar
      usuario: usuario,
      pontos: palavras
    };
    placar.push(score); //montando array
  });
  var dados = { // enviando o array para o servidor
    placar: placar
  };
  console.log(placar);
  $.post("http://localhost:3000/placar", dados, function(){
    console.log("Salvou o placar no servidor");
  });
}

function atualizaPlacar(){
  $.get("http://localhost:3000/placar", function(data){
    console.log("Busquei no servidor");
    console.log(data);
    $(data).each(function(){
        var linha = novaLinha(this.usuario, this.pontos);
        linha.find('.botao-remover').click(removeLinha);
        
        $('tbody').append(linha);
    });
  })
}
