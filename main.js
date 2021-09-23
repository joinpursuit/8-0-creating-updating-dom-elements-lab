const section1 = document.querySelector("section");
section1.classList.add("featured");

//--------Helper Function------

const newElementWithText = (tag, text) => {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
};

const newArticle = document.createElement("article");

const img = document.createElement("img");
img.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(img);

const heading = newElementWithText("h3", "Stop Planning");
newArticle.append(heading);

const paragraph = newElementWithText(
  "p",
  "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
);
newArticle.append(paragraph);

const aside = document.createElement("aside");
newArticle.append(aside);

const postSection = document.querySelector(".posts");
postSection.append(newArticle);
