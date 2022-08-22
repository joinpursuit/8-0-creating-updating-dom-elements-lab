const section = document.querySelector("section")
section.setAttribute("class","featured")

const sPosts = document.querySelector(".posts")
const posts = document.querySelector(`.posts`);

const first = document.querySelector(".posts article")
posts.append(first)

const article = document.createElement(`article`);
posts.append(article);
const image = document.createElement(`img`);
image.setAttribute(`src`, `./images/paul-gilmore-unsplash.jpg`);
image.setAttribute(`alt`, `Image of a mountain in front of a lake.`);
article.append(image);
const headerH3 = document.createElement(`h3`);
headerH3.textContent = `Stop Planning`;
article.append(headerH3);
const paragraph = document.createElement(`p`);
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`;
article.append(paragraph);
const aside = document.createElement(`aside`);
article.append(aside);
const asideParagraph = document.createElement(`p`);
const spanTag = document.createElement(`span`)
asideParagraph.append(spanTag)
const bold = document.createElement(`strong`)
bold.textContent = `Read Time:`
spanTag.textContent = ` 4 Minutes `
spanTag.prepend(bold);
const anchor = document.createElement(`a`)
anchor.textContent = `Read more...`
anchor.setAttribute(`href`, `#`)
spanTag.append(anchor)
aside.append(asideParagraph);