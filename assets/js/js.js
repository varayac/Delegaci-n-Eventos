$(document).ready(function(){
  $(".btn-success").on('click', function(e){
    e.preventDefault();
    var titulo = $(this).prev().text()
    $('.cart').append('<li>'+ titulo +'<a class=x href="#">x</a></li>');
  })
})

//Delegacion de eventos
$(".cart").on('click', '.x', function(event) {
  event.preventDefault();
  $(this).parent().remove();
})
