//featured
const section = document.querySelector("section")
section.classList.add("featured");
//
//article
const article = document.createElement("article")
let sectionPosts = document.querySelector("section.posts")
sectionPosts.append(article)
let img = document.createElement("img")
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")
article.append(img)
let h3 = document.createElement("h3")
h3.textContent = "Stop Planning"
article.append(h3)
let p = document.createElement("p")
p.textContent = "You -- yes you! You're an over-planner, I can tell. Its time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(p)
//
//aside
const aside = document.createElement("aside")
article.append(aside)
let asideP2 = document.createElement("p")
aside.append(asideP2)
let span = document.createElement("span")
span.textContent = " 4 Minutes"
asideP2.append(span)
let strong = document.createElement("strong")
strong.textContent = "Read Time:"
span.append(strong)
let a = document.createElement("a")
a.setAttribute("href", "#")
a.textContent = "Read more..."
asideP2.append(a)
//
//switching articles around
const articleNewFirst = document.querySelectorAll("section.posts article")
articleNewFirst[0].before(articleNewFirst[1])


