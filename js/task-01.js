const refs = {
  categories: document.getElementById("categories"),
  items: document.querySelectorAll(".item"),
  titles: document.querySelectorAll(".item>h2"),
  list: document.querySelectorAll(".item>ul"),
};

console.log(`Number of categories: ${refs.items.length}`);

refs.items.forEach((item, i) => {
  console.log(`Category: ${refs.titles[i].innerText}
Elements: ${refs.list[i].childElementCount}`);
});