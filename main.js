const section = document.querySelector('section')
section.setAttribute('class', 'featured')

const posts = document.querySelector('section.posts')

const article = document.createElement('article')

const img = document.createElement('img')
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg')
img.setAttribute('alt', 'Image of a mountain in front of a lake.')

const heading3 = document.createElement('h3')
heading3.textContent = 'Stop Planning'

const paragraph = document.createElement('p')
paragraph.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

const aside = document.createElement('aside')

const paragraph2 = document.createElement('p')

const strong = document.createElement('strong')
strong.textContent = 'Read Time:'

const span = document.createElement('span')
span.textContent = ' 4 Minutes'

const a = document.createElement('a')
a.textContent = 'Read more...'
a.setAttribute('href', '#')

posts.append(article)
article.append(img)
article.append(heading3)
article.append(paragraph)
article.append(aside)
aside.append(paragraph2)
paragraph2.append(span)
span.prepend(strong)
paragraph2.append(a)

const post1 = document.querySelectorAll('section.posts article')[0]
const post2 = document.querySelectorAll('section.posts article')[1]
post1.before(post2)
