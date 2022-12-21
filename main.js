 // **Grabbing section element from HTML document.
 //  **Setting attribute with a class name featured on the to the first section element.
const section = document.querySelector("section");
section.setAttribute("class", "featured");

// ** Creating article element and assigning a variable to it it 
// ** This is the article we are creating to add to the existing page
const newArticle = document.createElement("article")
console.log(section)
// article.setAtrribute("src", "./images/paul-gilmore-unsplash.jpg")

// ** Grabbing the section.posts element and adding/appending to the the section.posts element.
const sectionPost = document.querySelector('section.posts')
sectionPost.append(newArticle)
// const newPost = document.createElement("article")
// const newArticle = document.querySelector("article")

// ** Creating the .img element and asssigning a variable to store it in.
// ** setting attributes on the .img element.
// ** Appending the .img element to the article element.
const image = document.createElement("img")
image.setAttribute("src" , "./images/paul-gilmore-unsplash.jpg")
image.setAttribute("alt", "Image of a mountain in front of a lake.")
newArticle.append(image)

// ** Creating the h3 element and asssigning a variable to store it in.
// ** Assigning the Header text to the h3.innerText property.
// ** Appending the h3 element to the article element.
const h3 = document.createElement("h3")
h3.innerText = "Stop Planning"
newArticle.append(h3)

// ** Creating the "p" element and asssigning a variable to store it in.
// ** Assigning text to the p.innerText property.
// ** Appending the "p" element to the article element.
const p = document.createElement("p")
p.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

newArticle.append(p)

// ** Creating the "aside" element and asssigning a variable to store it in.
// ** Appending the newly created article to the aside 
// ** Creating another "p" and assigning another variable to store it in (pTag).
// ** Appending (pTag) to article.
const aside = document.createElement("aside")
newArticle.append(aside)
const pTag = document.createElement("p")
aside.append(pTag)

// ** Creating the "span" element and asssigning a variable to store it in.
// ** Assigning text to the span.innerText property.
// ** Appending the "span" element to the "p" element.
const span = document.createElement("span")
span.innerText = " 4 Minutes";
pTag.append(span)

// ** Creating the "strong" element and asssigning a variable to store it in.
// ** Assigning text to the strong.innerText property.
// ** Appending the "strong" element to the "span" element.
const strong = document.createElement("strong")
strong.innerText = "Read Time:";
span.prepend(strong)

// ** Create "a" element and asssigning a variable to store it in.
// ** Set attributes on "a" element. 
// ** Assign text to our variable representing the the "aTag.innerText" property.
// ** Append "a"element to "span" element.
const aTag = document.createElement("a");
aTag.setAttribute("href", "#")
aTag.innerText = "Read more"
span.after(aTag)


// ** Grab all articles in section.posts 
// ** Swap position between the first and second article by prepending the second article to the section withc class element posts 
const allArticles = document.querySelectorAll("section.posts article");

sectionPost.prepend(allArticles[1])





