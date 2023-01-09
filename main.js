const featuredSection = document.querySelector('section');
featuredSection.classList.add('featured');

const article = document.createElement('article')
const img = document.createElement('img')
    img.classList.add('src')
    img.classList.add('alt')
    img.setAttribute('src', './images/paul-gilmore-unsplash.jpg')
    img.setAttribute('alt', 'Image of a mountain in front of a lake.')
const h3 = document.createElement('h3')
    h3.textContent = 'Stop Planning'
const paragraph1 = document.createElement('p')
    paragraph1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
const paragraph2 = document.createElement('p')
const aside = document.createElement('aside')
const strong = document.createElement('strong')
    strong.textContent = 'Read Time:'
const span = document.createElement('span')
    span.textContent = ' 4 Minutes'
const a = document.createElement('a')
    a.classList.add('href')
    a.setAttribute('href', '#')
    a.textContent = 'Read more...'

const sectionPosts = document.querySelector('section.posts')
sectionPosts.append(article)
article.append(img)
article.append(h3)
article.append(paragraph1)
article.append(aside)
aside.append(paragraph2)
paragraph2.append(span)
span.prepend(strong)
paragraph2.append(a)


