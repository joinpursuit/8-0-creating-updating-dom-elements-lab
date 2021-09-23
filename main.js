let featured = document.querySelector("main section");
// console.log(featured);
featured.setAttribute("class", "featured");

// create `article` element with JavaScript.
let article = document.createElement("article");

// create image
let mountainImg = document.createElement("img");
mountainImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
mountainImg.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(mountainImg);

// create h3 header
let mountainHeader = document.createElement("h3");
mountainHeader.textContent = "Stop Planning";
article.append(mountainHeader);

// create paragraph

// create aside




// add this `article` element to end of `sections.post` element
let endOfSection = document.querySelector(".posts");
endOfSection.append(article);