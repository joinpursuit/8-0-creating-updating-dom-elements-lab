// Add a class of "featured" to the first `section` element on the page
const sectionClass = document.querySelector("section");
sectionClass.classList.add('featured');

// create article element
const article = document.createElement('article')
const sectionPost = document.querySelector('section.posts')
sectionPost.append(article)

const img = document.createElement('img')
article.append(img)
img.setAttribute('src','./images/paul-gilmore-unsplash.jpg')
img.setAttribute('alt','Image of a mountain in front of a lake.')

const h3 = document.createElement('h3')
img.after(h3)
h3.textContent = 'Stop Planning'

const p = document.createElement('p')
h3.after(p)
p.textContent = ' You -- yes you! You\'re an over-planner, I can tell. It\'s time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?'

const aside = document.createElement('aside')
p.after(aside)

const p2 = document.createElement('p')
aside.append(p2)
p2.textContent = 'Read Time: 4 Minutes'


const span = document.createElement('span')
p2.append(span)
const strong = document.createElement('strong')
span.before(strong)
span.textContent = ' 4 Minutes'
strong.textContent = 'Read Time:'

const a = document.createElement('a')
p2.append(a)
a.setAttribute('href','#')
a.textContent = 'Read more...'

const firstArticle = document.querySelector('section.posts article')
const secondArticle = document.querySelector('section.posts article:nth-child(2)')

firstArticle.before(secondArticle)