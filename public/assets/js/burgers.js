        //grab the data from the page
        //make an ajax call( handel the response)
        //the client-side work is done
$(function() {
    
    $(".devBurger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id")
        // var eatBurger = $(this).data("devBurger");
        console.log('ate burger', id);
        var newBurg = {
            burger: id,
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurg
        }).then(
            function () {
                console.log("id", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".addBurg").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger: $("#burg").val().trim(),
            devoured: 0
        };

        console.log('new burger')
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created New burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });
});