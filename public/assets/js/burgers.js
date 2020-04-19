

$(".devBurger").on("submit", function(event) {
    event.preventDefault();
    var id = $(this).data("id)")
    var eatBurger = $(this).data("devBurger");
    // var devoured = $(this).data("devoured");
    console.log('ate burger');
    var newBurg = {
        burger: eatBurger,
    };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurg
          }).then(
            function() {
              console.log("id",id);
              console.log("changed to devoured", eatBurger);
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });

$(".addBurg").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger: $("#burg").val,
        devoured: 0
    };

    console.log('new burger')
    $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created New burger");
         
          // Reload the page to get the updated list
          location.reload();
        }
      );
    //grab the data from the page
    //make an ajax call( handel the response)
    //the client-side work is done
} )