const section = document.querySelector("section")
section.setAttribute("class", "featured")

const article = document.createElement("article")
const posts = document.querySelector("section.posts")
posts.append(article)

const img = document.createElement("img")
article.prepend(img)

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")

const h3 = document.createElement("h3")
img.after(h3)
h3.textContent = "Stop Planning"

const paragraph = document.createElement("p")
h3.after(paragraph)

paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

const aside = document.createElement("aside")
paragraph.after(aside)

const paragraph2 = document.createElement("p")
aside.prepend(paragraph2)

 const span = document.createElement("span")
 span.textContent = " 4 Minutes "
 
 paragraph2.prepend(span)

 const strong = document.createElement("strong")


strong.textContent = "Read Time: "

paragraph2.prepend(strong)



const anchor = document.createElement("a")

paragraph2.append(anchor)

anchor.setAttribute("href", "#")
anchor.textContent = `Read more...`

const moveArticle = document.querySelectorAll(`section.posts article`)

posts.prepend(moveArticle[1])