let lang = localStorage.getItem("mori-lang") || "ja";
const qa = (s) => [...document.querySelectorAll(s)];
const q = (s) => document.querySelector(s);
function applyLanguage(){
  document.documentElement.lang = lang;
  qa("[data-ja][data-en]").forEach(el => { el.innerHTML = el.dataset[lang]; });
  qa(".lang-switch button").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
}
qa(".lang-switch button").forEach(btn => btn.addEventListener("click", () => {
  lang = btn.dataset.lang;
  localStorage.setItem("mori-lang", lang);
  applyLanguage();
}));
const navToggle=q(".nav-toggle");
if(navToggle) navToggle.addEventListener("click",()=>q(".nav").classList.toggle("open"));
qa(".nav a").forEach(link=>link.addEventListener("click",()=>q(".nav").classList.remove("open")));
applyLanguage();
