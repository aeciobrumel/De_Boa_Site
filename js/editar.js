$(function() {
    $(".carrossel").sortable({
      connectWith: ".carrossel",
      update: function(event, ui) {
        // Lógica para atualizar os carrosséis após a reorganização
      }
    }).disableSelection();
  
    $(".delete-btn").click(function() {
      $(this).closest(".cartao").remove();
    });
  
    $(".cartao img").click(function() {
      var imgSrc = $(this).attr("src");
      $("#preview-img").attr("src", imgSrc);
    });
  });
  