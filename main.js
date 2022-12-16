// creating/adding a class of "featured" to the first `section` element

const section1 = document.querySelector("section");
section1.classList.add("featured");

// creating/adding article element to end of section.posts element

const sectionPosts = document.querySelector("section.posts")
const sectionPostsArticle = document.createElement("article");
sectionPosts.append(sectionPostsArticle);

// creating/adding img element to article element

const postsArticleImg = document.createElement("img");
postsArticleImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
postsArticleImg.setAttribute("alt", "Image of a mountain in front of a lake.")
sectionPostsArticle.append(postsArticleImg);

// creating/adding h3 header element to article element

const postsHeader = document.createElement("h3");
postsHeader.textContent = "Stop Planning"
sectionPostsArticle.append(postsHeader);

// creating/adding p element with text to article element

const postsParagraph = document.createElement("p");
postsParagraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all s so stressful these days; why add to the stress by overworking yourself?"
sectionPostsArticle.append(postsParagraph);

// creating/adding aside element to article element

const postsAside = document.createElement("aside");

