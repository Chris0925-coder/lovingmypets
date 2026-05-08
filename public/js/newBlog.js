const head = document.getElementsByTagName("title");
const newBlog = document.getElementById("new-blog");
const item2 = newBlog.querySelector(".item:nth-child(2)");
let newDivBlog = document.createElement("main");

// const figu = document.getElementsByTagName("figcaption");
// console.log(figu);
const item3 = newBlog.querySelector(".item:nth-child(3)");
let newUl = document.createElement("ul");
const urlGetItem = "https://visits-christian-guardias-projects.vercel.app/lovingmypets/blog";

let article = getCookie("article");

if(!article) article = 22;

// console.log(article);
let paragraphs = [];

async function getItem() {
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
  // let para = JSON.parse(result[0].paragraphs);
  // console.log(JSON.parse(result[0].paragraphs));
  // console.log(result);

  let titles = JSON.parse(result.rows[0][1]);

  // console.log(titles);
  let paragraph = JSON.parse(result.rows[0][3]);
  // console.log(paragraph);

  let images = JSON.parse(result.rows[0][2]);

  let createDate = result.rows[0][7];

  let update = result.rows[0][8];

  let aLink = result.rows[0][5];
  // console.log(paragraph);
  // let innerPARA = JSON.parse(paragraph);

  // console.log(innerPARA);

  // let lllA = [];
  // •
  // paragraph.forEach((l) => {
  // console.log(typeof titles);
  // let tt = paragraphs.push(titles);
  // let llA = paragraph.split("<p>");
  // for (let i in paragraph) {

  // }
  // console.log(paragraphs);

  if (typeof titles != "object") {
    let string = paragraph.split(/\r\n\r\n/);
    // console.log(string);
    // for (let p of string) {
    // console.log(p);
    for (let p of string) {
      // paragraphs.push(`<p>${p}</p><br>`);
      paragraphs.push(`<p>${p}</p>`);
      // if (p.includes("\s")) paragraphs.push(`<br>`);
      // if (p.includes("\s")) paragraphs.push(`<br>`);
      // console.log(paragraphs);
      // paragraphs.push(p);
      if (p.includes("https://")) {
        paragraphs.pop(p);
        let links = p.split(" ");
        // console.log(links);
        for (link of links) {
          // console.log(link);
          if (link.includes("https")) {
            paragraphs.push(`<a href="${link}">${link}</a><br>`);
          } else {
            paragraphs.push(link + " ");
          }
        }
      }
    }
    newDivBlog.innerHTML += `
                            <article>
                              <h3>${titles}</h3>
                              <div>
                              <picture>
                                <img src='https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/lovingmypets/${images}' alt='${titles}'>
                              </picture>
                              </div>
                              <p>${paragraphs.join("")}</p>
                            </article>
                          `;

  } else {
    titles.map((element, index) => {

      list = {
        t: element,
      };
      let s = [];
      let string = paragraph[index].split(/\r\n\r\n/);      
      for (let p of string) {        
        s.push(`<p>${p}</p>`);

        if (p.includes("https://")) {
          s.pop(p);
          let links = p.split(" ");
          // console.log(links);
          for (link of links) {
            // console.log(link);
            if (link.includes("https")) {
              s.push(`<a href="${link}">${link}</a><br>`);
            } else {
              s.push(link + " ");
            }
          }
        }
      }
      // console.log(s);
      //   newDivBlog.innerHTML += `
      //                         <article>
      //                           <h3>${element}</h3>
      //                           <div>
      //                             <picture>
      //                               <img src='/img-storage/${images[index]}' alt='${element}'>
      //                             </picture>
      //                           </div>
      //                           <p>${s.join("")}</p>
      //                         </article>
      //                       `;
      if (!result.error) {
        newPageContent(element, images, index, s, aLink, date, update);
      }
    });
  }
  // newBlog.insertBefore(newDivBlog, item2);
}

function newPageContent(
  title,
  filename,
  index,
  paragraphs,
  link,
  date,
  update,
) {
  // console.log(link);
  // if (link.length > 0) l = link.split("/");
  // console.log(l);
  // if (l[0] != "https:") link = `https://${link}`;
  if (update) date = update;

  head[0].innerHTML = title;
  // /img-storage
  newDivBlog.innerHTML += `
                  <article>
                    <h3>${title}</h3>
                    <div>
                      <picture>
                        <img src='https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/lovingmypets/${filename[index]}' alt='${title}'>
                      </picture>
                    </div>
                    <p>${paragraphs.join("")}</p>
                    <span>${date}</span>
                  </article>
  `;

  newBlog.insertBefore(newDivBlog, item2);
}

getItem();
