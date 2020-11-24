// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      const id = $(this).data("id");
      
      // Updating the boolean state parameter
      const newState = {
        devo_ye_ured: 1
      };
      
      // Send the PUT request.
      $.ajax(`/api/foods/${id}`, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("Changed state to", newState);
          location.href = "/";
        }
      );
    });
  
    $(".toBeDevoured").on("submit", function(event) {
      event.preventDefault();

      const newFood = {
        food_name: $("#fo").val().trim(),
        ingredients: $("#ingred").val().trim(),  
        pic_url: $("#pic").val().trim(), 
        devo_ye_ured: $("[name=devo_ye_ured]:checked").val().trim()
      };

      $("#insertOne").reset();

      // Send the POST request.
      $.ajax("/api/foods", {
        type: "POST",
        data: newFood
      }).then(
        function() {
          console.log("Added new gourmet dish!");
        }
      );

    });
});
  