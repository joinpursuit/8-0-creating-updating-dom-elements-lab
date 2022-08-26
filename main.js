var elem = document.querySelector("section");
            
            elem.classList.add("featured"); 


            // const article1 = document.createElement("article");
            // const sectionpost = document.querySelector("section.posts");
            
            // sectionpost.prepend(article1);

//             let maincore = document.createElement("article");


// const apple = document.querySelector("section.posts:nth-child(2)");
// apple.after(maincore)

// let abc = document.createElement("p")
// maincore.innerHTML=abc
// abc.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
// planning so much and instead focusing on relaxing. Taking a break at all
// is so stressful these days; why add to the stress by overworking yourself?`

// let elh3 = document.createElement("h3");
// maincore.innerHTML=elh3

// elh3.innerText = `Stop Planning`


// let imgin = document.createElement("img")

// imgin.setAttribute("src", "images/paul-gilmore-unsplash.jpg");
// imgin.setAttribute("alt","Image of a mountain in front of a lake." )

// //CREATE ASIDE WITH NESTED COMPOSition
// let aside = document.createElement("aside")
// aside.innerHTML = "p"

// let fgh = document.querySelector("aside p");

// fgh.innerHTML = "span" 

// let dfg = document.querySelector("aside p span")

// dfg.innerHTML = "strong" 

// let qwe = document.querySelector("aside p span")

// qwe.innerText = "Read Time:"

// let vbn = document.querySelector("aside span strong")
// vbn.after.innerText = " 4 Minutes"


// let ducp = document.createElement("a");
// let laught = document.querySelector("aside span")
// ducp.setAttribute("href",'"#"');


// maincore.textContent = imgin;
// imgin.after(elh3, abc, aside )




// // let first = document.querySelector("section .posts:nth-of-type(1)");

// // let second = document.querySelector("section .posts:nth-of-type(2)");
// // const allElements = document.getElementsByTagName('*');



// // Loop through all elements in body
// // const allInBody = document.querySelectorAll('section .posts article > *');
// // let arr = Array.prototype.slice.apply(allInBody)

// // const firstold = arr[0];
// // const secondold = arr[1];


// // // firstold = document.querySelector('section .posts article(1)')
// // const mainArticle = document.querySelector(' .posts article:nth-child(2)');

// // let seondart = document.querySelector('section .posts article');
// // const parenteleemnt = document.querySelector('.posts');

// // parenteleemnt.insertBefore(mainArticle, seondart)


//CREATING DOM ELEMENTS
let article = document.createElement("article")

let thefinal = document.querySelector("section.posts:nth-child(2)")
thefinal.append(article)//article placement
 let imag777 = document.createElement('img')


// article.textContent=img //nesting begins here
//IMG ATTRIBUTES
imag777.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
imag777.setAttribute("alt", "Image of a mountain in front of a lake.");
//more DOM element creation
let h3 = document.createElement('h3')
let atag = document.createElement('a')

let parg = document.createElement('p')

let aside = document.createElement('aside')
let asideparg = document.createElement('p')

aside.appendChild(asideparg);

let span = document.createElement('span')

let strong = document.createElement('strong')

// NESTING DOM ELEMENTS


//continue nestingaside eleemnts
// article.insertAdjacentHTML("afterbegin",img);
article.appendChild(imag777)
imag777.append(h3,parg,aside)//NEsted inside of article

// aside.innerHTML = asideparg; on line 104
asideparg.appendChild(span);
// span.appendChild(strong);
atag.innerText = "Read more"
atag.setAttribute("href",'#');
//------ content creation inside tags with innertext
h3.innerText = "Stop Planning"

parg.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all
is so stressful these days; why add to the stress by overworking yourself?`

let selectionimg = document.querySelector("section.posts article:nth-child(3) img");
selectionimg.after(h3)

let selectionh3 = document.querySelector("section.posts article:nth-child(3) h3");
selectionh3.after(parg)


// let selectionspan = document.querySelector("section.posts article:nth-child(3) aside p:nth-child(2) span");

parg.after(aside)
// strong.innerText = "Read Time:"

span.innerHTML= `<strong>Read Time:</strong> 4 Minutes`+ " ";


span.append(atag);


//Moving articles

let articone = document.querySelector("section.posts article:nth-child(1)");

let artisec = document.querySelector("section.posts article:nth-child(2)");

let parentnod = document.querySelector("section.posts")

parentnod.insertBefore(artisec,articone);