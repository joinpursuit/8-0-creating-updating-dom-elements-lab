
// [ ] Add a class of "featured" to the first section element on the page.
let section = document.querySelectorAll("section")
section[0].classList.add("featured")


// [ ] Create the following article element with JavaScript 
// and add at the end of the section.posts element.
let newArticle = document.createElement("article")
section[1].append(newArticle)

let img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")
newArticle.append(img)

let heading = document.createElement("h3")
heading.textContent = "Stop Planning"
newArticle.append(heading)

let paragraph = document.createElement("p")
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
newArticle.append(paragraph)

let aside = document.createElement("aside")
newArticle.append(aside)

let asideP = document.createElement("p")
aside.append(asideP)

let span = document.createElement("span")
span.textContent = " 4 Minutes"
asideP.append(span)

let strong = document.createElement("strong")
strong.textContent = "Read Time:"
span.prepend(strong)

let a = document.createElement("a")
a.setAttribute("href", "#")
a.textContent = "Read more..."
asideP.append(a)

let article = document.querySelectorAll("article")
section[1].prepend(article[2])

// [ ] Move the first article from inside the section.posts element
// to become the second article and move the second article so that it is the first article.

