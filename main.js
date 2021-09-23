//adding class 'featured'
document.querySelector("section").classList.add("featured");
//new article tag
const newArticle = document.createElement("article");
//new img tag
const image = document.createElement("img");
image.src = "./images/paul-gilmore-unsplash.jpg";
image.alt = "Image of a mountain in front of a lake.";
//adding new image to article
newArticle.append(image);
//new h3 tag
const stopH3 = document.createElement("h3");
stopH3.textContent = "Stop Planning";
newArticle.append(stopH3);
//new p tag
const planningP = document.createElement("p");
planningP.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;
newArticle.append(planningP);
//new aside, p and span tags
const aside = document.createElement("aside");
const asideP = document.createElement("p");
const asidePSpan = document.createElement("span");
asidePSpan.innerHTML = "<strong>Read Time:</strong> 4 Minutes";
//linking children according to desired output
asideP.append(asidePSpan);
//new a element and internals
const asidePA = document.createElement("a");
asidePA.href = "#";
asidePA.textContent = "Read more...";
//linking children according to desired output
asideP.append(asidePA);
aside.append(asideP);
newArticle.append(aside);
document.querySelector(".posts").append(newArticle);

//setup to reorder 2 elements
const articles = document.querySelectorAll("article");
articles[2].parentNode.insertBefore(articles[2], articles[1]);
