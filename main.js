document.querySelector('section').classList.add('featured')

const articleSec = document.createElement('article')

const image = document.createElement('img')
image.src = "./images/paul-gilmore-unsplash.jpg"
image.alt = "Image of a mountain in front of a lake."
articleSec.append(image)

const head3 = document.createElement('h3')
head3.textContent = "Stop Planning"
articleSec.append(head3)

const para = document.createElement('p')
para.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
articleSec.append(para)

const aside = document.createElement('aside')
articleSec.append(aside)

const para2 = document.createElement('p')
aside.append(para2)


const paraSpan = document.createElement('span')
para2.append(paraSpan)
paraSpan.textContent = " 4 Minutes"

const str = document.createElement('strong')
paraSpan.prepend(str)
str.textContent = "Read Time:"

const att = document.createElement('a')
att.setAttribute("href", "#")
att.textContent = " Read more..."
paraSpan.append(att)

document.querySelector('.posts').append(articleSec)

const articles = document.querySelectorAll('article')
articles[2].parentNode.insertBefore(articles[2], articles[1])
