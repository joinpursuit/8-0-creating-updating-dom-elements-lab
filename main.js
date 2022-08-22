//Adding `feature` class to first section post
const sectionFirst = document.querySelector(`section`)
sectionFirst.classList.add(`featured`)

//Creating a third article
const articleThird = document.createElement(`article`)
const sectionPost = document.querySelector('section.posts')
sectionPost.append(articleThird)

const img = document.createElement(`img`)
articleThird.append(img)
img.setAttribute(`src`, `./images/paul-gilmore-unsplash.jpg`)
img.setAttribute(`alt`, `Image of a mountain in front of a lake.`)

const h3 = document.createElement(`h3`)
articleThird.append(h3)
h3.textContent = `Stop Planning`


const p1 = document.createElement(`p`)
articleThird.append(p1)
p1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

const aside = document.createElement(`aside`)
articleThird.append(aside)

const p2 = document.createElement(`p`)
aside.append(p2)

const span = document.createElement(`span`)
p2.append(span)
span.textContent = ` 4 Minutes`

const strong = document.createElement(`strong`)
span.append(strong)
strong.textContent = `Read Time:`

const anchor = document.createElement(`a`)
p2.append(anchor)
anchor.textContent = `Read more...`
anchor.setAttribute(`href`, `#`)

//Moving the first article to the second position
const articles = document.querySelectorAll(`section.posts article`)
articles[1].after(articles[0])