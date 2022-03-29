let firstSection = document.querySelector('section');
firstSection.setAttribute('class', 'featured');

let article = document.createElement('article');
document.querySelector('section.posts').append(article);

let img = document.createElement('img');
img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');

let h3 = document.createElement('h3');
h3.textContent = 'Stop Planning';

let p1 = document.createElement('p');
p1.textContent =
  `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;

  let aside = document.createElement('aside');
  article.append(img, h3, p1, aside);
  
  let p2 = document.createElement('p');
  aside.append(p2);
  
  let span = document.createElement('span');
  p2.append(span);
  span.textContent = '4 Minutes';
  
  let strong = document.createElement('strong');
  span.prepend(strong);
  strong.textContent = 'Read Time:';
  
  let a = document.createElement('a');
  span.after(a);
  a.textContent = 'Read more...';
  a.setAttribute('href', '#');
  
  let switchArticlePosition = document.querySelectorAll('section.posts article');
  switchArticlePosition[1].after(switchArticlePosition[0]);