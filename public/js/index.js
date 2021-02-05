


// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  })
//    // $(".eat")

   //updating burgers that have been eaten
    const eatButton = document.querySelectorAll(".eat");
    if (eatButton){
    eatButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');

        


      })
    })

}
//     // // CREATE
//     // const newBurger = document.getElementById('newBurger');
  
//     // if (newBurger) {
//     //   eat.addEventListener('submit', (e) => {
//     //     e.preventDefault();
  
//     //     // Grabs the value of the textarea that goes by the name, "quote"
//     //     const newBurger = {
//     //       burger_name: document.getElementById('newBurger').value.trim(),
          
//     //     };
  
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
  