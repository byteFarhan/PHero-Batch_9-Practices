const h1 = document.getElementById("demo");

console.log(h1);
console.dir(h1);
console.log(h1.attributes);
console.log(h1.addEventListener);
// Recomended
h1.addEventListener("click", () => {
  console.log("clicked");
});
// Not Recomended!
h1.onclick = function () {
  console.log("clicked");
};
console.log(h1.onclick);
// element.addEventListener(event, () => {}); //Just a syntex!
// const click = () => {
//   console.log("clicked");
// };

const liCollection = document.getElementsByTagName("li");
console.log(liCollection);
console.log(typeof liCollection);

const liCollectionWithQuerySel = document.querySelectorAll("li");
console.log(liCollectionWithQuerySel);
console.log(typeof liCollectionWithQuerySel);

const arr = [1, 2, 3, 4];
console.log(arr);
console.log(typeof arr);
