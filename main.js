const section = document.querySelector('section')
section.setAttribute('class','featured')
section.append()

const sectionPost = document.querySelector('section.posts')
const article = document.createElement('article')
sectionPost.append(article)

const img = document.createElement('img')
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");

const h3 = document.createElement("h3")
h3.textContent = 'Stop Planning'
const paragraph1 = document.createElement('p')
paragraph1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
const aside = document.createElement('aside')
article.append(img,h3, paragraph1, aside)

const paragraph2 = document.createElement('p')
aside.append(paragraph2)
const span = document.createElement('span')
span.textContent = '4 Minutes'
const strong = document.createElement('strong')
strong.textContent = 'Read Time:'
span.append(strong)
const a = document.createElement('a')
a.setAttribute('href', '#')
a.textContent = 'Read more...'
paragraph2.append(span,a)


const switch1 = document.querySelectorAll('.posts article')
console.log(switch1)
switch1[1].after(switch1[0])

