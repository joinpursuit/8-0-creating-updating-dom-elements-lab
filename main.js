const section = document.querySelector('section')
section.classList.add('featured')

const posts = document.querySelector('section.posts')
const article = document.createElement('article')
posts.append(article)

const img = document.createElement('img')
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")
article.append(img)

const heading = document.createElement("h3")
heading.textContent = "Stop Planning"
article.append(heading)

const paragraph = document.createElement("p")
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(paragraph)

const aside = document.createElement("aside")
article.append(aside)

const secondParagraph = document.createElement("p")
aside.append(secondParagraph)

const span = document.createElement("span")
span.textContent = "4 Minutes"
secondParagraph.append(span)

const strong = document.createElement("strong")
strong.textContent = "Read Time: "
secondParagraph.prepend(strong)

const anchor = document.createElement("a")
anchor.setAttribute("href", "#")
anchor.textContent = "Read more..."
secondParagraph.append(anchor)

article.append(aside)

const allPosts = document.querySelector(".posts")
allPosts.append(article)

const firstArticle = document.querySelectorAll("article")
const secondArticle = firstArticle[2]
firstArticle[2].remove()

allPosts.prepend(secondArticle)