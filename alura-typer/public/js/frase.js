$('#botao-frase').click(fraseAleatoria);

function fraseAleatoria(){
  $("#spinner").toggle();
  $.get('http://localhost:3000/frases',trocaFraseAleatoria)
   .fail(function () { // erro do ajax
      $('#erro').toggle();
      setTimeout(function(){
        $('#erro').toggle();
      },1500)
   })
   .always(function () { // Errou o sucesso mostra
     $("#spinner").toggle();
   });
}

function trocaFraseAleatoria(data){
  var frase = $('.frase');
  var numeroAleatorio = Math.floor(Math.random() * data.length);
  console.log(data[numeroAleatorio]);
  frase.text(data[numeroAleatorio].texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numeroAleatorio].tempo);
}
