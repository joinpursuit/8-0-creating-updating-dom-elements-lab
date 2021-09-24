//added code in html to link javascript file
//adding a class attribute to section element using classList.add
const section = document.querySelector('section');
section.classList.add('featured');
// Created article tag and added at end of the section.posts element.
const article = document.createElement('article');
document.querySelector('section.posts').append(article);
//Created img tag and set attributes on img tag
const image = document.createElement('img');
image.setAttribute('src',"./images/paul-gilmore-unsplash.jpg");
image.setAttribute('alt', "Image of a mountain in front of a lake.");
//Added img as first child to article tag 
article.append(image);
//Created h3 tag, added text to h3 tag, and added h3 tag as second child of article tag
const head = document.createElement('h3');
head.textContent = 'Stop Planning'
article.append(head);
//Created a paragraph tag, added text to paragraph, then added paragraph as third child to end of article tag
const paragraph = document.createElement('p');
paragraph.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`
article.append(paragraph);
//Created an aside tag and added it as fourth child to end of article tag
const aside = document.createElement('aside')
article.append(aside);
//Created a second paragraph tag and added it as a child of aside tag
const paragraph2 = document.createElement('p');
aside.append(paragraph2);
//Created span tag, added text to span, then added span as a child to second paragraph tag
const span = document.createElement('span');
span.textContent = '4 Minutes';
paragraph2.append(span);
//Created strong tag, added text to strong, then added strong as sibling of span tag
const strong = document.createElement('strong');
strong.textContent = 'Read Time: ';
span.before(strong);
//Set attribute to span tag to change font size
span.setAttribute('font-size', '14px');
//Created link tag, added an attribute to the link, added text to link, then added link as second child to second paragraph
const link = document.createElement('a');
link.setAttribute('href', '#');
link.textContent = 'Read more...';
paragraph2.append(link);
//Created variable to hold Class attribute class="posts" in the article tag, then added the second article before the first article 
const articleSwap = document.querySelector('section.posts article');
article.before(articleSwap);













