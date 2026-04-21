const blog = document.getElementById('blog');
const item = blog.querySelector('.item:nth-child(2)');
let newDiv = document.createElement('div');
const urlAddArticle =
  "https://visits-christian-guardias-projects.vercel.app/lovingmypets/home";

async function getHome() {
  let result = await fetch(urlAddArticle, {
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

  result.forEach((rows) => {
    content(rows.title,rows.images,rows.paragraph,rows.link,rows.id);
  })
}

function content(title, filename, paragraph,link,id) {
  let l = link.split('/');
  // console.log(l);
  if(l[0] != "https:") link = `https://${link}`;
  // console.log(link);
  newDiv.innerHTML += `
        <article>
          <h2>${title}</h2>
          <figure>
            <img src='https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/lovingmypets/${filename}' alt='${title}'>
              <figcaption>
                <p><a href="new.html" title="${title}" target="_blank" value="${id}">${paragraph}</a></p>
              </figcaption>
          </figure>
        </article>   
  `;

  blog.insertBefore(newDiv, item);
}

getHome();

async function getItem(value) {
  let result = await fetch(`${urlAddArticle}/${value}`, {
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

    newPageContent(rows.title,rows.images,rows.paragraph,rows.link,rows.id);
}


newDiv.addEventListener('click', (e) => {
  if(e.target.tagName === "A") {
    getItem(e.target.value)
  }
})

const head = document.getElementsByTagName('title');
const newBlog = document.getElementById('new-blog');
const item2 = newBlog.querySelector('.item:nth-child(2)');
let newDivBlog = document.createElement('main');

function newPageContent(title, filename, paragraph,link,id) {
  let l = link.split('/');
    // console.log(l);
    if(l[0] != "https:") link = `https://${link}`;

  head.title.innerHTML = title;
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