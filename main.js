const section = document.querySelector("section")
section.classList.add("featured")

const article = document.createElement("article")
const img = document.createElement('img')
const h3 = document.createElement('h3')
const p = document.createElement('p')
const span = document.createElement('span')
const a = document.createElement('a')
const aside = document.createElement('aside')
const strong = document.createElement('strong')
const p1 = document.createElement('p')

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")

h3.textContent = "Stop Planning"

p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

a.setAttribute("href", "#")

a.textContent = "Read more..."

strong.textContent = "Read Time:"

span.textContent = "4 Minutes"

p1.append(strong, span, a)

aside.append(p1)

article.append(img, h3, p, aside)

const posts = document.querySelector("section.posts")
posts.append(article)

const articles = document.querySelectorAll("section.posts article")
articles[1].after(articles[0]);
