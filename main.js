//find the first section element, and add the class featured to it
document.querySelector("section").classList.add("featured");

//create the article element
let newArticle = document.createElement("article")

newArticle.innerHTML = `<img
  src="./images/paul-gilmore-unsplash.jpg"
  alt="Image of a mountain in front of a lake."
/>
<h3>Stop Planning</h3>
<p>
  You -- yes you! You're an over-planner, I can tell. It's time to stop
  planning so much and instead focusing on relaxing. Taking a break at all
  is so stressful these days; why add to the stress by overworking yourself?
</p>
<aside>
  <p>
    <span><strong>Read Time:</strong> 4 Minutes</span
    ><a href="#">Read more...</a>
  </p>
</aside>`

//look for the section.posts element, and append the article
let posts = document.querySelector("section.posts")
posts.append(newArticle);


//get all the articles in a list
let articles = document.querySelectorAll("section.posts article");
//put the second article at the front of the posts
posts.prepend(articles[1]);







//original attempt at second problem, Way...too...long...

//create the image element
// let picture = document.createElement("img");
// //set the img src and alt
// picture.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
// picture.setAttribute("alt", "Image of a mountain in front of a lake.");
// //append the image to the article
// newArticle.append(picture);

// //create the header
// title = document.createElement("h3")
// //create text for the header
// title.textContent = "Stop Planning";
// //append it to the article
// newArticle.append(title);
    
// //create the paragraph element
// let paragraph = document.createElement("p")
// //put text in the paragraph
// paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
// //append it
// newArticle.append(paragraph)

// //create the aside element
// let aside = document.createElement("aside")
// aside.innerHTML = `<p><span><strong>Read Time:</strong> 4 Minutes</span><a href="#">Read more...</a></p>`
// newArticle.append(aside)