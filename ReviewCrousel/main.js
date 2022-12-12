const reviews = [
  {
    id: 0,
    name: "Akansha Pooja",
    job: "WEB DESIGNER",
    img:
    "./Images/AkanshaPhoto.JPG",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis excepturi in explicabo perspiciatis nobis dignissimos voluptatum. Repellendus ipsa rerum possimus ea qui pariatur aliquam quam doloremque laboriosam expedita. Ipsum.",
  },
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const im = document.getElementById("images");
const names = document.getElementById("name");
const prof = document.getElementById("prof");
const review = document.getElementById("review");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
let counter = 0;


function displayPerson(counter){
  const item = reviews[counter];
  im.src = item.img;
  names.textContent = item.name;
  prof.textContent = item.job;
  review.textContent = item.text;
}



btnNext.addEventListener("click",function(){
  counter = (counter+1)%reviews.length;
  displayPerson(counter);
})

btnPrev.addEventListener("click",function(){
  if(counter == 0) counter = reviews.length;
  else counter = (counter-1);
  displayPerson(counter);
})


