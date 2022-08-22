const sectionClass = document.querySelector("section")

sectionClass.setAttribute("class", "featured")

const article = document.createElement("article")
const sectionPosts = document.querySelector(".posts")
sectionPosts.append(article)

const img = document.createElement("img")
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")
article.prepend(img)

const h3 = document.createElement("h3")
article.append(h3)
h3.textContent = "Stop Planning"

const para1h3 = document.createElement("p")
article.append(para1h3)
para1h3.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

const aside = document.createElement('aside')
article.append(aside)

const para2aside = document.createElement("p")
aside.append(para2aside)

const span = document.createElement("span")
para2aside.append(span)

const strong = document.createElement('strong')
span.append(strong)


const readTime = strong.textContent = "Read Time: "

const time = '4 Minutes'

strong.after(time)

const anchor = document.createElement('a')
para2aside.append(anchor)
anchor.setAttribute("href","#")
anchor.textContent = "Read more..."

const article1 = document.querySelectorAll('.posts article')
article1[1].after(article1[0])