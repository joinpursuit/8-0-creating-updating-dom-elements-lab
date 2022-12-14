
// first select the section
// use class list to add the name of "featured" to that section
let section = document.querySelector("section");
section.classList.add("featured")


// will use append 

// create a new element by the name "article"
let newArticle = document.createElement('article')
// select the place you want to update by using query selector
let sectionPost = document.querySelector('section.posts')
//add the new element to the end of section posts
sectionPost.append(newArticle)


let newImg = document.createElement('img')
newImg.setAttribute('src', "./images/paul-gilmore-unsplash.jpg")
newImg.setAttribute('alt', "Image of a mountain in front of a lake.")
newArticle.append(newImg)

let newH3 = document.createElement('h3')
newH3.textContent = 'Stop Planning'
newArticle.append(newH3)

let pushinP = document.createElement('p')
pushinP.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop/nplanning so much and instead focusing on relaxing. Taking a break at all"
newArticle.append(pushinP)

let aside = document.createElement('aside')
newArticle.append(aside)

let selectAside = document.querySelector('aside')

let stillPushinP = document.createElement('p')

selectAside.append(stillPushinP)

let pSelect = document.querySelector('p')

let span = document.createElement('span')
pSelect.append(span)

let spanSelect = document.querySelector('span')

let strongTag = document.createElement('strong')
spanSelect.append(strongTag)

span.textContent = "4 Minutes"
strongTag.textContent = "Read Time:"















