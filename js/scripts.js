$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    const nameInput = $("input#forminput").val();
    
    $(".formOne").text(nameInput);

  });
});