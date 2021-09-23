const section1 = document.querySelector('section');
section1.classList.add('featured');

const article = document.createElement('article')
const image = document.createElement('img')
image.setAttribute('src', "./images/paul-gilmore-unsplash.jpg");
image.setAttribute('alt', "Image of a mountain in front of a lake.");
article.append(image)

const header = document.createElement("h3");
header.textContent = "Stop Planning";

article.append(header)

const info = document.createElement("p");
info.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;


article.append(info)

const aside = document.createElement("aside");

article.append(aside)

const readTime = document.createElement("p");

aside.append(readTime)

const span = document.createElement("span");

readTime.append(span)


const bold = document.createElement("strong");
bold.textContent = "Read Time:"

span.prepend(bold)
span.append(" 4 Minutes")

const extra = document.createElement("a");
extra.textContent = "Read more..."
extra.setAttribute("href", "#")
readTime.append(extra)

const sectionPost = document.querySelector("section.posts")
sectionPost.append(article);
let first = sectionPost.firstElementChild;
let next = first.nextElementSibling;
sectionPost.insertBefore(next, first);