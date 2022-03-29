const firstSection = document.getElementById("section");
//firstSection.classList.toggle("featured");

const newArticle = document.createElement("article");

const newImg = document.createElement("img");
newImg.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
newImg.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(newImg);

const newH3 = document.createElement("h3");
newH3.textContent = "Stop Planning";
newArticle.append(newH3);

const newParagraph = document.createElement("p");
newParagraph.textContent = `    You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all
    is so stressful these days; why add to the stress by overworking yourself?`;

newArticle.append(newParagraph);

//create aside
const aside = document.createElement("aside");
//create p
const p = document.createElement("p");
//create span
const span = document.createElement("span");
span.textContent = " 4 Minutes";
//crreate strong, populate strong
const strong = document.createElement("strong");
strong.textContent = "Read Time:";
span.append(strong);
//create a, populate a with text, add attribute href
const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "Read more...";
p.append(span);
p.append(a);
//attach everything inside aside
aside.append(p);
//attach aside to article
newArticle.append(aside);
//attach article to end of section.posts
const sections = document.querySelectorAll("section");
for (let section of sections) {
	if (section.classList.contains("posts")) {
		//swap 1 and 2
		let temp;
		let article1 = section.querySelector("article");
		temp = article1.innerHTML;
		article1.remove(); //delete 1, #2 is now in front
		section.append(temp); //re-add #1 to position 2
		section.append(newArticle); // add new article to the end
	}
}
