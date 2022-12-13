const section = document.querySelector('section')
const posts = document.querySelectorAll('article')
const storage = posts[1].cloneNode(true)
const main = document.querySelector('section.posts')
const article = document.createElement('article')
const image = document.createElement('img')
const aside = document.createElement('aside')
const innerPara = document.createElement('p')
const span = document.createElement('span')
const strong = document.createElement('strong')
const link = document.createElement('a')
const para = document.createElement('p')
const heading = document.createElement('h3')

section.classList.add('featured')
image.src = './images/paul-gilmore-unsplash.jpg'
image.alt = 'Image of a mountain in front of a lake.'

heading.innerText = 'Stop Planning'

para.innerText =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

link.setAttribute('href', '#')
link.innerText = 'Read more...'

strong.innerText = 'Read Time:'
span.innerText = '4 Minutes'
span.prepend(strong)
innerPara.append(span, link)
aside.append(innerPara)

article.append(image, heading, para, aside)
posts[1].remove()
main.append(storage)
main.append(article)
