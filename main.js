document.querySelector('section').classList.add("featured")

const article3 = document.createElement('article')
const image = document.createElement('img')
const h3 = document.createElement("h3")
const paragraph = document.createElement('p')
const aside = document.createElement('aside')
const paragraph2 = document.createElement('p')
const span = document.createElement('span')
const strong = document.createElement('strong')
const link = document.createElement('a')


image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
image.setAttribute("alt", "Image of a mountain in front of a lake.")

h3.textContent = "Stop Planning"

paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";



link.setAttribute("href", "#")
link.textContent = "Read more..."

strong.textContent= "Read Time:"

span.textContent = " 4 Minutes"

document.querySelector(".posts").append(article3)
article3.append(image)
article3.append(h3)
article3.append(paragraph)
article3.append(aside)

aside.append(paragraph2)
aside.append(span)
aside.append(link)

paragraph2.append(span)
paragraph2.append(link)

span.prepend(strong)


const article2 = document.querySelectorAll(".posts article")[1]

document.querySelector(".posts").prepend(article2)




