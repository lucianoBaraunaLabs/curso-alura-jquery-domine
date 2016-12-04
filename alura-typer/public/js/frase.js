$('#botao-frase').click(fraseAleatoria);
$('#botao-frase-id').click(buscaFrase);

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

function buscaFrase(){
  console.log("Iniciando busca...");
  $("#spinner").toggle();
  var fraseId = $("#frase-id").val();
  var dados = {id : fraseId};
  console.log("Buscando id frase: " + fraseId);
  $.get('http://localhost:3000/frases', dados, trocaFrase)
   .fail(function(){
     setTimeout(function(){
       $('#erro').toggle();
     },2000)
   })
   .always(function () {
     $("#spinner").toggle();
   });
}

function trocaFrase(data){
  var frase = $(".frase");
  frase.text(data.texto);
  console.log("Trocando frase para: " + data.texto + "e no tempo de " + data.tempo);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data.tempo);
}
