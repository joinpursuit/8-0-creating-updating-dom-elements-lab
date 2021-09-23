let featured = document.querySelector("main section");
// console.log(featured);
featured.setAttribute("class", "featured");

// create `article` element with JavaScript.
let article = document.createElement("article");
article.textContent = "test";





// add this `article` element to end of `sections.post` element
let endOfSection = document.querySelector(".posts");
endOfSection.append(article);