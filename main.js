// testcase 1

// add a class "featured" to first section element of the page
const section = document.querySelector("section")
section.classList.add("featured");

// testcase 2

// create new article and add to end (append) of section.posts
const newArticle = document.createElement("article");
const postSection= document.querySelector("section.posts");
postSection.append(newArticle);

// create new image and at to the top (prepend) of article
const image = document.createElement("img")
newArticle.prepend(image)
// setting image attributes
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");


// create new h3 element and append to article
const heading = document.createElement("h3")
newArticle.append(heading)
// add content to h3
heading.textContent = 'Stop Planning'


// create new paragraph element and append to article
const paragraphArticle = document.createElement("p")
newArticle.append(paragraphArticle)
// add content to paragraph
paragraphArticle.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"


// create aside tag and append to article
const aside = document.createElement("aside")
newArticle.append(aside)

// create a paragraph element inside aside element.
const paragraphAside = document.createElement("p")
aside.append(paragraphAside)

// create span inside p and append to p
const span = document.createElement("span")
paragraphAside.append(span)

// create strong inside span and add content
const strong = document.createElement("strong")
strong.textContent = "Read Time:"
span.textContent = "4 Minutes"
span.prepend(strong)

//create <a> and add href and text
const alink = document.createElement("a")
paragraphAside.append(alink)

alink.setAttribute("href","#")
alink.textContent = "Read more..."

// testcase 3
const articleNode = document.querySelectorAll("section.posts article")
postSection.prepend(articleNode[1])