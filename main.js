const featured = document.querySelector("section")
featured.setAttribute("class", "featured")

const posts = document.createElement("article")
const endElement = document.querySelector("section.posts")
endElement.append(posts)
const image = document.createElement("img")
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
image.setAttribute("alt", "Image of a mountain in front of a lake.")
posts.append(image)
const heading3 = document.createElement("h3")
heading3.textContent = "Stop Planning"
image.append(heading3)
const paragraph = document.createElement("p")
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
image.append(paragraph)
const aside = document.createElement("aside")
image.append(aside)
const paragraphTwo = document.createElement("p")
aside.append(paragraphTwo)
const span = document.createElement("span")
span.textContent = "4 Minutes"
paragraphTwo.append(span)
const strong = document.createElement("strong")
strong.textContent = "Read Time:"
span.append(strong)
const a = document.createElement("a")
a.setAttribute("href", "#")
a.textContent = "Read more..."
span.append(a)

const allArticles = endElement.querySelectorAll("article")
const secondArticle = allArticles[1];
secondArticle.remove();
endElement.prepend(secondArticle);

