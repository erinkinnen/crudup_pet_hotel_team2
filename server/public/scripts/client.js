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
    }
  });
}
