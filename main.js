const featured = document.querySelector('section');
featured.classList.add("featured");

const posts = document.querySelector(".posts");

const article = document.createElement("article");
const img = document.createElement("img");
img.setAttribute('src', "./images/paul-gilmore-unsplash.jpg");
img.setAttribute('alt', "Image of a mountain in front of a lake.");
const header = document.createElement("h3");
header.textContent = "Stop Planning";
const p1 = document.createElement("p");
p1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
const aside = document.createElement("aside")
const p2 = document.createElement("p");
const span = document.createElement('span')
span.innerHTML = `<strong>Read Time:</strong> 4 Minutes`;
const anchor = document.createElement("a");
anchor.setAttribute("href", "#");
anchor.textContent = " Read more...";

p2.append(span);
p2.append(anchor);
aside.append(p2);

article.append(img);
article.append(header);
article.append(p1);
article.append(aside);

posts.append(article);


const allPosts = document.querySelectorAll(".posts article")
console.log (allPosts);
allPosts[0].remove();
allPosts[1].remove();
posts.prepend(allPosts[0]);
posts.prepend(allPosts[1]);