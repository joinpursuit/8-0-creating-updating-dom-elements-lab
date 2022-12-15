// testcase 1

// add a class "featured" to first section element of the page
const section = document.querySelector("section")
section.classList.add("featured");

// testcase 2

// create new article and at to end (append) of section.posts
const newArticle = document.createElement("article");
const post = document.querySelector("section.posts");
post.append(newArticle);

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
const paragraph = document.createElement("p")
newArticle.append(paragraph)

// add content to paragraph
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

// create aside tag and append to article
const aside = document.createElement("aside")
newArticle.append(aside)

// create a paragraph element inside aside element.
const p = document.createElement("p")
aside.append(p)

// create span inside p and append to p
const span = document.createElement("span")
p.append(span)

// create strong inside span 
const strong = document.createElement("strong")
span.append(strong)
strong.textContent = "Read Time:"
span.append("4 Minutes")    // we append else everything turns bold

const a = document.createElement("a")
span.after(a)

a.setAttribute("href","#")
a.textContent = "Read more..."

// testcase 3
const articleArray = document.querySelectorAll("section.posts article")
post.prepend(articleArray[1])