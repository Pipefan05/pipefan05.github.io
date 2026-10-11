/* MESA NOBLE — pedido para retirar, compartido por index.html y plato.html */
const MI = "../../assets/icons/mn/";
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = n => new Intl.NumberFormat(MN_CONFIG.locale, { style: "currency", currency: MN_CONFIG.currency, maximumFractionDigits: 0 }).format(n);
const dish = id => MN_MENU.find(d => d.id === id);
const wa = msg => `https://wa.me/${MN_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

let order = (() => { try { const v = JSON.parse(localStorage.getItem(MN_CONFIG.cartKey) || "[]"); return Array.isArray(v) ? v.filter(x => dish(x.id) && x.qty > 0) : []; } catch { return []; } })();
const save = () => { try { localStorage.setItem(MN_CONFIG.cartKey, JSON.stringify(order)); } catch {} renderOrder(); };
const orderTotal = () => order.reduce((n, l) => n + dish(l.id).price * l.qty, 0);

function toast(text) {
  const t = $("#toast"); t.textContent = text; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2400);
}
function addDish(id, qty = 1) {
  const d = dish(id); if (!d) return;
  const l = order.find(x => x.id === id);
  if (l) l.qty = Math.min(20, l.qty + qty); else order.push({ id, qty });
  save(); toast(`${d.name} se sumó a tu pedido`);
}
function renderOrder() {
  const count = order.reduce((n, l) => n + l.qty, 0);
  $$("[data-count]").forEach(el => { el.textContent = count; el.hidden = !count; });
  const box = $("#orderItems"); if (!box) return;
  box.innerHTML = order.length ? order.map(l => {
    const d = dish(l.id);
    return `<div class="o-line">
      <img src="${d.images[0]}" alt="">
      <div><strong>${d.name}</strong><small>${money(d.price)} c/u</small>
        <div class="o-qty"><button data-q="${d.id}" data-d="-1" aria-label="Quitar uno"><img src="${MI}minus-d.png" alt=""></button><span>${l.qty}</span><button data-q="${d.id}" data-d="1" aria-label="Agregar uno"><img src="${MI}plus-d.png" alt=""></button></div>
      </div>
      <span class="o-price">${money(d.price * l.qty)}</span>
    </div>`;
  }).join("") : `<div class="o-empty"><img src="${MI}utensils-crossed-a.png" alt=""><p>Tu pedido está vacío.<br>Elegí algo rico de la carta.</p></div>`;
  $("#orderTotal").textContent = money(orderTotal());
  $("#toCheckout").disabled = !order.length;
}
function openPanel() { $("#panel").classList.add("open"); $("#veil").classList.add("open"); document.body.classList.add("locked"); }
function closePanel() { $("#panel").classList.remove("open"); $("#veil").classList.remove("open"); document.body.classList.remove("locked"); }
function openCheckout() { if (!order.length) return; closePanel(); $("#checkout").classList.add("open"); document.body.classList.add("locked"); $("#coStep1").hidden = false; $("#coStep2").hidden = true; }
function closeCheckout() { $("#checkout").classList.remove("open"); document.body.classList.remove("locked"); }

function buildMessage(f) {
  const lines = order.map(l => { const d = dish(l.id); return `• ${l.qty} × ${d.name} — ${money(d.price * l.qty)}`; });
  return `Hola Mesa Noble, quiero hacer un pedido para retirar.\n\nNombre: ${f.name}\nTeléfono: ${f.phone}\nRetiro: ${f.date} a las ${f.slot}\n\n${lines.join("\n")}\n\nTotal: ${money(orderTotal())}${f.notes ? `\nNotas: ${f.notes}` : ""}`;
}

function mountShell() {
  document.body.insertAdjacentHTML("beforeend", `
  <div class="veil" id="veil"></div>
  <aside class="panel" id="panel" role="dialog" aria-modal="true" aria-labelledby="panelTitle">
    <div class="panel-head"><div><span class="over">Para retirar</span><h2 id="panelTitle">Tu pedido</h2></div><button class="round" id="closePanel" aria-label="Cerrar"><img src="${MI}x-d.png" alt=""></button></div>
    <div class="panel-body" id="orderItems"></div>
    <div class="panel-foot">
      <div class="o-total"><span>Total</span><strong id="orderTotal"></strong></div>
      <button class="btn btn-terra block" id="toCheckout">Continuar con el pedido</button>
      <p class="tiny">Sin pagos en línea: confirmamos el pedido por WhatsApp y abonás al retirar.</p>
    </div>
  </aside>
  <div class="co" id="checkout" role="dialog" aria-modal="true" aria-labelledby="coTitle">
    <div class="co-box">
      <button class="round co-close" id="closeCo" aria-label="Cerrar"><img src="${MI}x-d.png" alt=""></button>
      <div id="coStep1">
        <span class="over">Paso final</span><h2 id="coTitle">Datos para el retiro</h2>
        <form id="coForm" class="form">
          <label>Nombre y apellido<input name="name" required autocomplete="name"></label>
          <label>Teléfono<input name="phone" required inputmode="tel" autocomplete="tel" placeholder="+54 9 11 ..."></label>
          <div class="row2">
            <label>Día<input type="date" name="date" id="coDate" required></label>
            <label>Horario<select name="slot" required><option>12:30</option><option>13:00</option><option>13:30</option><option>20:00</option><option>20:30</option><option>21:00</option><option>21:30</option></select></label>
          </div>
          <label>Notas para la cocina (opcional)<textarea name="notes" rows="2" placeholder="Alergias, punto de la carne, cubiertos..."></textarea></label>
          <button class="btn btn-terra block" type="submit">Revisar pedido</button>
        </form>
      </div>
      <div id="coStep2" hidden>
        <span class="over">Todo listo</span><h2>Revisá tu pedido</h2>
        <pre class="summary" id="summary"></pre>
        <a class="btn btn-wa block" id="sendWa" target="_blank" rel="noopener"><img src="../../assets/icons/whatsapp-white.png" alt=""> Enviar por WhatsApp</a>
        <button class="btn btn-line block" id="backCo">Modificar datos</button>
      </div>
    </div>
  </div>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <a class="wa-chip" id="waChip" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp"><img src="../../assets/icons/whatsapp-badge.png" alt=""><span>Reservas y consultas</span></a>`);
  $("#waChip").href = wa("Hola Mesa Noble, quiero hacer una consulta.");
  $("#closePanel").onclick = closePanel; $("#veil").onclick = closePanel;
  $("#toCheckout").onclick = openCheckout; $("#closeCo").onclick = closeCheckout;
  $("#checkout").addEventListener("click", e => { if (e.target.id === "checkout") closeCheckout(); });
  $("#backCo").onclick = () => { $("#coStep1").hidden = false; $("#coStep2").hidden = true; };
  $("#coDate").min = new Date().toISOString().slice(0, 10);
  $("#coForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target));
    const msg = buildMessage(f);
    $("#summary").textContent = msg; $("#sendWa").href = wa(msg);
    $("#coStep1").hidden = true; $("#coStep2").hidden = false;
  });
  $("#orderItems").addEventListener("click", e => {
    const b = e.target.closest("[data-q]"); if (!b) return;
    const l = order.find(x => x.id === b.dataset.q); l.qty += Number(b.dataset.d);
    if (l.qty < 1) order = order.filter(x => x !== l); save();
  });
  document.addEventListener("click", e => { const a = e.target.closest("[data-add]"); if (a) { e.preventDefault(); addDish(a.dataset.add); } });
  $$("[data-open-order]").forEach(b => b.addEventListener("click", openPanel));
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closePanel(); closeCheckout(); } });
  const mb = $("#menuBtn"); if (mb) mb.onclick = () => mb.setAttribute("aria-expanded", document.body.classList.toggle("nav-open"));
  $$(".nav a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("nav-open")));
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  renderOrder();
}
