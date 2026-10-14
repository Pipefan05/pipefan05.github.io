/* LUMEN DENTAL — comportamiento compartido */
const CI = "../../assets/icons/cd/";
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const ldWa = msg => `https://wa.me/${LD.whatsapp}?text=${encodeURIComponent(msg)}`;
const LD_MSG = {
  general: "Hola Lumen Dental, quiero hacer una consulta.",
  urgencia: "Hola Lumen Dental, tengo una urgencia dental. ¿Tienen hora disponible hoy?"
};
$$("[data-wa]").forEach(a => { a.href = ldWa(LD_MSG[a.dataset.wa] || LD_MSG.general); });

const headEl = $("#head");
if (headEl) addEventListener("scroll", () => headEl.classList.toggle("scrolled", scrollY > 8), { passive: true });

const burgerEl = $("#burger");
if (burgerEl) {
  burgerEl.addEventListener("click", () => burgerEl.setAttribute("aria-expanded", document.body.classList.toggle("nav-open")));
  $$("#nav a").forEach(a => a.addEventListener("click", () => { document.body.classList.remove("nav-open"); burgerEl.setAttribute("aria-expanded", "false"); }));
}
const yearEl = $("#year"); if (yearEl) yearEl.textContent = new Date().getFullYear();
