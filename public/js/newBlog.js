const head = document.getElementsByTagName('title');
const newBlog = document.getElementById('new-blog');
const item2 = newBlog.querySelector('.item:nth-child(2)');
let newDivBlog = document.createElement('main');
const urlGetItem =
  "https://visits-christian-guardias-projects.vercel.app/lovingmypets/blog";

// let article = 1;

let article = getCookie("article");

if(!article) article = 7;

async function getItem() {
  let paragraphs = [];
  let result = await fetch(`${urlGetItem}/${article}`, {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Methods": "GET,HEAD,POST,OPTIONS",
      // },
    })
    .then((resp) => resp.json())
    .catch((error) => {
          console.error("Error:", error.message);
          blog.style.color = "#990000";
          blog.innerText = error.message;
        });

    console.log(result);

    let paragraph = JSON.parse(result.rows[0][4]);

    let para = result.rows[0][3];
    console.log(para);

    if(para === null) para = [];


    if(paragraph === null) paragraph = [];
    
    let string = para.split(/\n\n/);
    console.log(string);


    for (let p of string) {
      console.log(p);
      paragraphs.push(`<p>${p}</p>`);
      if (p.includes("https://")) {
        let links = p.split(" ");
        // console.log(links);
        for (link of links) {
          // console.log(link);
          if (link.includes("https")) {
            paragraphs.push(`<a href="${link}">${link}</a>`);
          }
        }
      }
    }
    // paragraph.forEach((element) => {
      // console.log(element);
    //   if (element.includes("<p>")) paragraphs.push(`</ul>${element}<ul>`);
    //   if (element.includes("</li>")) paragraphs.push(element);
    // });


    console.log(paragraphs);
    let showContent = paragraphs.join("");


      newPageContent(result.rows[0][1], result.rows[0][2],  showContent, paragraph, result.rows[0][5], result.rows[0][0], result.rows[0][7], result.rows[0][8]);
    
}

function newPageContent(title, filename, paragraph,paragraphs,link,id,date,update) {
  let l = link.split('/');
    // console.log(l);
    if(l[0] != "https:") link = `https://${link}`;

  head[0].innerHTML = title;

  newDivBlog.innerHTML = `
      <section>
        <h2>${title}</h2>
        <figure>
          <img src='https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/lovingmypets/${filename}' alt='${title}'>

            <figcaption>
              <div>${paragraph}</div>
            </figcaption>
        </figure>
        <span>${date}</span>
      </section>  
  `;

  newBlog.insertBefore(newDivBlog, item2);
}

getItem();