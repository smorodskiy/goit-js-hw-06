const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const oldGallery = document.querySelector(".gallery");

// copy of UL
const newGallery = oldGallery.cloneNode(true);
newGallery.style.display = "flex";
newGallery.style.flexDirection = "column";

images.forEach((img) => {
  newGallery.insertAdjacentHTML(
    "afterbegin",

    `<li style="width: 100%">
      <img src="${img.url}" alt="${img.alt}" style="width: 100%"></img>
    </li>`
  );
});

// by one operation add to html
oldGallery.parentNode.replaceChild(newGallery, oldGallery);
