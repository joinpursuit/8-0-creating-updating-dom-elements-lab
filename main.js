//create and update elements using JS
//- [ x] Add a class of "featured" to the first `section` element on the page. 
//tried using document.createElement()

//The following code selects the section and adds a class to it named featured: 
document.querySelector("section").classList.add("featured")

//- [ ] Create the following `article` element with JavaScript and add at the end of the `section.posts` element.
//why exactly does this need to be a variable?
//The following code creates a new element (article) in the document and assigns it a variable named newArticle:
let newArticle = document.createElement("article")

/*
I tried putting all of the new information in newArticle.innerHTML but it didn't work although I am almost sure it worked last time I did this. However, Max W suggested I add everything individually. 

I will assign each new element to a variable. Alhough I am not sure why I am creating the element in the document instead of the article.

*/

const image = document.createElement("img")
const  header = document.createElement("h3")
const  paragraph = document.createElement("p")
const  aside = document.createElement("aside")
const  para2 = document.createElement("p")
const  span = document.createElement("span")
const  a = document.createElement("a")

//should I have set attributes at the same time? I am doing it now.

image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
image.setAttribute("alt","Image of a mountain in front of a lake.")
header.textContent = "Stop Planning"
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
span.textContent = "Read time: /n 4 minutes";
a.setAttribute("href", "#"); //what is #?
a.textContent = "Read more...";

//Append things where they should go
aside.append(para2);
para2.append(span, a) //why are there two variables here?
newArticle.append(image,header,paragraph,aside);






/*
newArticle.append

others:
  let newArt = document.querySelector('.posts')
  newArt.append(document.createElement('article'))
    let articles = document.querySelectorAll('section.posts article');
    let newArticle = articles[2];
  const article = document.createElement("article");
  article.innerHTML =
*/

//let newArticle = document.querySelector('.posts');


//newArticle.innerHTML = `
