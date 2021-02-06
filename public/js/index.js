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

  const createBurgerFormEl = document.getElementById("newBurger");

  if (createBurgerFormEl) {
    createBurgerFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      const newBurger = {
        name: document.getElementById("burger_name").value.trim(),
      };

      console.log("I am the burger that will be created: ", newBurger);

      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById("burger_name").value = "";

        console.log("im the burgwer that was created", newBurger);
        location.reload();
      });
    });
  }
});

//logic for adding a burger adding a devoured set to 1 true
// $(".newBurger").on("submit", function (e){
//   e.preventDefault()
//   const burgerInput = $("#burger_name")
//   const newBurger = {
//     burger_name: burgerInput.val().trim(),
//     //burger_name: $('#burger_name').val().trim(),

//     eatButton.forEach((button) => {
//       button.addEventListener('click', (e) => {
//           // Grabs the id of the element that goes by the name, "id"
//           console.log("im the eat button ", eatButton);
//         const id = e.target.getAttribute('data-id');
//         console.log("im the eat button clicked ", id);
//         //  const tobeEaten = e.target.getAttribute('data-devoured');
//         // const nowEaten = {
//         //   1: tobeEaten,
//         // };

//         fetch(`/api/burgers/${id}`, {
//           method: 'PUT',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },

//           // make sure to serialize the JSON body
//           body: JSON.stringify(nowEaten),
//         }).then((response) => {
//           // Check that the response is all good
//           // Reload the page so the user can see the new quote
//           if (response.ok === 1) {
//             console.log(`has now been eaten to: ${tobeEaten}`);
//             location.reload('/');
//           } else {
//             alert('something went wrong!');
//           }
//         });

//          // console.log("from index- id button ",id,  tobeEaten);

// //console.log("im the devour button clicked", eatButton);
//       })

//   })

//   // CREATE
//   const newBurger = document.getElementById('#newBurger');

//   if (newBurger) {
//     eat.addEventListener('submit', (e) => {
//       e.preventDefault();

//       // Grabs the value of the textarea that goes by the name, "quote"
//       const newBurger = {
//         burger_name: document.getElementById('newBurger').value.trim(),

//       };
// console.log('new burger button ', newBurger);
//     })}
//     //     // Send POST request to create a new quote
//     //     fetch('/api/burgers', {
//     //       method: 'POST',
//     //       headers: {
//     //         Accept: 'application/json',
//     //         'Content-Type': 'application/json',
//     //       },

//     //       // make sure to serialize the JSON body
//     //       body: JSON.stringify(newBurger),
//     //     }).then(() => {
//     //       // Empty the form
//     //       document.getElementById('newBurger').value = '';

//     //       // Reload the page so the user can see the new quote
//     //       console.log('Created a new burger');
//     //       location.reload();
//     //     });
//     //   });
//     // }

//   });
