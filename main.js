const section = document.querySelector('section');
// create a variable 
section.classList.add('featured');

const secPost = document.querySelector('.posts');

//------------------------------------------------------------------------/
    const article = document.createElement('article');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const aside = document.createElement('aside');
    const p1 = document.createElement('p');
    const span = document.createElement('span');
    const a = document.createElement('a');
    const strong = document.createElement('strong');
    
   
    img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
    img.setAttribute('alt', "Image of a mountain in front of a lake.");
    h3.textContent = "Stop Planning";
    p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

    
    strong.textContent = "Read Time:";
    a.setAttribute("href", "#");
    a.textContent = "Read more...";
    secPost.append(article);
    article.append(img, h3, p, aside);
    aside.append(p1);
    p1.append(span, a);
    span.append(strong," 4 Minutes");

    const articles = document.querySelectorAll('section.posts article');// creates a node list
    articles[1].after(articles[0])