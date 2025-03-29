const data = [
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    testimonial:
      "This service exceeded my expectations! The team was professional, and the results were outstanding.",
  },
  {
    name: "Michael Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial:
      "I've tried many similar services, but this one stands out with its quality and dedication. Highly recommended!",
  },
  {
    name: "Sophia Lee",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    testimonial:
      "Absolutely love the user-friendly experience! It made my work so much easier and more efficient.",
  },
  {
    name: "Daniel Brown",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    testimonial:
      "Great customer support and fast delivery. I will definitely use their services again in the future!",
  },
  {
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    testimonial:
      "I was skeptical at first, but this service turned out to be a game-changer. Highly impressed!",
  },
];

let image = document.querySelector("#image");
let testimonial = document.querySelector("#testimonial");
let userName = document.querySelector("#name");

console.log(image, testimonial, userName);

setInterval(() => {
  let count = 0;

  image.src = data[count].image;
  testimonial.textContent = data[count].testimonial;
  userName.textContent = data[count].name;

  count = (count + 1) % data.length;
}, 3000);
