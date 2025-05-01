const ratings = document.querySelectorAll(".star-rating");
const submitButton = document.querySelector(".btn");

const ratingCard = document.querySelector(".card");

const thankYouCard = document.querySelector(".thank-you-card");

const thankYouCardText = document.querySelector(".out-rating");

const MainCard = document.querySelector(".main");

thankYouCard.style.display = "none";


let countRate = 0;

ratings.forEach((rating, index) => {
  rating.addEventListener("click" , () => {
    rating.style.backgroundColor = "hsl(25, 97%, 53%)";
    rating.style.color = "white";

    submitButton.style.backgroundColor = "white";
    countRate = countRate + 1;


    countRate = index + 1;
    //console.log(`Rated ${countRate}`);
  })
})




submitButton.addEventListener("click" , () => {
  ratingCard.style.display = "none";
  thankYouCard.style.display = "block";
  MainCard.style.display = "none";

  thankYouCardText.style.backgroundColor = "hsl(214, 41.00%, 12.00%)";
  thankYouCardText.style.color = "hsl(25, 97%, 53%)";
  thankYouCardText.innerHTML = `You selected ${countRate} out of 5`;
  
})