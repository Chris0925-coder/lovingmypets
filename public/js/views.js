const urlA = `https://visits-christian-guardias-projects.vercel.app/count`;
const main = document.querySelector("body");
const dominio = window.location.origin;
const opciones = {
    timeZone: "America/Panama",
    weekday: "short",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true
  };

let timeFormat = new Intl.DateTimeFormat("es-PA", opciones).format(today);

function cli() {
    main.addEventListener('click', function (event) {
        if(event.target.tagName === "A") {
            let analyticsData = {
                id: 2,
                count: 0,
                domain: dominio,
                date: `última vista: ${timeFormat}`,
                clicks: 1,
            };
            navigator.sendBeacon(urlA, JSON.stringify(analyticsData));
        }
    })
}

cli();

function count() {
    let analyticsData = {
        id: 2,
        count: 1,
        domain: dominio,
        date: `última vista: ${timeFormat}`,
        clicks: 0,
    };
    navigator.sendBeacon(urlA, JSON.stringify(analyticsData));
}

count();