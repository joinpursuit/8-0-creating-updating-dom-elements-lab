const newSection = document.querySelector("section")
newSection.setAttribute("class", "featured")

const newPost = document.querySelector("section.posts")
// console.log(newPost)

const anotherPost = document.createElement("article")
newPost.append(anotherPost)
// console.log(newPost)

const addImage = document.createElement("img")
anotherPost.append(addImage)
// console.log(newPost)

addImage.setAttribute("src", "./images/paul-gilmore-unsplash.jpg",)
addImage.setAttribute("alt", "Image of a mountain in front of a lake.")

const getH3 = document.createElement("h3")
// console.log(getH3)

getH3.innerText = "Stop Planning"
anotherPost.append(getH3)

const newP = document.createElement("p")
newP.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planing so much and instead foucing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
anotherPost.append(newP)

const addedAside = document.createElement("aside")
anotherPost.append(addedAside)

const newP2 = document.createElement("p")
addedAside.append(newP2)

const addedSpan = document.createElement("span")
addedSpan.innerText = "4 Minutes"
newP2.append(addedSpan)


const addedStrong = document.createElement("strong")
addedStrong.innerText = "Read Time"
newP2.append(addedStrong)

const aTag = document.createElement("a")
aTag.innerText = "Read more"
aTag.setAttribute("href", "#")
newP2.append(aTag)

const firstArticle = document.querySelector(".first")
const secondArticle = document.querySelector(".second")
firstArticle.before(secondArticle)