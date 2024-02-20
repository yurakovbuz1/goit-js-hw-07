const categoriesElem = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");
// console.log(categoryItems);
console.log("Number of categories: " + categoriesElem.children.length);

categoryItems.forEach((item, index) => {
    const title = item.querySelector("h2");
    const elements = item.querySelector("ul");
    console.log("Category name: " + title.textContent);
    console.log("Elements: " + elements.children.length);
});