$(document).ready(function(){

   var showNote = function showNote(){
     var note = $('#note').val();

     $("#displayNote").append("<div class='item'>" + note + "<span class='icon-minus'></span>" + "</div>");

     document.form.display.value = null;

//    $(".item").dblclick(function(){
//        $(this).fadeOut(900);
//      });

   $('.icon-minus').click(function(){
   $(this).closest('div').fadeOut(900);
    });




   };

   $("#submit").click(showNote);
   $("input").keypress(function(x){
   if (x.which == 13) {
     $(this).show(showNote);
   return false;
   }
    });
   $( "div" ).sortable();
 $( "div").disableSelection();
 });
