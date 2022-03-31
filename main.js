
// crete a variable to hold the value of the element section 
var section = document.querySelector("section");
// add class of featured to that element
section.classList.add("featured");

// Create the following `article` elements tag by tag in order
var article = document.createElement("article")
var img = document.createElement("img")
var header3 = document.createElement("h3")
var para1 = document.createElement("p")
var aside = document.createElement("aside")
var para2 = document.createElement("p")
var span = document.createElement("span")
var strong = document.createElement("strong")
var link = document.createElement("a")

// create a variable to hold the class element post
const secondSection = document.querySelector(".posts")
// add secondSection variable to the article 
secondSection.append(article);

// add image extensions of "src" and "alt" to the img tag
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt","Image of a mountain in front of a lake.");


// create a variable to hold the words of header3
const header3TextNode=document.createTextNode("Stop Planning") 
// add those words as a child to header3 tag
header3.appendChild(header3TextNode)

// create a variable to hold the words of para1
const para1TextNode=document.createTextNode( "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?")
// add those words as a child to para1 tag
para1.appendChild(para1TextNode)

// add extensions "href" and "#" to the tag link 
link.setAttribute("href", "#")
// create a variable to hold the words of the link 
const linkTextNode = document.createTextNode("Read more...") 
// add those words as child to link tag
link.appendChild(linkTextNode)

// create a variable to hold the words of the tag strong 
const strongTextNode=document.createTextNode("Read Time:") 
// add the words as a child to the strong tag
strong.appendChild(strongTextNode)

// add strong to the span tag as a child 
span.appendChild(strong)
// create a variable to hold the words of the tag span
const spanTextNode=document.createTextNode("4 Minutes")
// add words as a child to the span tag
span.appendChild(spanTextNode)

// add span to the para2 tag as a child 
para2.appendChild(span)
// add link to the para2 tag as a child 
para2.appendChild(link)
// add para2 as a child to the aside tag
aside.appendChild(para2)
// add img to the article as a child
article.appendChild(img)
// add header3 to the article as a child
article.appendChild(header3)
// add para1 to the article as a child 
article.appendChild(para1)
// add aside to the article as a child 
article.appendChild(aside)
// add the artcile to the secondSection of the class post as a child 
secondSection.appendChild(article)


// add the seconSection to the article
article.append(secondSection)

// creates a variable that contains all the childNodes in a class
var allSec =document.querySelectorAll(".posts")
// create a variable to hold all the nodes from the class post
var childNodes = allSec.children
// create a variable to equal nodelist element 0
var firstArticle = childNodes[0]
// create a variable to equal nodelist element 1
var secondArticle = childNodes[1]
// create a variable to equal nodelist element 
var thirdArticle = childNodes[2]

// DELETE ALL THE NODES FROM THE LIST 
allSec.removeChild(firstArticle)
allSec.removeChild(secondArticle)
allSec.removeChild(thirdArticle)

// ADD THEM BACK IN THE REQUESTED ORDER 
allSec.appendChild(secondArticle)
allSec.appendChild(firstArticle)
allSec.appendChild(thirdArticle)