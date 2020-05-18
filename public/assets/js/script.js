$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    //hint:setting up ajax put
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var updatedBurger = {
           devoured: 1
        };
    
        var id = $(this).find(".burger_id").val().trim()
    
        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: updatedBurger
        }).then(
          function() {
            console.log("updated burger");
            // Reload the page to get the updated list
            location.assign("/");
          }
        );
      });
  });

