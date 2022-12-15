const section1 = document.querySelector("section") 
section1.setAttribute("class", "featured")

const post1 = document.querySelector("section.posts")

const newPost1 = document.createElement("article")
post1.append(newPost1) 


const newImg1 = document.createElement("img")
newPost1.append(newImg1)

newImg1.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
newImg1.setAttribute("alt", "Image of a mountain in front of a lake.")

const newh3 = document.createElement("h3")
newh3.innerText = "Stop Planning"
newPost1.append(newh3)

const P1 = document.createElement("p")
P1.innerText = ("You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?")
newPost1.append(P1) 

const standAside = document.createElement("aside")
newPost1.append(standAside)

const NewP = document.createElement("p")
standAside.append(NewP) 

const NewSpan = document.createElement("span")
NewSpan.innerText = "4 Minutes" 
NewP.append(NewSpan) 

const GetStrong = document.createElement("strong")
GetStrong.innerText = "Read Time"
NewP.append(GetStrong) 

const Atag = document.createElement("a")
Atag.innerText = "Read more"
Atag.setAttribute("href", "#")
NewP.append(Atag)

const firstArticle = document.querySelector('.art1')
const middleArticle = document.querySelector('.art2')
firstArticle.before(middleArticle)