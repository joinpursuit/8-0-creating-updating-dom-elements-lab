let sec = document.querySelector('section')

sec.classList.add('featured')

let newArt = document.querySelector('.posts')
newArt.append(document.createElement('article'))

let art2 = document.querySelectorAll('article')
art2[art2.length - 1].prepend(document.createElement('img'))

art2[art2.length - 1].classList.add('theone')

let img1 = document.querySelector('.theone img')

img1.setAttribute('src','./images/paul-gilmore-unsplash.jpg' )
img1.setAttribute('alt', 'Image of a mountain in front of a lake.')

let x = document.querySelector('.theone')

x.append(document.createElement('h3'))

let header1 = document.querySelector('.theone h3')
header1.textContent = 'Stop Planning'

x.append(document.createElement('p'))

let par = document.querySelector('.theone p')
par.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

x.append(document.createElement('aside'))

let aside1 = document.querySelector('.theone aside')
aside1.prepend(document.createElement('p'))

let p1 = document.querySelector('.theone aside p')
p1.prepend(document.createElement('span'))

let span1 = document.querySelector('.theone aside p span')
//let strong2 = document.createElement("STRONG")

span1.innerHTML = `<strong>Read Time:</strong> 4 Minutes`

// span1.prepend(document.createElement('strong'))

// let strong1 = document.querySelector('.theone aside p span strong')
// strong1.textContent = `Read Time:`

// span1.textContent += ` 4 Minutes`

p1.append(document.createElement('a'))

let a1 = document.querySelector('.theone aside a')
a1.setAttribute('href', '#')
a1.textContent = `Read more...`


let firstart = document.querySelector('.posts')

let second1 = document.querySelectorAll('.posts article')

firstart.prepend(second1[1])


