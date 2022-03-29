const sectionOne = document.querySelector("section");
sectionOne.setAttribute("class", "featured");
//sectionOne.classList.add("featured");

const posts = document.querySelector(".posts");
//console.log(posts);

const article = document.createElement("article");
const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");

const header3 = document.createElement("h3");
header3.textContent = "Stop Planning";

const pTag1 = document.createElement("p");
pTag1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;

const aside = document.createElement('aside');
const pTag2 = document.createElement('p');
const span = document.createElement('span');
const strong = document.createElement('strong');
//span.innerHTML = (strong.textContent = "Read Time:") + " 4 Minutes"; Doesn't work?
span.innerHTML = `<strong>Read Time:</strong> 4 Minutes`;
const anchor = document.createElement('a');
anchor.setAttribute('href','#');
anchor.textContent = "Read more...";

heinous();

function heinous() {
    pTag2.append(span);
    pTag2.append(anchor);
    
    aside.append(pTag2);
    
    article.append(image);
    article.append(header3);
    article.append(pTag1);
    article.append(aside);
    
    posts.append(article);
}





