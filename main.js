let section = document.querySelector('section');
section.classList.add('featured');

let appendedArticle = document.createElement('article');
document.querySelector('section.posts').append(appendedArticle);

let vacImg = document.createElement('img');
vacImg.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
vacImg.setAttribute('alt', 'Image of a mountain in front of a lake.');
appendedArticle.append(vacImg);

let thirdHeader = document.createElement('h3');
thirdHeader.textContent = 'Stop Planning';
appendedArticle.append(thirdHeader);

let textBlurb = document.createElement('p');
textBlurb.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stopplanning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
appendedArticle.append(textBlurb);

let aside = document.createElement('aside');
appendedArticle.append(aside);

let estimatedTimeText = document.createElement('p');
aside.append(estimatedTimeText);

let span = document.createElement('span');
span.textContent = '4 Minutes';
estimatedTimeText.append(span);

let boldReadTime = document.createElement('strong');
boldReadTime.textContent = 'Read Time:';
span.prepend(boldReadTime);

let readMoreLink = document.createElement('a');
readMoreLink.textContent = 'Read more...';
readMoreLink.setAttribute('href', '#');
span.after(readMoreLink);

let postSwaps = document.querySelectorAll('section.posts article');
postSwaps[0].before(postSwaps[1]);
