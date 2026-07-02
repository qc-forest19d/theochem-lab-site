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
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

let research = [], publications = [], books = [], people = [], alumniUnified = [], news = [];

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
  const selected = publications.filter(p => p.selected);
  const selectedGrid = q("#selected-publications");
  if (selectedGrid) {
    selectedGrid.innerHTML = selected.map(p => `
      <article class="selected-publication-card">
        ${p.image ? `<img src="${p.image}" alt="">` : ""}
        <div class="selected-publication-body">
          ${p.pillar ? `<span class="pub-pillar pub-pillar-${p.pillar.id}">
            <span class="pub-pillar-number">${p.pillar.number}</span>
            <span>${p.pillar[lang]}</span>
          </span>` : ""}
          <h3>${p.title}</h3>
          <p class="selected-pub-authors">${p.authors}</p>
          <p class="selected-pub-journal"><em>${p.journal}</em> ${p.year}${p.volume ? `, ${p.volume}` : ""}${p.pages ? `, ${p.pages}` : ""}</p>
          ${p.summary?.[lang] ? `<p class="selected-pub-summary">${p.summary[lang]}</p>` : ""}
          <div class="selected-pub-links">
            ${p.url ? `<a href="${p.url}" target="_blank" rel="noopener">DOI ↗</a>` : ""}
          </div>
        </div>
      </article>
    `).join("");
  }

  // The complete annual publication list is embedded statically in index.html.
  // This keeps all 90 records visible even when JSON fetch is unavailable.

}


