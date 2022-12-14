
// Add a class of 'featured' to the first 'section' element on the page
const section = document.querySelector('section');
section.classList.add('featured');

// Create 'article' element and add to the 'section.posts' element
const article = document.createElement('article');

const postsSection = document.querySelector('section.posts');
postsSection.append(article);

// Create child elements of 'article'
const img = document.createElement('img');
const h3 = document.createElement('h3');
const pElementWithinArticle = document.createElement('p');
const aside = document.createElement('aside');

// Add text inside of child elements of 'article'
h3.innerText = 'Stop Planning';
pElementWithinArticle.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing.Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

// Add attributes for 'img' element
img.setAttribute('src', "./images/paul-gilmore-unsplash.jpg");
img.setAttribute('alt', "Image of a mountain in front of a lake.");

// Add child elements to 'article' element
article.append(img);
article.append(h3);
article.append(pElementWithinArticle);
article.append(aside);

// Create and add 'p' element to 'aside' element
const pElementWithinAside = document.createElement('p');
aside.append(pElementWithinAside);

// Create elements that go inside of 'pElementWithinAside' element
const span = document.createElement('span');
const strong = document.createElement('strong');
const aTag = document.createElement('a');

// Add created elements to 'pElementWithinAside'
pElementWithinAside.append(strong);
strong.after(span);
span.after(aTag);

// Add text inside of 'strong' element and 'a' element
span.innerText = '4 Minutes';
strong.innerText = 'Read Time: ';
aTag.innerText = 'Read more...';

// Set attribute for 'aTag' element
aTag.setAttribute('href', '#');

// Grab article elements within 'section.posts' with querySelectorAll to create an array of article elements
const articleElementsArray = document.querySelectorAll('section.posts article');

// Take second element in the section elements array and prepend it to the postsSection
postsSection.prepend(articleElementsArray[1]);


