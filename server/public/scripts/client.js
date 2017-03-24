var editing = false;

$(document).ready(function(){
  console.log("jQuery sourced");


  // displays information from the database on the DOM
  displayInformation();



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
         displayInformation();
       }
     });
     $('#pet_name').val('');
   $('#pet_color').val('');
   $('#pet_breed').val('');
  });
});

function displayInformation() {
  $.ajax({
    type: "GET",
    url: "/display",
    success: function(response) {
      console.log("displayInformation: ",response);
      $('.pet_table').empty();
      for (var i = 0; i < response.length; i++) {
        var owner_pet = response[i];
        $('.pet_table').append('<tr>');
        var $el = $('.pet_table').children().last();
        var owners_name = owner_pet.first_name + " " + owner_pet.last_name;
        $el.append('<td>' + owners_name + '</td>');
        $el.append('<td><input type="text" id="pet_name" value="' + owner_pet.name + '"></input></td>');
        $el.append('<td><input type="text" id="pet_breed" value="' + owner_pet.breed + '"></input></td>');
        $el.append('<td><input type="text" id="pet_color" value="' + owner_pet.color + '"></input></td>');
        $el.append('<td><button class="update" data-pet_id='+
                  owner_pet.id + '>Update</button></td>');
        $el.append('<td><button class="delete" data-pet_id='+
                            owner_pet.id + '>Delete</button></td>');

        if (owner_pet.check_out === null && owner_pet.check_in !== null) {
          $el.append('<td><button class="in_out" "data_pet_in="true" "data-pet_id='+
                                                owner_pet.id + '>Out</button></td>');
        } else {
        $el.append('<td><button class="in_out" "data_pet_in="false" "data-pet_id='+
                                              owner_pet.id + '>In</button></td>');
        }
      }
    }
  });
}
