/* ALTURA PROPIEDADES — comportamiento compartido */
const II = "../../assets/icons/in/";
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const apWa = msg => `https://wa.me/${AP.whatsapp}?text=${encodeURIComponent(msg)}`;
let favs = (() => { try { const v = JSON.parse(localStorage.getItem(AP.favKey) || "[]"); return Array.isArray(v) ? v : []; } catch { return []; } })();

function toast(text) {
  const t = $("#toast"); if (!t) return;
  t.textContent = text; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2200);
}
function toggleFav(id) {
  id = Number(id);
  favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
  try { localStorage.setItem(AP.favKey, JSON.stringify(favs)); } catch {}
  $$(`[data-fav="${id}"]`).forEach(b => b.classList.toggle("on", favs.includes(id)));
  $$("[data-fav-count]").forEach(el => { el.textContent = favs.length; el.hidden = !favs.length; });
  toast(favs.includes(id) ? "Guardada en favoritas" : "Quitada de favoritas");
}

function propCard(p) {
  return `<article class="card">
    <div class="card-media" data-slider>
      <a href="propiedad.html?id=${p.id}" class="card-track" aria-label="Ver ${p.title}">
        ${p.images.map((src, i) => `<img src="${src}" alt="${i ? "" : p.title}" loading="lazy" class="${i ? "" : "on"}">`).join("")}
      </a>
      <div class="card-tags"><span class="tag op-${p.op === "Venta" ? "v" : "a"}">${p.op}</span>${p.badge ? `<span class="tag tag-b">${p.badge}</span>` : ""}</div>
      <button class="fav ${favs.includes(p.id) ? "on" : ""}" data-fav="${p.id}" aria-label="Guardar ${p.title}"><img class="off" src="${II}heart-d.png" alt=""><img class="onn" src="${II}heart-l.png" alt=""></button>
      <button class="sl sl-prev" data-dir="-1" aria-label="Foto anterior"><img src="${II}chevron-left-d.png" alt=""></button>
      <button class="sl sl-next" data-dir="1" aria-label="Foto siguiente"><img src="${II}chevron-right-d.png" alt=""></button>
      <div class="dots">${p.images.map((_, i) => `<i class="${i ? "" : "on"}"></i>`).join("")}</div>
    </div>
    <a class="card-body" href="propiedad.html?id=${p.id}">
      <div class="card-price"><b>${priceMain(p)}</b><small>${priceAlt(p)}</small></div>
      <h3>${p.title}</h3>
      <p class="card-loc"><img src="${II}map-pin-a.png" alt="">${p.comuna} · ${p.type}</p>
      <ul class="specs">
        <li><img src="${II}ruler-d.png" alt="">${p.m2} m²</li>
        <li><img src="${II}bed-double-d.png" alt="">${p.dorms} dorm.</li>
        <li><img src="${II}bath-d.png" alt="">${p.baths} baños</li>
        <li><img src="${II}car-d.png" alt="">${p.parking}</li>
      </ul>
    </a>
  </article>`;
}

/* Mini galería de cada tarjeta */
document.addEventListener("click", e => {
  const f = e.target.closest("[data-fav]"); if (f) { e.preventDefault(); toggleFav(f.dataset.fav); return; }
  const b = e.target.closest("[data-dir]"); if (!b) return;
  e.preventDefault();
  const box = b.closest("[data-slider]"), imgs = $$("img", $(".card-track", box)), dots = $$(".dots i", box);
  let i = imgs.findIndex(x => x.classList.contains("on"));
  i = (i + Number(b.dataset.dir) + imgs.length) % imgs.length;
  imgs.forEach((x, n) => x.classList.toggle("on", n === i)); dots.forEach((x, n) => x.classList.toggle("on", n === i));
});

/* Comunes */
$$("[data-wa]").forEach(a => a.href = apWa(a.dataset.wa || "Hola Altura Propiedades, quiero hacer una consulta."));
const headEl = $("#head");
if (headEl) { const f = () => headEl.classList.toggle("solid", scrollY > 30 || headEl.dataset.solid === "1"); f(); addEventListener("scroll", f, { passive: true }); }
const burgerEl = $("#burger");
if (burgerEl) {
  burgerEl.addEventListener("click", () => burgerEl.setAttribute("aria-expanded", document.body.classList.toggle("nav-open")));
  $$("#nav a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("nav-open")));
}
$$("[data-fav-count]").forEach(el => { el.textContent = favs.length; el.hidden = !favs.length; });
const yearEl = $("#year"); if (yearEl) yearEl.textContent = new Date().getFullYear();
