let featureClass = document.querySelector("section")
featureClass.classList.add("featured")

let article = document.createElement("article")
let main = document.querySelector("section.posts")

main.append(article)

let img = document.createElement("img")
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")

article.append(img)

let h3 = document.createElement("h3")
h3.textContent = "Stop Planning"

article.append(h3)

let p1 = document.createElement("p")
p1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

article.append(p1)

let aside = document.createElement("aside")
let p2 = document.createElement("p")

article.append(aside)
aside.append(p2)

let span = document.createElement("span")
let strong = document.createElement("strong")

span.textContent = " 4 Minutes"
strong.textContent = "Read Time:"


p2.append(span)
span.prepend(strong)

let anchor = document.createElement("a")
anchor.setAttribute("href", "#")
anchor.textContent = "Read more..."

span.after(anchor)

let selector = document.querySelector("section.posts article")
selector.remove()

let selector2 = document.querySelector("section.posts article")
selector2.after(selector)















