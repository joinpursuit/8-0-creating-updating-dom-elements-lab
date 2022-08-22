const section = document.querySelector("section")

const posts = document.querySelector(".posts")
const post1 = document.querySelector(".posts article")

section.classList.add("featured")

const article1 = document.createElement("article")
const addImg = document.createElement("img")
addImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
addImg.setAttribute("alt", "Image of a mountain in front of a lake.")

const h3 = document.createElement("h3")
h3.textContent = "Stop Planning"

const p = document.createElement("p")
p.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`
const aside = document.createElement("aside")


const p2 = document.createElement("p")

const span = document.createElement("span")
span.textContent = "4 Minutes"

const strong = document.createElement("strong")
strong.textContent = "Read Time: "

const a = document.createElement("a")
a.setAttribute ("href", "#")
a.textContent = "Read more..."

span.prepend(strong)
p2.append(span)
p2.append(a)

aside.append(p2)

article1.append(addImg, h3, p, aside)

posts.append(article1)

const articles = document.querySelectorAll(`section.posts article`)
articles[1].after(articles[0])
