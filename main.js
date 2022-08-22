// Testing that .js file is linked
// console.log('hello')

// Adding class called 'featured' to FIRST <section> tag/element on page
const firstSection = document.querySelector('section')
// console.log(firstSection)
firstSection.classList.add(`featured`)

// Accessing Parent element for 3rd article element to be added to page
const sectionPosts = document.querySelector('section.posts')
// console.log(sectionPosts)

// Creating article element to encompass the elements of the last article and appending it (adding it to the end) to its parent element
const lastArticle = document.createElement(`article`)
sectionPosts.append(lastArticle)

// Creating the img tag and its attributes in the final article, and adding it it the parent lastArticle element 
const img = document.createElement(`img`)
img.setAttribute(`src`, "./images/paul-gilmore-unsplash.jpg")
img.setAttribute(`alt`, "Image of a mountain in front of a lake.")
lastArticle.prepend(img)

// Creating h3 element and setting it as SIBLING to img element
const h3 = document.createElement(`h3`)
img.after(h3)
h3.textContent = `Stop Planning`

// Creating p element and setting as SIBLING to h3 (which is also sibling to img tag). Then populating p tag with text
const paragraph = document.createElement(`p`)
h3.after(paragraph)
paragraph.textContent = ` You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

//Creating another SIBLING element -> aside, and a child element p to the aside element 
const aside = document.createElement(`aside`)
paragraph.after(aside)
const newParagraph = document.createElement(`p`)
aside.prepend(newParagraph)

// Creating span element as a child of the previous p element and populating some of the child span element's text with strong (bolded text)
const span = document.createElement(`span`)
newParagraph.prepend(span)
const bold = document.createElement(`strong`)
// console.log(bold)
bold.textContent = `Read Time: `
span.textContent += `4 Minutes`
span.prepend(bold)


// span.textContent += `4 Minutes`

// Creating anchor tag as SIBLING to the span tag and giving it attributes and text
const spanLink = document.createElement(`a`)
span.after(spanLink)
spanLink.setAttribute(`href`, `#`)
spanLink.textContent = `Read more...`

// Swapping articles in the section.posts, -> create an array of the all 3 three articles (easy to reference them by index, then just prepend (put the 2nd article (index 1))) above all the others (so order (by index) goes from 0, 1, 2 --> 1, 0, 2)
const postArray = document.querySelectorAll(`section.posts article`)
// console.log(postArray)
sectionPosts.prepend(postArray[1])
