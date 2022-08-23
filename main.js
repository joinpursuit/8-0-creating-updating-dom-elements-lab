
document.querySelector('section').classList.add("featured");

let article = document.createElement("article");


article.append(ce({
  "tagname_":"img",
  src:"./images/paul-gilmore-unsplash.jpg",
  alt:"Image of a mountain in front of a lake.",
}));
article.append(ce({
  "tagname_":"h3",
  text_:"Stop Planning",
}));
article.append(ce({
  "tagname_":"p",
  text_:`You -- yes you! You're an over-planner, I can tell. It's time to stop
  planning so much and instead focusing on relaxing. Taking a break at all
  is so stressful these days; why add to the stress by overworking yourself?`,
}));
article.append(ce({
  tagname_:"aside",
  ch_:[{
    tagname_:"p",
    ch_:[
      {
        tagname_:"span",
        text_:" 4 Minutes",
        ch_:[{
          tagname_:"strong",
          text_:"Read Time:",
        }]
      },
      {
        tagname_:"a",
        href:"#",
        text_:"Read more...",
      }
    ]
  }]
}));

document.querySelector('section.posts').append(article);

//--------------------------------------
let first = document.querySelector('section.posts article');
first.nextElementSibling.after(first);

function ce(json)
{
  
  let el = document.createElement(json['tagname_']||"div");
  for(let x in json){
    switch(x){
      case "tagname_":
      break;
      case "text_":
        el.innerText = json[x];
      break;
      case "ch_":
        for(let y of json[x])
        {
          el.append(ce(y));

        }
      break;
      default:
        el.setAttribute(x,json[x]);
    }
  }
  return el;
}
