//added a class 'feature' to first 'section'
const section = document.querySelector("section")
section.classList.add("featured")

//created 'article' element
const article = document.createElement("article");

//added 'article' to end of 'section'
const postSection = document.querySelector("section.posts")
postSection.append(article)

//Create child element of parent article
const img = document.createElement("img")
const h3 = document.createElement("h3")
const pTag = document.createElement("p")
const aside = document.createElement("aside")

//add child elements to 'article' element
article.append(img)
article.append(h3)
article.append(pTag)
article.append(aside)

//add text to elements
h3.innerText = "Stop Planning";
pTag.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?" 

img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")


//create 'span' and 'p'
const span = document.createElement("span")
const aTag = document.createElement("a")
const strong = document.createElement("strong")
const pTag2 = document.createElement("p")

span.innerText = "4 Minutes "
strong.innerText = "Read Time: "
aTag.innerText = "Read more..."

aTag.setAttribute("href", "#")

aside.append(pTag2)
pTag2.append(span)
span.append(strong)
span.append(aTag)

const allArticles = document.querySelectorAll("section.post.article")
console.log(allArticles)






