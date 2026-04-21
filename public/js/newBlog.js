const head = document.getElementsByTagName('title');
const newBlog = document.getElementById('new-blog');
const item2 = newBlog.querySelector('.item:nth-child(2)');
let newDivBlog = document.createElement('main');
const urlGetItem =
  "https://visits-christian-guardias-projects.vercel.app/lovingmypets/blog";

let article = 7;

article = getCookie("article");

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

    // console.log(result.rows[0]);
// rows[0]rows[0][0]rows[0]
    // result.forEach((rows) => {
      newPageContent(result.rows[0][1],result.rows[0][2],result.rows[0][3],result.rows[0][4],result.rows[0][0]);
    // })
    
}

function newPageContent(title, filename, paragraph,link,id) {
  let l = link.split('/');
    // console.log(l);
    if(l[0] != "https:") link = `https://${link}`;

  head[0].innerHTML = title;

  newDivBlog.innerHTML = `
      <section>
        <h1>${title}</h1>
        <figure>
          <img src='https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/lovingmypets/${filename}' alt='${title}'>
            <figcaption>
              <p><a href="${link}" title="${title}" target="_blank">${paragraph}</a></p>
            </figcaption>
        </figure>
      </section>   
  `;

  newBlog.insertBefore(newDivBlog, item2);
}

getItem();