
const section = document.querySelector('section');
section.classList.add('featured');

const article = document.createElement('article');
const sectionPosts = document.querySelector('section.posts');
const posts = document.querySelector("#posts");

const img = document.createElement('img');
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');
article.prepend(img);
console.log(article);
const h3 = document.createElement('h3');
h3.innerText = "Stop Planning";
article.append(h3);

const p = document.createElement('p');
p.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(p)
sectionPosts.appendChild(article);

const aside = document.createElement('aside');
article.append(aside);

const p2 = document.createElement('p');
aside.prepend(p2);
const span = document.createElement('span');
p2.prepend(span);
span.innerHTML = "<strong>Read Time:</strong> 4 Minutes ";

const a = document.createElement('a');
a.setAttribute('href', "#");
a.innerText = "Read more...";
span.append(a);

const spa = document.querySelectorAll("section.posts article");

console.log(sectionPosts);

console.log(sectionPosts.firstElementChild.nextElementSibling);
const architecture = sectionPosts.firstElementChild.nextElementSibling;

sectionPosts.prepend(architecture);

console.log(sectionPosts.firstElementChild);