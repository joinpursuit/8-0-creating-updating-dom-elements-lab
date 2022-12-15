const section = document.querySelector("section")
section.classList.add("featured");

const newArticle = document.createElement("article");
const post = document.querySelector("section.posts");
post.append(newArticle);

const image = document.createElement("img")
newArticle.prepend(image)
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");

const heading = document.createElement("h3")
newArticle.append(heading)
heading.textContent = 'Stop Planning'

const paragraph = document.createElement("p")
newArticle.append(paragraph)
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

const aside = document.createElement("aside")
newArticle.append(aside)

const p = document.createElement("p")
aside.append(p)

const span = document.createElement("span")
p.append(span)

const strong = document.createElement("strong")

span.append(strong)

strong.textContent = "Read Time:"
span.append("4 Minutes")

const a = document.createElement("a")
span.after(a)

a.setAttribute("href","#")
a.textContent = "Read more..."

const articleArray = document.querySelectorAll("section.posts article")
post.prepend(articleArray[1])