const featured = document.querySelector("section")

featured.classList.add("featured")

const article = document.createElement("article")

const section = document.querySelector("section.posts")

section.append(article)

const img = document.createElement("img")

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")

const header = document.createElement("h3")

header.textContent = "Stop Planning"

const p = document.createElement("p")

p.textContent = `
You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself? ` 

const aside = document.createElement("aside")

const p2 = document.createElement("p")

const span = document.createElement("span")

span.textContent = "4 Minutes"

const strong = document.createElement("strong")

strong.textContent = "Read Time:"

const a = document.createElement("a");

a.setAttribute("href", "#")
a.textContent = "Read more..."

article.append(img);
article.append(header);
article.append(p);
article.append(aside);
aside.append(p2);
p2.append(span)
p2.append(a)
span.prepend(strong)




// append 
// prepend 
// after 
// before 

const articles = document.querySelectorAll(".posts article")

articles[0].before(articles[1])