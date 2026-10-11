/* ZONA SPORT — carrito, favoritos y utilidades compartidas. */
const ICON = "../../assets/icons/zs/";
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = n => new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);
const findProduct = id => ZS_PRODUCTS.find(p => p.id === Number(id));
const waUrl = msg => `https://wa.me/${ZS_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

function readStore(key) { try { const v = JSON.parse(localStorage.getItem(key) || "[]"); return Array.isArray(v) ? v : []; } catch { return []; } }
function writeStore(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }

let cart = readStore(ZS_CONFIG.cartKey).filter(x => findProduct(x.id) && x.qty > 0);
let favs = readStore(ZS_CONFIG.favKey).filter(id => findProduct(id));

function toast(html) {
  const t = $("#toast"); if (!t) return;
  t.innerHTML = html; t.classList.add("show");
  clearTimeout(toast.timer); toast.timer = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ---------- Carrito ---------- */
function addToCart(id, variant, qty = 1) {
  const p = findProduct(id); if (!p) return;
  variant = variant || p.variants.options[0];
  const line = cart.find(x => x.id === p.id && x.variant === variant);
  if (line) line.qty = Math.min(99, line.qty + qty); else cart.push({ id: p.id, variant, qty });
  saveCart();
  toast(`<img src="${ICON}check-a.png" alt=""> <span><b>${p.name}</b> · ${variant} agregado</span>`);
  bumpCart();
}
function setQty(i, delta) { const l = cart[i]; if (!l) return; l.qty += delta; if (l.qty < 1) cart.splice(i, 1); saveCart(); }
function removeLine(i) { cart.splice(i, 1); saveCart(); }
function saveCart() { writeStore(ZS_CONFIG.cartKey, cart); renderCart(); }
function cartTotal() { return cart.reduce((n, l) => n + findProduct(l.id).price * l.qty, 0); }
function bumpCart() { const b = $("#cartCount"); if (!b) return; b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }

function renderCart() {
  const count = cart.reduce((n, l) => n + l.qty, 0);
  $$("#cartCount, #drawerCount").forEach(el => el.textContent = count);
  const list = $("#cartItems"); if (!list) return;
  if (!cart.length) {
    list.innerHTML = `<div class="cart-empty"><img src="${ICON}shopping-bag-l.png" alt=""><p>Tu carrito está vacío.</p><a class="btn btn-lime" href="index.html#catalogo">Ver productos</a></div>`;
  } else {
    list.innerHTML = cart.map((l, i) => {
      const p = findProduct(l.id);
      return `<div class="cart-line">
        <a href="producto.html?id=${p.id}"><img src="${p.images[0]}" alt="${p.name}"></a>
        <div class="cart-line-info">
          <a href="producto.html?id=${p.id}" class="cart-line-name">${p.name}</a>
          <span class="cart-line-variant">${p.variants.label}: ${l.variant}</span>
          <div class="qty-pill">
            <button data-q="${i}" data-d="-1" aria-label="Restar una unidad"><img src="${ICON}minus-l.png" alt=""></button>
            <span>${l.qty}</span>
            <button data-q="${i}" data-d="1" aria-label="Sumar una unidad"><img src="${ICON}plus-l.png" alt=""></button>
          </div>
        </div>
        <div class="cart-line-end">
          <strong>${money(p.price * l.qty)}</strong>
          <button class="icon-btn" data-rm="${i}" aria-label="Quitar ${p.name}"><img src="${ICON}trash-2-l.png" alt=""></button>
        </div>
      </div>`;
    }).join("");
  }
  const total = cartTotal();
  $("#cartTotal").textContent = money(total);
  const missing = ZS_CONFIG.freeShippingFrom - total;
  const pct = Math.min(100, (total / ZS_CONFIG.freeShippingFrom) * 100);
  $("#shipBar").style.width = pct + "%";
  $("#shipText").innerHTML = !cart.length ? `Envío gratis desde <b>${money(ZS_CONFIG.freeShippingFrom)}</b>`
    : missing > 0 ? `Te faltan <b>${money(missing)}</b> para el envío gratis` : `<b>¡Tienes envío gratis!</b>`;
  $("#checkoutBtn").disabled = !cart.length;
}

function openCart() { $("#drawer").classList.add("open"); $("#scrim").classList.add("open"); document.body.classList.add("locked"); $("#drawer").setAttribute("aria-hidden", "false"); }
function closeCart() { $("#drawer").classList.remove("open"); $("#scrim").classList.remove("open"); document.body.classList.remove("locked"); $("#drawer").setAttribute("aria-hidden", "true"); }

function checkout() {
  if (!cart.length) return;
  const lines = cart.map(l => { const p = findProduct(l.id); return `• ${p.name} (${p.variants.label}: ${l.variant}) x${l.qty} — ${money(p.price * l.qty)}`; });
  const msg = `Hola Zona Sport, quiero hacer este pedido:\n\n${lines.join("\n")}\n\nTotal estimado: ${money(cartTotal())}\n\n¿Me confirman stock, despacho y medios de pago?`;
  window.open(waUrl(msg), "_blank", "noopener");
}

/* ---------- Favoritos ---------- */
function toggleFav(id) {
  id = Number(id);
  favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
  writeStore(ZS_CONFIG.favKey, favs);
  $$(`[data-fav="${id}"]`).forEach(b => b.classList.toggle("on", favs.includes(id)));
  $$("#favCount").forEach(el => { el.textContent = favs.length; el.hidden = !favs.length; });
  toast(favs.includes(id) ? "Guardado en favoritos" : "Quitado de favoritos");
}

/* ---------- Tarjeta de producto (reutilizable) ---------- */
function productCard(p) {
  const off = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return `<article class="card">
    <div class="media-wrap">
    <a class="card-media" href="producto.html?id=${p.id}" aria-label="Ver ${p.name}">
      <img class="img-a" src="${p.images[0]}" alt="${p.name}" loading="lazy">
      <img class="img-b" src="${p.images[1] || p.images[0]}" alt="" loading="lazy">
      ${p.badge ? `<span class="tag ${off ? "tag-sale" : ""}">${off ? "-" + off + "%" : p.badge}</span>` : ""}
    </a>
    <button class="fav ${favs.includes(p.id) ? "on" : ""}" data-fav="${p.id}" aria-label="Guardar ${p.name} en favoritos"><img class="off" src="${ICON}heart-d.png" alt=""><img class="onn" src="${ICON}heart-a.png" alt=""></button>
    <button class="quick" data-add="${p.id}"><img src="${ICON}plus-d.png" alt=""> Agregar</button>
    </div>
    <div class="card-body">
      <span class="card-cat">${p.category}</span>
      <h3><a href="producto.html?id=${p.id}">${p.name}</a></h3>
      <div class="card-foot">
        <span class="price">${money(p.price)}${p.oldPrice ? ` <s>${money(p.oldPrice)}</s>` : ""}</span>
        <span class="rating"><img src="${ICON}star-a.png" alt="">${p.rating.toFixed(1)}</span>
      </div>
    </div>
  </article>`;
}

/* ---------- Estructura compartida: carrito, toast, WhatsApp ---------- */
function mountShell() {
  document.body.insertAdjacentHTML("beforeend", `
  <div class="scrim" id="scrim"></div>
  <aside class="drawer" id="drawer" role="dialog" aria-modal="true" aria-labelledby="drawerTitle" aria-hidden="true">
    <header class="drawer-head">
      <h2 id="drawerTitle">Carrito <span>(<span id="drawerCount">0</span>)</span></h2>
      <button class="icon-btn" id="closeCart" aria-label="Cerrar carrito"><img src="${ICON}x-l.png" alt=""></button>
    </header>
    <div class="ship"><p id="shipText"></p><div class="ship-track"><span id="shipBar"></span></div></div>
    <div class="cart-items" id="cartItems"></div>
    <footer class="drawer-foot">
      <div class="total"><span>Total estimado</span><strong id="cartTotal">$0</strong></div>
      <button class="btn btn-wa" id="checkoutBtn"><img src="../../assets/icons/whatsapp-white.png" alt=""> Finalizar pedido por WhatsApp</button>
      <p class="fine">Confirmamos stock, despacho y forma de pago por WhatsApp. Precios de demostración.</p>
    </footer>
  </aside>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <a class="wa-fab" id="waFab" href="#" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
    <img src="../../assets/icons/whatsapp-badge.png" alt="">
    <span class="wa-fab-label">¿Te ayudamos a elegir?</span>
  </a>`);
  $("#waFab").href = waUrl("Hola Zona Sport, quiero hacer una consulta sobre sus productos.");
  $("#closeCart").addEventListener("click", closeCart);
  $("#scrim").addEventListener("click", closeCart);
  $("#checkoutBtn").addEventListener("click", checkout);
  $("#cartItems").addEventListener("click", e => {
    const q = e.target.closest("[data-q]"), r = e.target.closest("[data-rm]");
    if (q) setQty(Number(q.dataset.q), Number(q.dataset.d));
    if (r) removeLine(Number(r.dataset.rm));
  });
  $$("[data-open-cart]").forEach(b => b.addEventListener("click", openCart));
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeCart(); document.dispatchEvent(new Event("zs:escape")); } });
  document.addEventListener("click", e => {
    const add = e.target.closest("[data-add]"); if (add) { e.preventDefault(); addToCart(add.dataset.add); }
    const fav = e.target.closest("[data-fav]"); if (fav) { e.preventDefault(); toggleFav(fav.dataset.fav); }
  });
  $$("#favCount").forEach(el => { el.textContent = favs.length; el.hidden = !favs.length; });
  const menuBtn = $("#menuBtn");
  if (menuBtn) menuBtn.addEventListener("click", () => { const open = document.body.classList.toggle("nav-open"); menuBtn.setAttribute("aria-expanded", open); });
  $$(".mainnav a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("nav-open")));
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  renderCart();
}
