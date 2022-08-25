const categories = document.getElementById("categories");
console.log(`Number of categories: ${categories.children.length}`);

let i = 0;

for (const item of categories.children) {
  const title = categories.children[i].firstElementChild.innerText;  
  const list = categories.children[i].lastElementChild;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${list.childElementCount}`);
  i++;
}
