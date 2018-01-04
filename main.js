$(document).ready(function() {

   $(".table-2").hide();

   $(".login-btn-1").on("click", function() {
      $(".login-btn-1").removeClass("inactive");
      $(".signup-btn-1").addClass("inactive");
      $(".table-1").hide();
      $(".table-2").show();
   });

   $(".signup-btn-1").on("click", function() {
      $(".signup-btn-1").removeClass("inactive");
      $(".login-btn-1").addClass("inactive");
      $(".table-2").hide();
      $(".table-1").show();
   });



});