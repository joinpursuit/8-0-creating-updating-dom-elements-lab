const section = document.querySelector("section");
section.classList.add("featured");

const article = document.createElement("article")
const img = document.createElement("img")
const header3 = document.createElement("h3")
const para1 = document.createElement("p")
const aside = document.createElement("aside")
const para2 = document.createElement("p")
const span = document.createElement("span")
const strong = document.createElement("strong")
const link = document.createElement("link")

const article1 = document.querySelectorAll(".post article")[0]
const article2 = document.querySelectorAll(".post article")[1]

const secondSection = document.querySelector(".posts")
secondSection.append(article);

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt","Image of a mountain in front of a lake.");
article.append(img)

header3.textContent = "Stop Planning"
article.append(header3)

para1.textContent= "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(para1)

article.append(aside)
para2.append(article)

span.textContent= "4 Minutes"
article.append(span)

strong.textContent= "Read Time:"
article.append(strong)


link.setAttribute("href", "#")
link.textContent("Read more")

secondSection.append(article)



