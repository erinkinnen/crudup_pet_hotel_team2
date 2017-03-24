var editing = false;

$(document).ready(function(){
  console.log("jQuery sourced");


  $( '#add_pet_button' ).on( 'submit', function(){
      e.preventDefault();
      console.log( 'in add_pet_button on submit');
      var pet = {};
      pet.name = $( '#pet_name' ).val();
      pet.color = $( '#pet_color' ).val();
      pet.breed = $( '#pet_breed' ).val();


      $.ajax({
       type: 'POST',
       url: '/newPet',
       data: pet,
       success: function(response) {
         console.log("in client POST function");
         //claudias function;
       }
     });
     $('#pet_name').val('');
   $('#pet_color').val('');
   $('#pet_breed').val('');
  });
});
