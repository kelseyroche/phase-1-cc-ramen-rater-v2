// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  const detailImage = document.querySelector('.detail-image');
  const detailName = document.querySelector('.name');
  const detailRestaurant = document.querySelector('.restaurant');
  const ratingDisplay = document.getElementById('rating-display');
  const commentDisplay = document.getElementById('comment-display');

  detailImage.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating; 
  commentDisplay.textContent = ramen.comment; 


};

const addSubmitListener = () => {
  // Add code
  const form = document.getElementById('new-ramen');
  console.log('Form element:', form);

  if (!form) {
    console.error('Form with id "new-ramen" not found.');
    return;
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const restaurant = document.getElementById('restaurant').value;
    const image = document.getElementById('image').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    const newRamen = {
      name,
      restaurant,
      image,
      rating,
      comment,
    };

    const ramenMenu = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.addEventListener('click', () => handleClick(newRamen));
   ramenMenu.appendChild(img);

  

    // Add code to send new ramen to server

    // Reset form
    form.reset();
  });

}



const displayRamens = () => {
  // Add code
  fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => {
      const ramenMenu = document.getElementById('ramen-menu');

      ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        ramenMenu.appendChild(img);
      });
    })
};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
}

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
