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

  if(result.ok) {
    result.forEach((rows) => {
        content(rows.title,rows.images,rows.paragraph,rows.link);
    })
  }

  // result.forEach((rows) => {

  //   newDiv.innerHTML += `
  //           <article>
  //             <h3>${rows.title}</h3>
  //             <figure>
  //               <img src"${rows.images}">
  //             </figure>
  //           </article>
  //         `;
  // });
}

function content(title, filename, paragraph,link) {
    
  newDiv.innerHTML += `
        <article>
          <h2>${title}</h2>
          <figure>
            <img src='https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/lovingmypets/${filename}' alt='${title}' width='200' height='250'>
            <a href="${link}" title="${title}" target="_blank">
              <figcaption>
                <p>${paragraph}</p>
              </figcaption>
            </a>
          </figure>
        </article>   
  `;

  blog.insertBefore(newDiv, blog);
}