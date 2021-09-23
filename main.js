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

const postSection = document.querySelector(".posts");
postSection.append(newArticle);
