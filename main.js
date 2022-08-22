// created section element
const section = document.querySelector("section")

// created class attribute of featured
section.setAttribute("class","featured")

// created sectionPost element to be able to access elements in section.posts
const sectionPost = document.querySelector("section.posts")

// created a article alement
const article1 = document.createElement("article")

// article element is the child of sectionPost
sectionPost.append(article1)

// created a image element
const images = document.createElement("img")

//  image element which  is a child of article1
article1.append(images)

// created src attribute and picture
images.setAttribute("src","./images/paul-gilmore-unsplash.jpg")

// created alt attribute that discribed the src picture
images.setAttribute("alt","Image of a mountain in front of a lake.")

// created h3 element
const H3 = document.createElement("h3")

// wrote a text in the h3 tag
H3.textContent = "Stop Planning"

// image element comes after h3 tag
images.after(H3)

// created a p1 element
const p1 = document.createElement("p")

// added a text to paragraph tag
p1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

// h3 comes .before() paragraph 
H3.before(p1)

// created aside element  
const asides = document.createElement("aside")

// paragraph one is the parent of asides
p1.append(asides)

// created p2 element
const p2 = document.createElement("p")

// asides child of paragraph 
asides.append(p2)

// created spans element
const spans = document.createElement("span")

// paragraph 2 is parent to span
p2.append(spans)

// added a text to span tag
spans.textContent = "4 Minutes"

// created a strong element and 
const strong = document.createElement("strong")

// paragraph 2 is parent of span
p2.append(strong)

// added a text to strong
strong.textContent = "Read Time:"

// created a anchor for tag anchor and appended it to second paragraph 
const anchor = document.createElement("a")

// paragraph 2 parent of anchor
p2.append(anchor)

// added a text to anchor tag
anchor.textContent = "Read more..."

// setup attributes href # for the anchor
anchor.setAttribute("href", "#")

// created articles element with selector
// Took article of index 1 and put it behind article index 0 using after
const articles = document.querySelectorAll("section.posts article")
articles[1].after(articles[0])
