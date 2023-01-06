const featuredSection = document.querySelector("section");
featuredSection.classList.add("featured")

const posts = document.querySelector(".posts")
const article = document.createElement("article")
const img = document.createElement("img")
const h3 = document.createElement("h3")
const p1 = document.createElement('p')
const aside = document.createElement("aside")
const p2 = document.createElement('p')
const span = document.createElement("span")
const strong = document.createElement("strong")
const a = document.createElement("a")

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.")
h3.textContent = "Stop Planning"
p1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
strong.textContent = "Read Time:"
span.textContent = " 4 Minutes"
a.setAttribute("href", "#")
a.textContent = "Read more..."

posts.append(article)
article.append(img)
article.append(h3)
article.append(p1)
article.append(aside)
aside.append(p2)
p2.append(span)
span.prepend(strong)
span.after(a)

allPosts = document.querySelectorAll(".posts article")
posts.prepend(allPosts[1])