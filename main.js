

const section = document.querySelector("section");
section.classList.add("featured");
//section.setAttribute("class", "featured");

const article2 = document.createElement("article")
const sectionPost = document.querySelector("section.posts")
sectionPost.append(article2);

const img = document.createElement("img")
article2.append(img)
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")

const h3 = document.createElement("h3")
//after - create after the element
img.after(h3)
h3.textContent = "Stop Planning"


const p1 = document.createElement("p")
h3.after(p1)
p1.textContent = `" You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?"`
const aside = document.createElement("aside")
p1.after(aside)
const p2 = document.createElement("p")
aside.append(p2)

const span =  document.createElement("span")
p2.append(span)
span.textContent = "4 Minutes"

const strong = document.createElement("strong")
span.append(strong)
strong.textContent = "Read Time:"

const a = document.createElement("a")
p2.append(a)
a.setAttribute("href", "#")
a.textContent = "Read more..."

// const articleA = document.querySelector("article[0]")
// const articleB = document.querySelector("article[1]")

const articles = document.querySelectorAll("section.posts article")
articles[1].after(articles[0])