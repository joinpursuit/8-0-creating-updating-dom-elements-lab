//adding class to a section
document.querySelector('section').setAttribute('class', 'featured');
//creating a new post using helper function
document.querySelector('.posts').append(postMaker());
// swapping the first and second post
const allPost = document.querySelectorAll('.posts article');
document.querySelector('.posts').prepend(allPost[1]);

//----------------------------------

// helper function for creating new post
function postMaker(
  imageURL = './images/paul-gilmore-unsplash.jpg',
  altText = 'Image of a mountain in front of a lake.',
  heading = 'Stop Planning',
  summary = `You -- yes you! You're an over-planner, I can tell. It's time to stop
  planning so much and instead focusing on relaxing. Taking a break at all
  is so stressful these days; why add to the stress by overworking yourself?`,
  readTimeInMin = '4 Minutes',
  readMoreURL = '#'
) {
  //our entire post
  const post = document.createElement('article');
  //create an img
  const img = document.createElement('img');
  //add the imageURL
  img.setAttribute('src', imageURL);
  //add the image altText
  img.setAttribute('alt', altText);
  //create the heading
  const title = document.createElement('h3');
  //add the heading content
  title.textContent = heading;
  //create the summary
  const para = document.createElement('p');
  // add the summary content
  para.textContent = summary;
  //create the readTime
  const time = document.createElement('strong');
  // add the time content
  time.textContent = 'Read Time: ';
  //create the readMoreURL
  const readMore = document.createElement('a');
  //add the URL content
  readMore.setAttribute('href', readMoreURL);
  readMore.textContent = 'Read more...';
  // compile our post
  post.append(img);
  post.append(title);
  post.append(para);
  post.append(document.createElement('aside'));
  post.querySelector('aside').append(document.createElement('p'));
  post.querySelector('aside p').append(document.createElement('span'));
  post.querySelector('aside p').append(readMore);
  post.querySelector('span').textContent = readTimeInMin;
  post.querySelector('span').prepend(time);
  return post;
}
