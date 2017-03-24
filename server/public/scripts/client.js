$(document).ready(function(){
  console.log("jQuery sourced");

  $('.owner_add').on('click', '#register_button', function(){

    var firstName=  $("#owner_first_name").val();
    var lastName= $("#owner_last_name").val();


      $.ajax({
          type: "POST",
          url: "/addOwner",
          data: {first: firstName, last: lastName},
          success: function(response) {
            // Refresh our data
            console.log(response);
          }
      });// end of ajax

  });
});
  //form submitted
