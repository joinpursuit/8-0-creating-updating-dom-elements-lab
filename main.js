const section = document.querySelector('section');
section.classList.add('featured');

const article = document.createElement('article');
const img = document.createElement
('img');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const aside = document.createElement('aside')
const p2 = document.createElement('p')
const strong = document.createElement('strong')
const span = document.createElement('span')
const link = document.createElement('a')

img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');
h3.textContent = 'Stop Planning'
p.textContent = `   You -- yes you! You're an over-planner, I can tell. It's time to stop
      planning so much and instead focusing on relaxing. Taking a break at all
      is so stressful these days; why add to the stress by overworking yourself?`;
strong.textContent = `Read Time:`
span.textContent = `4 Minutes`
link.setAttribute('href','#')
link.textContent = `Read more...`

article.append(img)
article.append(h3)
article.append(p)
article.prepend(aside)
aside.prepend(p2)
p2.append(strong)
strong.prepend(span)
span.append(link)


const post = document.querySelector('section.posts')



post.append(article)

const articles = document.querySelectorAll('section.posts article')


articles[1].after(articles[0])