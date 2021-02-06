$(document).ready(function () {
  //for updating burgers to devoured
  $(".eatburger").on("submit", function (e) {
    e.preventDefault();
    const burgerID = $(this).children(".each").val();

    fetch(`/api/burgers/${burgerID}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {});
    location.reload();
  });

  //create burger using form ID
  const createBurgerFormEl = document.getElementById("newBurger");

  if (createBurgerFormEl) {
    createBurgerFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      const newBurger = {
        name: document.getElementById("burger_name").value.trim(),
      };
      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBurger),
      }).then(() => {
        //empties out the form
        document.getElementById("burger_name").value = "";
        //reloads so the new burger is added
        location.reload();
      });
    });
  }
});
