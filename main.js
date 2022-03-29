const firstSectionElement = document.querySelector("section");
firstSectionElement.classList.add("featured");

const article = document.createElement("article")


const img = document.createElement('img')
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")

const h3 = document.createElement('h3')
h3.textContent = "Stop Planning"

const p = document.createElement('p')
p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

const p1 = document.createElement('p')

const span = document.createElement('span')
span.textContent = "4 Minutes"

const strong = document.createElement('strong')
strong.textContent = "Read Time:"

const a = document.createElement('a')
a.setAttribute("href", "#")
a.textContent = "Read more..."

const aside = document.createElement('aside')


aside.append(p1)
article.append(img, h3, p, aside)
p1.append(strong, span, a)



const posts = document.querySelector("section.posts")
posts.append(article)

const articles = document.querySelectorAll("section.posts article")
articles[1].after(articles[0]);


