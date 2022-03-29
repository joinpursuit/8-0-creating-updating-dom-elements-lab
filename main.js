const section = document.querySelector("section");
section.setAttribute("class", "featured");

const article = document.createElement("article");

const sectionPost = document.querySelector("section.posts");
sectionPost.append(article);

//img tag stuff
const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(img)

//h3
const h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);

//p
const para = document.createElement("p");
para.textContent =
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(para)

//aside
const aside = document.createElement("aside");
article.append(aside)
    //inside aside
    const paraAside = document.createElement("p");
    aside.append(paraAside)
        //inside paraAside
        //span 
        const span = document.createElement("span");
        span.textContent = " 4 Minutes"
        const strong = document.createElement("strong")
        strong.textContent = "Read Time:"
        span.prepend(strong)
        
        paraAside.append(span)
        
        //a tag
        const link = document.createElement("a");
        link.setAttribute("href", "#");
        link.textContent = "Read more ..."
        paraAside.append(link)

    //swapping article positions
   

    const articlesList = document.querySelectorAll("section.posts article");
    console.log(articlesList);

    articlesList[1].after(articlesList[0])
    
    // //swaping element position inside of the array
    // // [articlesList[0], articlesList[1]] = [articlesList[1], articlesList[0]]
    //these methods dont work on nodelist
    // // const temp = articlesList[1];
    // // articlesList[1] = articlesList[0]
    // // articlesList[0] = temp
    //dont work on nodelist

    // articlesList[1].before(articlesList[0])
    //^^also works