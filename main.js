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
let mountainParagraph = document.createElement("p");
mountainParagraph.textContent= "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(mountainParagraph);

// create aside - this will be parent for p, span
let mountainAside = document.createElement("aside");
article.append(mountainAside);

// create children for `mountainAside`
// create `mountainAside` paragraph
let asideParagraph = document.createElement("p");
mountainAside.append(asideParagraph);

// create span element to go inside `asideParagraph`
let asideSpan = document.createElement("span");
asideSpan.textContent = " 4 Minutes";
asideParagraph.append(asideSpan);

// create `strong` element, to go inside `asideSpan`
let spanStrong = document.createElement("strong");
spanStrong.textContent = "Read Time:";
asideSpan.prepend(spanStrong);

// create `a` element, to go inside `asideSpan`
let spanAnchor = document.createElement("a");
spanAnchor.setAttribute("href", "#");
spanAnchor.textContent = "Read more...";
asideSpan.append(spanAnchor);

// add this `article` element to end of `sections.post` element
let endOfSection = document.querySelector(".posts");
endOfSection.append(article);

