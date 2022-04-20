// - [ ] Add a class of "featured" to the first `section` element on the page.
// - [ ] Create the following `article` element with JavaScript and add at the end of the `section.posts` element.
// - [ ] Move the first article from inside the `section.posts` element to become the second article and move the second article so that it is the first article.

//Add class of featured to the first section
let featuredClass = document.querySelector("section");
featuredClass.classList.add("featured");

//Create the following `article` element with JavaScript and add at the end of the `section.posts` element.
let article = document.createElement("article");
const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
let p = document.createElement("p");
p.textContent = "You -- yes you!";
let aside = document.createElement("aside");
let ptag = document.createElement("p");
let postsClass = document.querySelector(".posts");
let span = document.createElement("span");
span.textContent = "4 Minutes";
let strong = document.createElement("strong");
let a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more";
strong.textContent = "Read Time";
article.append(img);
article.append(h3);
article.append(p);
article.append(aside);
aside.append(ptag);
ptag.append(span);
ptag.append(a);
span.append(strong);
postsClass.append(article);

//Swap nodes

//querySelectorAll
//index[0], index[1] and set === NodeA and NodeB,

const swap = function (nodeA, nodeB) {
  const parentA = nodeA.parentNode;
  const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

  // Move `nodeA` to before the `nodeB`
  nodeB.parentNode.insertBefore(nodeA, nodeB);

  // Move `nodeB` to before the sibling of `nodeA`
  parentA.insertBefore(nodeB, siblingA);
};
