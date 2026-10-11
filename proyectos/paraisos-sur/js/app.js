/* PARAÍSOS SUR — utilidades compartidas */
const PIC = "../../assets/icons/ps/";
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const wa = msg => `https://wa.me/${PS_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const clp = n => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);
const LOGO = (dark) => `<svg viewBox="0 0 44 44" aria-hidden="true"><rect width="44" height="44" rx="12" fill="#d98b3a"/><circle cx="30" cy="14" r="4.5" fill="#fff8ec"/><path d="M5 34 16 18l6.5 8.5L27 21l12 13z" fill="${dark ? "#17322b" : "#17322b"}"/><path d="m16 18 3.4 4.5-3.4-1.4-3.2 2.2z" fill="#fff8ec"/></svg>`;

function destCard(d) {
  return `<a class="dest" href="destino.html?lugar=${d.id}">
    <img src="${d.images[0]}" alt="${d.name}, ${d.region}" loading="lazy">
    <div class="dest-top"><span class="flag"><img src="${PIC}map-pin-d.png" alt="">${d.country}</span><span class="dest-go"><img src="${PIC}arrow-up-right-l.png" alt=""></span></div>
    <div class="dest-body"><small>${d.region}</small><h3>${d.name}</h3><p>${d.tagline}</p><div class="dest-tags">${d.type.map(t => `<span>${t}</span>`).join("")}</div></div>
  </a>`;
}

function mountShell({ solidAlways = false } = {}) {
  $$("[data-logo]").forEach(el => el.insertAdjacentHTML("afterbegin", LOGO()));
  const bar = $(".nav-bar");
  const onScroll = () => bar.classList.toggle("solid", solidAlways || scrollY > 40);
  onScroll(); addEventListener("scroll", onScroll, { passive: true });
  const burger = $("#burger");
  if (burger) burger.onclick = () => burger.setAttribute("aria-expanded", document.body.classList.toggle("nav-open"));
  $$(".links a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("nav-open")));
  document.body.insertAdjacentHTML("beforeend", `<a class="wa-btn" id="waBtn" target="_blank" rel="noopener" aria-label="Planifica tu viaje por WhatsApp"><span class="wa-ico"><img src="../../assets/icons/whatsapp-green.png" alt=""></span><span class="label">Planifica tu viaje</span></a>`);
  const general = wa("Hola Paraísos Sur, quiero planificar un viaje al sur. ¿Me pueden enviar opciones y valores?");
  $$("#waBtn, [data-wa]").forEach(a => a.href = general);
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
}
