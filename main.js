const firstSection = document.querySelector("section");

firstSection.classList.add("featured");

const postSection = document.querySelector(".posts");
const article = document.createElement("article");
postSection.append(article);

let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")
article.append(img);

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning"
article.append(h3);

const newP = document.createElement("p");
newP.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`
article.append(newP);

let aside = document.createElement("aside");
let asideP = document.createElement("p");
let newSpan = document.createElement("span");

 newSpan.innerHTML = "<strong>Read Time:</strong> 4 Minutes"

 asideP.append(newSpan);
 let newAnchor = document.createElement("a");
 newAnchor.setAttribute("href", "#")
 newAnchor.textContent = "Read more...";
 asideP.append(newAnchor);

 aside.append(asideP);
 article.append(aside);

 let firstChild = postSection.children[0]
 let secondChild = postSection.children[1]

 postSection.removeChild(firstChild);
 postSection.removeChild(secondChild);

 postSection.prepend(secondChild, firstChild);