let lang = localStorage.getItem("mori-lang") || "ja";

const q = (s) => document.querySelector(s);
const qa = (s) => [...document.querySelectorAll(s)];

function applyLanguage() {
  document.documentElement.lang = lang;
  qa("[data-ja][data-en]").forEach(el => {
    el.innerHTML = el.dataset[lang];
  });
  qa(".lang-switch button").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  renderAll();
}

async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

let research = [], publications = [], people = [], news = [];

function renderResearch() {
  q("#research-grid").innerHTML = research.map((item, i) => `
    <article class="card">
      <div class="card-media"><img src="${item.image}" alt=""></div>
      <div class="card-body">
        <span class="badge">${item.label}</span>
        <h3>${item.title[lang]}</h3>
        <p>${item.description[lang]}</p>
        <div class="card-footer"><a href="${item.link}">${lang === "ja" ? "詳しく見る →" : "Explore →"}</a></div>
      </div>
    </article>
  `).join("");
}

function renderPublications() {
  const selected = publications.filter(p => p.selected).slice(0, 6);
  q("#publication-grid").innerHTML = selected.map(p => `
    <article class="card">
      <div class="card-media"><img src="${p.image}" alt=""></div>
      <div class="card-body">
        <div>${(p.badges || []).map(b => `<span class="badge">${b}</span>`).join("")}</div>
        <h3>${p.title}</h3>
        <p>${p.journal} ${p.year}${p.volume ? `, ${p.volume}` : ""}${p.pages ? `, ${p.pages}` : ""}</p>
        <p>${p.summary[lang]}</p>
        <div class="card-footer">
          <span>${p.category}</span>
          <a href="${p.url}" target="_blank" rel="noopener">DOI →</a>
        </div>
      </div>
    </article>
  `).join("");

  const years = [...new Set(publications.map(p => p.year))].sort((a,b) => b-a);
  q("#publications-by-year").innerHTML = years.map((year, idx) => {
    const items = publications.filter(p => p.year === year);
    return `
      <div class="year-block ${idx===0 ? "open" : ""}">
        <button class="year-head" aria-expanded="${idx===0}">
          <span>${year}</span><span>${items.length} ${lang==="ja" ? "件" : "items"} ＋</span>
        </button>
        <div class="year-content">
          ${items.map(p => `
            <div class="pub-row">
              <div class="pub-title">${p.title}</div>
              <div class="pub-meta">${p.authors}. <em>${p.journal}</em> ${p.year}${p.volume ? `, ${p.volume}` : ""}${p.pages ? `, ${p.pages}` : ""}. ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener">DOI</a>` : ""}</div>
            </div>
          `).join("")}
        </div>
      </div>`;
  }).join("");

  qa(".year-head").forEach(btn => btn.addEventListener("click", () => {
    const block = btn.parentElement;
    block.classList.toggle("open");
    btn.setAttribute("aria-expanded", block.classList.contains("open"));
  }));
}

function initials(name) {
  return name.split(/\s+/).map(x => x[0]).join("").slice(0,2).toUpperCase();
}

function renderPeople() {
  q("#people-grid").innerHTML = people.map(p => `
    <article class="card people-card">
      <div class="card-media">
        ${p.photo ? `<img src="${p.photo}" alt="${p.name}">` : `<div class="avatar">${initials(p.name)}</div>`}
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.role[lang]}</p>
        <p>${p.topic[lang]}</p>
      </div>
    </article>
  `).join("");
}

function renderNews() {
  q("#news-list").innerHTML = news.slice(0,8).map(n => `
    <article class="news-item">
      <div class="news-date">${n.date}</div>
      <div class="news-tag">${n.category[lang]}</div>
      <div class="news-title">${n.title[lang]}</div>
    </article>
  `).join("");
}

function renderAll() {
  if (research.length) renderResearch();
  if (publications.length) renderPublications();
  if (people.length) renderPeople();
  if (news.length) renderNews();
}

Promise.all([
  loadJSON("data/research.json"),
  loadJSON("data/publications.json"),
  loadJSON("data/people.json"),
  loadJSON("data/news.json")
]).then(([r,p,pe,n]) => {
  research=r; publications=p; people=pe; news=n;
  applyLanguage();
}).catch(err => console.error(err));

qa(".lang-switch button").forEach(btn => btn.addEventListener("click", () => {
  lang = btn.dataset.lang;
  localStorage.setItem("mori-lang", lang);
  applyLanguage();
}));
q(".nav-toggle").addEventListener("click", () => q(".nav").classList.toggle("open"));
