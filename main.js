const firstSec = document.querySelector('section');
firstSec.classList.add('featured')


const article = document.createElement('article');
const lakeMountain = document.createElement('img');
lakeMountain.setAttribute('src', './images/paul-gilmore-unsplash.jpg')
lakeMountain.setAttribute('alt', 'Image of a mountain in front of a lake.')
article.prepend(lakeMountain)

const h3 = document.createElement('h3');
h3.textContent = 'Stop Planning'
article.append(h3)

const paragraph = document.createElement('p');
paragraph.textContent =  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(paragraph)

const aside = document.createElement('aside');
article.append(aside)

const paragraph1 = document.createElement('p');
aside.prepend(paragraph1)

const span = document.createElement('span');
paragraph1.prepend(span)
span.textContent = '4 Minutes'

const bold = document.createElement('strong');
span.prepend(bold)
bold.textContent = 'Read Time: '

const link = document.createElement('a');
paragraph1.append(link)
link.setAttribute('href', '#')
link.textContent = 'Read more...'

const post = document.querySelector('.posts');
post.append(article)

const swap = document.querySelectorAll('article');
post.prepend(swap[2])