function renderBooks() {
  const container = q("#books-list");
  if (!container) return;
  container.innerHTML = books.map(b => `
    <article class="book-item">
      <div class="book-year">${b.year}</div>
      <div class="book-content">
        <div class="book-type">${b.type[lang]}</div>
        <h3>${b.title[lang]}</h3>
        <p class="book-authors">${b.authors[lang]}</p>
        <p class="book-source"><em>${b.book[lang]}</em>${b.publisher?.[lang] ? `｜${b.publisher[lang]}` : ""}${b.pages ? `｜${b.pages}` : ""}</p>
        <div class="book-meta">
          ${b.isbn ? `<span>ISBN ${b.isbn}</span>` : ""}
          ${b.doi ? `<span>DOI ${b.doi}</span>` : ""}
          ${b.url ? `<a href="${b.url}" target="_blank" rel="noopener">${b.link_label?.[lang] || (lang === "ja" ? "詳細" : "Details")} ↗</a>` : ""}
          ${b.secondary_url ? `<a href="${b.secondary_url}" target="_blank" rel="noopener">${b.secondary_link_label?.[lang] || (lang === "ja" ? "関連資料" : "Related material")} ↗</a>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function initials(name) {
  return name.split(/\s+/).map(x => x[0]).join("").slice(0,2).toUpperCase();
}

function renderPeople() {
  q("#people-grid").innerHTML = people.map(p => {
    const displayName = lang === "ja" && p.name_ja ? p.name_ja : p.name;
    const affiliation = p.affiliation?.[lang] || "";
    return `
      <article class="card people-card">
        <div class="card-media">
          ${p.photo ? `<img src="${p.photo}" alt="${displayName}">` : `<div class="avatar">${initials(p.name)}</div>`}
        </div>
        <div class="card-body">
          <h3>${displayName}</h3>
          <p class="person-role">${p.role[lang]}</p>
          ${affiliation ? `<p class="person-affiliation">${affiliation}</p>` : ""}
          <p>${p.topic[lang]}</p>
          ${p.profile_url ? `<div class="person-profile-link"><a href="${p.profile_url}">${lang === "ja" ? "PI紹介を見る →" : "View PI profile →"}</a></div>` : ""}
          ${(p.awards && p.awards.length) ? `
            <div class="person-awards">
              <strong>${lang === "ja" ? "受賞" : "Awards"}</strong>
              <ul>
                ${p.awards.map(a => `<li>
                  ${a.url ? `<a href="${a.url}" target="_blank" rel="noopener">${a.year ? `${a.year} — ` : ""}${a[lang]}</a>` : `${a.year ? `${a.year} — ` : ""}${a[lang]}`}
                  ${a.detail?.[lang] ? `<div class="award-detail">${a.detail[lang]}</div>` : ""}
                </li>`).join("")}
              </ul>
            </div>` : ""}
          ${(p.highlights && p.highlights.length) ? `
            <div class="person-highlights">
              <strong>${lang === "ja" ? "研究ハイライト" : "Research Highlights"}</strong>
              <ul>
                ${p.highlights.map(h => `<li>
                  ${h.url ? `<a href="${h.url}" target="_blank" rel="noopener">${h.year ? `${h.year} — ` : ""}${h[lang]}</a>` : `${h.year ? `${h.year} — ` : ""}${h[lang]}`}
                  ${h.detail?.[lang] ? `<div class="award-detail">${h.detail[lang]}</div>` : ""}
                </li>`).join("")}
              </ul>
            </div>` : ""}
        </div>
      </article>
    `;
  }).join("");
}





function renderUnifiedAlumni() {
  const container = q("#alumni-unified-list");
  if (!container) return;

  container.innerHTML = alumniUnified.map(group => `
    <section class="alumni-year-group">
      <h3>${group.year}${lang === "ja" ? "年度" : ""}</h3>
      <div class="alumni-year-grid">
        ${group.members.map(member => `
          <div class="alumni-simple-item">
            <div class="alumni-simple-name">
              <strong>${member.name_ja}</strong>
              <span>${member.name}</span>
            </div>
            ${member.degree_label?.[lang] ? `<small class="alumni-degree">${member.degree_label[lang]}</small>` : ""}
            ${member.current_position?.[lang] ? `<small class="alumni-current-position">${member.current_position[lang]}</small>` : ""}
          </div>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderNews() {
  const container = q("#news-list");
  if (!container) return;
  container.innerHTML = news.map(n => `
    <article class="news-item">
      ${n.image ? `
        <a class="news-image-link" href="${n.url || "#"}" target="_blank" rel="noopener">
          <img class="news-image" src="${n.image}" alt="${n.title[lang]}" loading="lazy">
        </a>` : ""}
      <div class="news-content">
        <div class="news-meta">
          <time>${n.date}</time>
          <span>${n.category[lang]}</span>
        </div>
        <h3>${n.title[lang]}</h3>
        ${n.body?.[lang] ? `<p>${n.body[lang]}</p>` : ""}
        ${(n.url || n.secondary_url) ? `
          <div class="news-links">
            ${n.url ? `<a href="${n.url}" target="_blank" rel="noopener">${n.link_label?.[lang] || (lang === "ja" ? "詳しく見る" : "Read more")} →</a>` : ""}
            ${n.secondary_url ? `<a href="${n.secondary_url}" target="_blank" rel="noopener">${n.secondary_link_label?.[lang] || "LinkedIn"} ↗</a>` : ""}
          </div>` : ""}
      </div>
    </article>
  `).join("");
}

function renderAll() {
  if (research.length) renderResearch();
  if (publications.length) renderPublications();
  if (books.length) renderBooks();
  if (alumniUnified.length) renderUnifiedAlumni();
  if (people.length) renderPeople();
  if (news.length) renderNews();
}

Promise.all([
  loadJSON("data/research.json"),
  loadJSON("data/publications.json"),
  loadJSON("data/books.json"),
  loadJSON("data/people.json"),
  loadJSON("data/alumni_unified.json"),
  loadJSON("data/news.json")
]).then(([r,p,b,pe,au,n]) => {
  research=r; publications=p; books=b; people=pe; alumniUnified=au; news=n;
  applyLanguage();
}).catch(err => console.error(err));

qa(".lang-switch button").forEach(btn => btn.addEventListener("click", () => {
  lang = btn.dataset.lang;
  localStorage.setItem("mori-lang", lang);
  applyLanguage();
}));
q(".nav-toggle").addEventListener("click", () => q(".nav").classList.toggle("open"));

qa(".nav a").forEach(link => link.addEventListener("click", () => q(".nav").classList.remove("open")));
