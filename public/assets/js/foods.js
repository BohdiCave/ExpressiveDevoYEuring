// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devoyeur").on("click", function(event) {
      const id = $(this).data("id");
      const devour = $(this).data("devoyeured");
  
      const newState = {
        devo_ye_ured: devoyeured
      };
  
      // Send the PUT request.
      $.ajax("/api/foods/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log("Changed state to", newState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".toBeDevoured").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newFood = {
        food_name: $("#fo").val().trim(),
        ingredients: $("#ingred").val().trim(),  
        pic_url: $("#pic").val().trim(), 
        devo_ye_ured: $("[name=devo_ye_ured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/foods", {
        type: "POST",
        data: newFood
      }).then(
        function() {
          console.log("Added new gourmet dish!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
  