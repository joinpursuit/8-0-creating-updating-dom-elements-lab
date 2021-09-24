let section = document.querySelector("section");// declaring a variable (point of reference) for the first section (child) element of main / there are 2 section elements (children) total of main
section.classList.add("featured");// adding a class of featured to first section element

let posts = document.querySelector("section.posts");// setting a variable (point of reference) for the 2nd section (class of .posts) / child element  of main
let article = document.createElement("article");// creating an article element
posts.append(article);//appending new article element to the end of the 2nd section element, grabbed by class of .posts above. This is now the 3rd & last article(child) of section

let image = document.createElement("img");// setting a variable for image element
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");// setting attributes to img element
image.setAttribute("alt","Image of a mountain in front of a lake.");
article.append(image);// appending image to article element.  img is now child of third article element in section.posts 

let h3 = document.createElement("h3");// creating h3 element 
h3.textContent = "Stop Planning";// setting text for new h3 elememt 
article.append(h3); // appending h3 to article,  h3 is child of article, sibling of img element

let paragraph = document.createElement("p");// p element created
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
article.append(paragraph);// p element now child of article, sibling of img & h3

let aside = document.createElement("aside");// aside elememt created 
article.append(aside);// aside set as child of article, sibling of h3, p, & img elements

let newP = document.createElement("p")// another p element created
aside.append(newP);// p element set as child of aside 

let span = document.createElement("span");//creating span elment 
newP.append(span);// placing span as child of aside 
span.textContent = " 4 Minutes"// setting text for span element

let strong = document.createElement("strong");// creating strong element
strong.textContent = "Read Time"// 
span.prepend(strong);// setting strong element, as a child of span, placing its textContent before span's textContent

let link = document.createElement("a");//anchor element created
link.textContent = "Read more";// setting text for anchor
link.setAttribute("href", "#");// setting attribute for anchor element
newP.append(link);// anchor tag is now child of p element(child of aside), sibling of span element

let articles = document.querySelectorAll("section.posts article");// grabbing all articles with class of .posts 
console.log(articles[1]);// logging the second article as confirmation, with intention of swapping with first article[0] element 
posts.prepend(articles[1]);// swapping the place of the second article(2nd child of section with class of .posts) with the first article (child of section.posts) element


