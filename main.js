// when we start we first link our main.js to our html on line 9 of html file

// first test

const selection = document.querySelector('section')
selection.setAttribute('class', 'featured')

// second test


const article = document.createElement('article') // creating an element in memory called article
const postSection = document.querySelector('section.posts') // we selected a class by using a period before the classname
postSection.append(article) // adding our newly created element into the section with the class of post

// creating the first element image
const image = document.createElement('img')
image.setAttribute('src', "./images/paul-gilmore-unsplash.jpg")
image.setAttribute('alt', 'Image of a mountain in front of a lake.')
article.append(image)

// creating the second element heading
const heading3 = document.createElement('h3')
heading3.textContent = 'Stop Planning'
image.after(heading3)

// creating the third element paragraph
const para1 = document.createElement('p')
para1.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`
heading3.after(para1) // assigning the argument after heading 3

// creating our aside tag
const aside = document.createElement('aside');

para1.after(aside);

const p = document.createElement('p');
const span = document.createElement(`span`)
p.prepend(span)
const bold = document.createElement(`strong`)
bold.textContent = `Read Time: `
span.textContent += `4 Minutes`
span.prepend(bold)
const anchor = document.createElement('a');
anchor.setAttribute('href', '#');
anchor.textContent = 'Read more...';
p.append(anchor);
aside.append(p);




// third test

const swap = document.querySelectorAll('section.posts article');
 swap[0].before(swap[1]);

// one test fail, strong test not passed


