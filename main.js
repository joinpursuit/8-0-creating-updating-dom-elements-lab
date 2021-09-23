const section1 = document.querySelector('section');
//targeted the first section with queryselector

section1.classList.add('featured');
//made a featured class for section 1

/*helper function*/
const newElementWithText = (tag, text) =>{
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

const newArticle = document.createElement('article');
//created new div//

const postSection = document.querySelector('.posts');
postSection.append(newArticle);
//put div inside of posts//


const image = document.createElement('img'); //created <img>
image.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
//<img src='link'>

image.setAttribute('alt', "Image of a mountain in front of a lake.");
//alt text =''//
newArticle.append(image);

const heading = newElementWithText('h3', 'Stop Planning');
//created h3 with text using helper function//
newArticle.append(heading);

const paragraph = newElementWithText('p', "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?");
newArticle.append(paragraph); //added <p> text

const aside = document.createElement('aside');
newArticle.append(aside);

const p = document.createElement('p');
aside.append(p);

const span = newElementWithText('span', '4 Minutes');
p.append(span);

const strong = newElementWithText('strong', 'Read Time:');
span.prepend(strong)

const a = newElementWithText('a', 'Read more...');
a.setAttribute('href', '#'); //set href='#'
p.append(a);

const articles = document.querySelectorAll('.posts article');
//grabs all of the articles inside of .posts

articles[0].before(articles[1])
//element inside of before() is getting its position changed.//
console.log(articles);