// console.log('hello')

const firstSection = document.querySelector('section')
// console.log(firstSection)
firstSection.classList.add(`featured`)

const sectionPosts = document.querySelector('section.posts')
// console.log(sectionPosts)

const lastArticle = document.createElement(`article`)
sectionPosts.append(lastArticle)

const img = document.createElement(`img`)
img.setAttribute(`src`, "./images/paul-gilmore-unsplash.jpg")
img.setAttribute(`alt`, "Image of a mountain in front of a lake.")
lastArticle.prepend(img)

const h3 = document.createElement(`h3`)
img.after(h3)
h3.textContent = `Stop Planning`

const paragraph = document.createElement(`p`)
h3.after(paragraph)
paragraph.textContent = ` You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

const aside = document.createElement(`aside`)
paragraph.after(aside)
const newParagraph = document.createElement(`p`)
aside.prepend(newParagraph)

const span = document.createElement(`span`)
newParagraph.prepend(span)
const bold = document.createElement(`strong`)
// console.log(bold)
bold.textContent = `Read Time: `
span.textContent += `4 Minutes`
span.prepend(bold)

// span.textContent += `4 Minutes`

const spanLink = document.createElement(`a`)
span.after(spanLink)
spanLink.setAttribute(`href`, `#`)
spanLink.textContent = `Read more...`


const postArray = document.querySelectorAll(`section.posts article`)
// console.log(postArray)
sectionPosts.prepend(postArray[1])
