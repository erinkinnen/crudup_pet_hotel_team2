$(document).ready(function(){
  console.log("jQuery sourced");

  // displays information from the database on the DOM
  displayInformation();

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
        $el.append('<td><button class="in_out" data-pet_id='+
                                                owner_pet.id + '>In</button></td>');
      }
    }
  });
}
