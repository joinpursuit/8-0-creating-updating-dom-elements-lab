const section = document.querySelector("section")
section.classList.add("featured")

// article is parent of img
// article is parent of h3
// article is parent of p
// article is parent of aside 
// aside is the parent of p2

const sectionArticle = document.querySelector(".posts")
console.log(sectionArticle)

const article = document.createElement("article")



const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");



const header3 = document.createElement("h3")
header3.textContent = "Stop Planning"

const p1 = document.createElement("p")
p1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing."
p1.textContent += "Taking a break at all is so stressful these days why add to the stress by overworking yourself ? "



const aside = document.createElement("aside")

const p2 = document.createElement("p")
const span = document.createElement("span")
span.textContent = "4 Minutes"

const strong = document.createElement("strong")
strong.textContent = "Read Time:"


const a = document.createElement("a")
a.setAttribute("href", "#")
a.textContent = "Read more"


// appending
sectionArticle.append(article)
article.append(img, header3, p1, aside)
aside.append(p2)
p2.append(span)
span.append(strong, a)

//swap using first and second indexs in the array
const swap = document.querySelectorAll("section.posts article")
swap[1].after(swap[0])