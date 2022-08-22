// selects the first section and adds a class of 'featured'
const firstSection = document.querySelector(`section`);
firstSection.classList.add(`featured`);

// selects the first match of a section with the class of posts
const posts = document.querySelector(`section.posts`);

//creates article tag in posts (article.posts)
const PostsArticle = document.createElement(`article`);
posts.append(PostsArticle);

//creates img and sets img properties
const postsImg = document.createElement(`img`);
postsImg.setAttribute(`src`, `./images/paul-gilmore-unsplash.jpg`);
postsImg.setAttribute(`alt`, `Image of a mountain in front of a lake.`);
PostsArticle.append(postsImg);

// creates h3 heading in the article tag within posts and sets its text content (article.posts.h3)
const postsHeading = document.createElement(`h3`);
postsHeading.textContent = `Stop Planning`;
PostsArticle.append(postsHeading);

//creates p tag within PostsArticle (posts.postsArticle.postsArticleP)
const postsArticleP = document.createElement(`p`);
postsArticleP.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
      planning so much and instead focusing on relaxing. Taking a break at all
      is so stressful these days; why add to the stress by overworking yourself?`
PostsArticle.append(postsArticleP)

//creates aside tag within PostsArtcle (posts.postsArticle.postsArticleAside)
const postsArticleAside = document.createElement(`aside`);
PostsArticle.append(postsArticleAside)

//creates P tag within postsArticleAside (posts.postsArticle.postsArticleAside.postsArticleAsideP)
const postsArticleAsideP = document.createElement(`p`);
postsArticleAside.append(postsArticleAsideP);

//creates span tag in postsArticleAsideP and sets its text content (posts.postsArticle.postsArticleAside.postsAsideP.postsPAsideSpan)

const postsArticlePAsideSpan = document.createElement(`span`);
postsArticleAsideP.append(postsArticlePAsideSpan);
postsArticlePAsideSpan.textContent = ` 4 Minutes`;

//creates strong tag in postsPAsideSpan and sets text content -- has to be prepended for it to appear in the right order. Otherwise text content of span overwites bold property of strong (posts.postsArticle.postsArticleAside.postsAsideP.postsPAsideSpan.postsPAsideSpanStrong)
const postsPAsideSpanStrong = document.createElement(`strong`);
postsPAsideSpanStrong.textContent =`Read Time:`;
postsArticlePAsideSpan.prepend(postsPAsideSpanStrong);

// creates A tag in postsArticleP and sets the href and text (posts.postsArticle.postsArticleAside.postsAsideP.postsArticleAsidePA)
postsArticleAsidePA = document.createElement(`a`);
postsArticleAsidePA.setAttribute(`href`, `#`);
postsArticleAsidePA.textContent = `Read more...`;
postsArticleAsideP.append(postsArticleAsidePA);

//swaps the first and second articles in posts using before method and nodelist indexes
const allArticles = document.querySelectorAll(`article`);
allArticles[1].before(allArticles[2])











