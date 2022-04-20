// crete a variable for the section tag
const section = document.querySelector('section');
// add a class of featured to the section 
section.classList.add('featured');


// CREATE YOUR ARTICLE VARIABLES FOR THE TAGS
// create a variable for the article tag
const article = document.createElement('article')
// create a variable for the img tag
const img = document.createElement('img');
// create a variable for the header h3 tag
const h3 = document.createElement('h3');
// create a variable for paragraph1 tag
const p = document.createElement('p');
// create a variable for the aside tag
const aside = document.createElement('aside')
// create a variable for paragraph2 tag
const p2 = document.createElement('p')
// create a variable for the strong tag
const strong = document.createElement('strong')
// create a variable for the span tag
const span = document.createElement('span')
// create a variable for the link tag
const link = document.createElement('a')

// set attribute of src for the img
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
// set attribute of alt for the img
img.setAttribute('alt', 'Image of a mountain in front of a lake.');

// add text string to the header
h3.textContent = 'Stop Planning'
// add text string to paragraph 1
p.textContent = `   You -- yes you! You're an over-planner, I can tell. It's time to stop
      planning so much and instead focusing on relaxing. Taking a break at all
      is so stressful these days; why add to the stress by overworking yourself?`;
// add text string in bold
strong.textContent = `Read Time:`
// add text string to span tag
span.textContent = `4 Minutes`
// set attribute of href and # to link tag
link.setAttribute('href','#')
// add text string to the link tag
link.textContent = `Read more...`

// add img to the article
article.append(img)
// add header to the article
article.append(h3)
// add paragraph 1 to the article
article.append(p)
// add aside to the beginning of the article
article.prepend(aside)
// add paragraph 2 to the beginning of the aside
aside.prepend(p2)
// add bold to paragraph 2
p2.append(strong)
strong.prepend(span)
// add bold to the beginning of the span
span.append(link)
// add the link to the span

// create a variable for the class section post 
const post = document.querySelector('section.posts')
// add article to the post section 
post.append(article)

// create a variable to access all the articles in the class section post
const articles = document.querySelectorAll('section.posts article')
// put the first article after the second article 
articles[1].after(articles[0])