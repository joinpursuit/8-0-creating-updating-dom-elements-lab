const section= document.querySelector("section");
section.classList.add("featured");

let article= document.createElement("article");
document.querySelector("section.posts").append(article);

let img= document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
img.setAttribute("alt", "Image of a mountain in front of a lake.")
article.append(img);

let h3= document.createElement("h3");
h3.textContent= "Stop Planning";
article.append(h3);

let p= document.createElement("p");
p.textContent= "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(p);

let aside= document.createElement("aside");
article.append(aside);

let p2= document.createElement("p");
aside.append(p2);

let span= document.createElement("span");
span.textContent= " 4 Minutes";
p2.append(span);

let strong= document.createElement('strong');
strong.textContent= "Read Time:";
span.prepend(strong);

let a= document.createElement("a");
a.textContent= "Read more";
a.setAttribute("href", "#");
span.after(a);

let articles= document.querySelectorAll("section.posts article");
articles[1].after(articles[0]);











// const section = document.querySelector("section").setAttribute("class", "featured");

// let article= document.createElement("article");
// document.querySelector("section.posts").append(article);

// let img= document.createElement("img");
// img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
// img.setAttribute("alt", "Image of a mountain in front of a lake.");
// article.append(img);

// let h3= document.createElement("h3");
// h3.textContext = "Stop Planning";
// article.append(h3);

// let p = document.createElement("p");
// p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
// article.append(p);

// let aside= document.createElement("aside");
// article.append(aside);

// let asideP= document.createElement("p");
// aside.append(asideP);

// let span= document.createElement("span");
// span.textContext= " 4 Minutes";
// asideP.append(span);

// let strong= document.createElement("strong");
// strong.textContent= "Read Time:";
// span.prepend(strong);

// let a= document.createElement("a");
// a.textContext= "Read More...";
// a.setAttribute("href", "#");
// span.after(a);


// let articles= document.querySelectorAll("section.posts article");;
// articles[1].after(articles[0]) 

// const section = document.querySelector("section").setAttribute("class", "featured");

// let article = document.createElement("article");
// document.querySelector("section.posts").append(article);


// let img = document.createElement("img");
// img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
// img.setAttribute("alt", "Image of a mountain in front of a lake.");
// article.append(img);

// let h3 = document.createElement("h3");
// h3.textContent = "Stop Planning";
// article.append(h3);

// let p = document.createElement("p");
// p.textContent =
//   "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
// article.append(p);

// let aside = document.createElement("aside");
// article.append(aside);

// let paragraph = document.createElement("p");
// aside.append(paragraph);

// let span = document.createElement("span");
// span.textContent = " 4 Minutes";
// paragraph.append(span);

// let strong = document.createElement("strong");
// strong.textContent = "Read Time:";
// span.prepend(strong);

// let a = document.createElement("a");
// a.textContent = "Read more";
// a.setAttribute("href", "#");
// span.after(a);

// let articles = document.querySelectorAll("section.posts article");
// articles[1].after(articles[0]) 