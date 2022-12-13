const firstSection = document.querySelector('section')
firstSection.setAttribute("class", "featured")


const sectionP = document.querySelector("section.posts")
const articleEl = document.createElement("article")
sectionP.append(articleEl)


const img = document.createElement("img")
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")
articleEl.append(img)
console.log(sectionP);

const h3 = document.createElement("h3")
h3.textContent = "Stop Planning"
articleEl.append(h3)

const p1 = document.createElement("p")
p1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
articleEl.append(p1)

const aside = document.createElement("aside")
articleEl.append(aside)

const p2 = document.createElement("p")
aside.append(p2)

const span = document.createElement("span")
span.textContent = "4 Minutes"
p2.prepend(span)

const strong = document.createElement("strong")
strong.textContent = "Read Time:"
span.prepend(strong)

const a = document.createElement("a")
a.setAttribute("href", "#")
a.textContent = "Read more..."
p2.append(a)

const all = document.querySelectorAll("section.posts article")
console.log(all)

sectionP.insertBefore(all[1], all[0])





