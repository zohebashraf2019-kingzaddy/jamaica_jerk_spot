/* =========================================================
   Jamaica Jerk Spot — site data + interactions
   ---------------------------------------------------------
   EASY UPDATES:
   • Weekly schedule  → edit SCHEDULE below (dates are YYYY-MM-DD, times 24h, Reno time)
   • Menu / prices    → edit MENU below
   • Social links     → edit LINKS below
   ========================================================= */

const PHONE = "+17754703704";

const LINKS = {
  // From their Linktree (linktr.ee/jamaicajerkspot)
  doordashTruck: "https://www.doordash.com/store/31273707",    // Food Truck – 185 Shelby Dr, Sparks
  doordashTrailer: "https://www.doordash.com/store/29679373",  // Food Trailer – 10525 Stead Blvd, Reno
  instagram: "https://www.instagram.com/jamaica_jerk_spot/",
  facebook: "https://www.facebook.com/share/18dnWjoPAu/",
  tiktok: "https://www.tiktok.com/@jamaica_jerk_spot",
  threads: "https://www.threads.com/@jamaica_jerk_spot",
  whatsapp: "https://wa.me/17754703704",
  googleReview: "https://search.google.com/local/writereview?placeid=ChIJcdvIM74VmYARNYhTTcGZwx8",
  yelp: "https://www.yelp.com/biz/jamaica-jerk-spot-reno",
  linktree: "https://linktr.ee/jamaicajerkspot",
};

/* ---------- WEEKLY SCHEDULE ---------- */
const SCHEDULE = [
  { date: "2026-11-11", kind: "trailer", title: "Private Lunch", private: true },
  { date: "2026-11-12", kind: "trailer", title: "Lemmon Valley", place: "305 Buck Dr, Reno (next to Valvoline)", start: "15:00", end: "19:00" },
  { date: "2026-11-13", kind: "trailer", title: "Reno Punk Rock Flea Market", place: "El Sol – 1580 Hymer Ave, Sparks", start: "18:00", end: "22:00" },
  { date: "2026-11-14", kind: "trailer", title: "Reno Punk Rock Flea Market", place: "El Sol – 1580 Hymer Ave, Sparks", start: "10:00", end: "18:00" },
  { date: "2026-11-15", kind: "truck", title: "Reno Antique Faire", place: "301 N Virginia St, Downtown Reno", start: "10:00", end: "16:00" },
  { date: "2026-11-15", kind: "trailer", title: "Reno Punk Rock Flea Market", place: "El Sol – 1580 Hymer Ave, Sparks", start: "10:00", end: "18:00" },
];

/* ---------- MENU ---------- */
const IMG = "assets/img/";
const MENU = {
  plates: {
    label: "🍗 Plates",
    items: [
      { id: "jerk-chicken-plate", name: "Jerk Chicken", price: 22.70, img: "jerk-chicken.jpg", tag: "Most reviewed", main: ["chicken"], desc: "Spicy jerk-seasoned chicken with fried plantains and your choice of steamed cabbage or mac & cheese." },
      { id: "oxtails", name: "Oxtails", price: 28.35, img: "oxtails.jpg", tag: "Fan favorite", main: ["oxtails"], desc: "Slow-cooked, tender oxtail with fried plantains. Choice of mac & cheese or steamed cabbage." },
      { id: "jerk-shrimp", name: "Jerk Shrimp", price: 22.50, img: "jerk-chicken-shrimp.jpg", main: ["shrimp"], desc: "Jerk-seasoned shrimp with fried plantains and your choice of steamed cabbage or mac & cheese." },
      { id: "short-ribs", name: "Jerk Beef Short Ribs", price: 22.00, img: "jerk-beef-short-ribs.jpg", main: ["shortRibs"], desc: "Tender short ribs in spicy jerk seasoning with rice & peas and steamed vegetables." },
      { id: "ackee", name: "Ackee & Saltfish", price: 22.00, img: null, emoji: "🇯🇲", tag: "National dish", main: ["ackee"], desc: "Jamaica's national dish. Served with white rice or rice & peas plus a second side of your choice." },
    ],
  },
  combos: {
    label: "🔥 Combos",
    items: [
      { id: "chicken-shrimp", name: "Jerk Chicken + Jerk Shrimp", price: 31.50, img: "jerk-chicken-shrimp.jpg", tag: "Best of both", main: ["chicken", "shrimp"], desc: "Jerk chicken and jerk shrimp with fried plantains and mac & cheese or steamed cabbage." },
      { id: "chicken-goat", name: "Jerk Chicken + Curry Goat", price: 32.00, img: "curry-goat.jpg", main: ["chicken", "curryGoat"], desc: "Tender jerk chicken and curry goat with white rice or rice & peas, plus mac & cheese or cabbage." },
      { id: "oxtails-shrimp", name: "Oxtails + Jerk Shrimp", price: 38.00, img: "oxtails.jpg", tag: "Big plate", main: ["oxtails", "shrimp"], desc: "Tender oxtails and jerk shrimp with your choice of mac & cheese or steamed cabbage." },
      { id: "ribs-chicken", name: "Jerk Pork Ribs + Jerk Chicken", price: 31.50, img: null, emoji: "🍖", main: ["porkRibs", "chicken"], desc: "Pork ribs and jerk chicken. Choice of mac & cheese or steamed cabbage." },
      { id: "shortribs-oxtails", name: "Jerk Short Ribs + Oxtails", price: 38.50, img: "jerk-beef-short-ribs.jpg", main: ["shortRibs", "oxtails"], desc: "Steamed cabbage or mac & cheese. Choose white rice or rice & peas." },
    ],
  },
  pasta: {
    label: "🍝 Rasta Pasta",
    items: [
      { id: "pasta-ribs", name: "Rasta Pasta + Jerk Pork Ribs", price: 21.85, img: "jerk-pork-ribs-rasta-pasta.jpg", tag: "Creamy", main: ["rastaPasta", "porkRibs"], desc: "Tender ribs paired with creamy pasta, colorful bell peppers and a rich blend of spices." },
      { id: "pasta-shortribs", name: "Rasta Pasta + Jerk Short Ribs", price: 22.00, img: "jerk-beef-short-ribs.jpg", main: ["rastaPasta", "shortRibs"], desc: "Tender jerk short ribs with vibrant pasta and bell peppers in a creamy sauce." },
    ],
  },
  alacarte: {
    label: "🥡 À la Carte",
    items: [
      { id: "ala-chicken", name: "Jerk Chicken (à la carte)", price: 12.65, img: "jerk-chicken.jpg", desc: "Succulent chicken marinated in jerk spices, grilled to perfection." },
      { id: "ala-goat", name: "Curry Goat (à la carte)", price: 13.00, img: "curry-goat.jpg", desc: "Tender goat in a rich curry sauce with potatoes and carrots." },
    ],
  },
  vegan: {
    label: "🌱 Vegan",
    items: [
      { id: "mushrooms", name: "Jerk Mushrooms", price: 18.00, img: "jerk-mushrooms.jpg", tag: "Plant-based", vegan: true, main: ["mushrooms"], desc: "Tender jerk-seasoned mushrooms with fried plantains, steamed cabbage and white rice or rice & peas." },
      { id: "callaloo", name: "Callaloo (no saltfish)", price: null, img: "vegan-options.jpg", tag: "Plant-based", vegan: true, desc: "Island greens sautéed with peppers, served with rice & peas and fried plantains. Ask for today's price." },
    ],
  },
  drinks: {
    label: "🥤 Drinks",
    items: [
      { id: "pepsi", name: "Pepsi", price: 2.50, img: null, emoji: "🥤", desc: "The bold, refreshing cola." },
      { id: "sprite", name: "Sprite", price: 2.50, img: null, emoji: "🍋", desc: "Crisp lemon-lime refresher." },
    ],
  },
};

/* ---------- PLATE BUILDER DATA ---------- */
const MAINS = {
  chicken: { name: "Jerk Chicken", img: "jerk-chicken.jpg" },
  oxtails: { name: "Oxtails", img: "oxtails.jpg" },
  shrimp: { name: "Jerk Shrimp", img: "jerk-chicken-shrimp.jpg" },
  curryGoat: { name: "Curry Goat", img: "curry-goat.jpg" },
  shortRibs: { name: "Jerk Short Ribs", img: "jerk-beef-short-ribs.jpg" },
  porkRibs: { name: "Jerk Pork Ribs", img: "jerk-pork-ribs-rasta-pasta.jpg" },
  rastaPasta: { name: "Rasta Pasta", img: "jerk-pork-ribs-rasta-pasta.jpg" },
  ackee: { name: "Ackee & Saltfish", img: null, emoji: "🇯🇲" },
  mushrooms: { name: "Jerk Mushrooms", img: "jerk-mushrooms.jpg", vegan: true },
};
const RICE = [
  { id: "rice-peas", name: "Rice & Peas", color: "#b77d6a" },
  { id: "white", name: "White Rice", color: "#f3efe4" },
];
const SIDES = [
  { id: "mac", name: "Mac & Cheese", color: "#f4b324" },
  { id: "cabbage", name: "Steamed Cabbage", color: "#c9dd8c" },
];

const PATOIS = [
  ["Wah gwaan?", "What's going on? / How are you?"],
  ["Irie", "Everything's good, feeling great"],
  ["Nyam", "To eat — \"Mek wi nyam!\""],
  ["Mi belly full", "I'm full and happy"],
  ["Likkle more", "See you later"],
  ["Bless up", "Blessings — take care"],
  ["Yaad", "Home (and Jamaica itself)"],
  ["Pon di road", "On the road — like this truck!"],
];

/* =========================================================
   Helpers
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = (n) => (n == null ? "Ask" : `$${n.toFixed(2)}`);
const allItems = () => Object.values(MENU).flatMap((c) => c.items);
const findItem = (id) => allItems().find((i) => i.id === id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const mapsUrl = (q) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
const smsHref = (body) => `sms:${PHONE}${/iPhone|iPad|Mac/i.test(navigator.userAgent) ? "&" : "?"}body=${encodeURIComponent(body)}`;

function toast(msg) {
  const t = $("[data-toast]");
  t.textContent = msg;
  t.classList.add("is-on");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("is-on"), 2600);
}

/* Reno time, no matter where the visitor is */
function renoNow() {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
      .formatToParts(new Date()).map((x) => [x.type, x.value])
  );
  return { date: `${p.year}-${p.month}-${p.day}`, mins: +p.hour * 60 + +p.minute };
}
const toMins = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
const fmtTime = (t) => { let [h, m] = t.split(":").map(Number); const ap = h >= 12 ? "PM" : "AM"; h = h % 12 || 12; return m ? `${h}:${String(m).padStart(2, "0")} ${ap}` : `${h} ${ap}`; };
const fmtDur = (m) => (m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${m}m`);
const dayInfo = (iso) => {
  const d = new Date(iso + "T12:00:00");
  return { dow: d.toLocaleDateString("en-US", { weekday: "short" }), day: d.getDate(), mon: d.toLocaleDateString("en-US", { month: "short" }), long: d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" }) };
};

/* =========================================================
   Social links
   ========================================================= */
const ICONS = {
  instagram: '<svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24"><path d="M14 8V6.5c0-.8.2-1.5 1.5-1.5H17V2h-2.6C11.5 2 11 4 11 6v2H9v3h2v11h3V11h2.4l.6-3H14z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24"><path d="M16.5 2c.3 2.3 1.7 3.9 4 4.1v3a7 7 0 0 1-4-1.3v6.6a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.1v3.2a3.2 3.2 0 1 0 2.3 3.1V2h3.2z"/></svg>',
  doordash: '<svg viewBox="0 0 24 24"><path d="M3 7h12.5a5.5 5.5 0 0 1 0 11H9l2-3h4.5a2.5 2.5 0 0 0 0-5H5L3 7z"/></svg>',
  yelp: '<svg viewBox="0 0 24 24"><path d="M12 2l1.5 8.5L11 11 8 3.3C9.2 2.6 10.6 2.1 12 2zm2.5 10.5l7.2-2.2c.3 1.4.3 2.9-.1 4.3l-7.3-1.5.2-.6zm-1.9 2l4.6 6a9 9 0 0 1-4 1.4l-.9-7.3.3-.1zm-2.3-.6l-.4 7.6a9 9 0 0 1-4.1-1.9l4.2-5.9.3.2zm-.6-2.5L2.5 12.7c-.1-1.5.2-3 .9-4.3l6.4 3.6-.1.4z"/></svg>',
  threads: '<svg viewBox="0 0 24 24"><path d="M12.2 22c-3 0-5.3-1-6.8-2.9C4 17.4 3.3 15 3.3 12s.7-5.4 2.1-7.1C6.9 3 9.2 2 12.2 2c2.3 0 4.2.6 5.6 1.8 1.3 1.1 2.2 2.6 2.7 4.5l-2.4.6c-.8-3-2.8-4.5-5.9-4.5-2.2 0-3.8.7-4.9 2-1 1.3-1.6 3.2-1.6 5.6s.5 4.3 1.6 5.6c1.1 1.3 2.7 2 4.9 2 2 0 3.3-.5 4.4-1.5 1.2-1.2 1.2-2.6.8-3.5-.2-.6-.7-1-1.2-1.4-.1 1.2-.5 2.2-1.1 3-.9 1.1-2.1 1.7-3.6 1.8-1.2.1-2.3-.2-3.2-.8-1-.7-1.6-1.7-1.6-2.9-.1-2.3 1.8-4 4.6-4.1 1 0 1.9 0 2.7.2-.1-.7-.3-1.2-.7-1.6-.5-.5-1.2-.8-2.2-.8-1 0-1.9.4-2.4 1.1l-1.9-1.3c.9-1.3 2.4-2 4.3-2 3 0 4.8 1.9 5 5.1l.1.1c1.3.6 2.3 1.6 2.8 2.8.8 1.8.8 4.6-1.4 6.8-1.7 1.7-3.8 2.4-6 2.4zm.9-9.4h-.6c-1.7.1-2.4.9-2.4 1.6 0 .8.9 1.4 2.2 1.3 1.2-.1 2.4-.7 2.6-3-.6-.1-1.2-.1-1.8 0z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3z"/></svg>',
  google: '<svg viewBox="0 0 24 24"><path d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1a6.2 6.2 0 0 1 0-12.4c1.9 0 3.2.8 3.9 1.5l2.7-2.6A9.9 9.9 0 0 0 12 2a10 10 0 1 0 0 20c5.8 0 9.6-4 9.6-9.8 0-.7-.1-1.2-.2-1.7H12z"/></svg>',
  linktree: '<svg viewBox="0 0 24 24"><path d="M10.5 15h3v7h-3zM3 8.5h6.4L4.9 4.2 7 2.1l4 4.1V0h2v6.2l4-4.1 2.1 2.1-4.5 4.3H21v3h-6.4l4.6 4.4-2.1 2.1L12 12.8 6.9 18l-2.1-2.1 4.6-4.4H3z"/></svg>',
};
function renderSocials() {
  const list = [
    ["instagram", "Instagram"],
    ["tiktok", "TikTok"],
    ["facebook", "Facebook"],
    ["threads", "Threads"],
    ["whatsapp", "WhatsApp"],
    ["yelp", "Yelp"],
    ["linktree", "All links"],
  ];
  const html = `<a class="social social--dd" href="${LINKS.doordashTrailer}" target="_blank" rel="noopener" data-dd>${ICONS.doordash}<span>DoorDash</span></a>` +
    list.map(([k, label]) => `<a class="social" href="${LINKS[k]}" target="_blank" rel="noopener">${ICONS[k]}<span>${label}</span></a>`).join("");
  $$("[data-socials]").forEach((el) => { el.classList.add("socials"); el.innerHTML = html; });
}

/* Linktree-style link hub */
function renderHub() {
  const items = [
    ["doordashTruck", "doordash", "Order DoorDash — Food Truck", "185 Shelby Dr, Sparks", "hub__btn--dd"],
    ["doordashTrailer", "doordash", "Order DoorDash — Food Trailer", "10525 Stead Blvd, Reno", "hub__btn--dd"],
    ["googleReview", "google", "Leave us a Google Review", "Your 5★ helps a small business", "hub__btn--gold"],
    ["yelp", "yelp", "Review us on Yelp", ""],
    ["instagram", "instagram", "Instagram", "@jamaica_jerk_spot · weekly schedule"],
    ["tiktok", "tiktok", "TikTok", "@jamaica_jerk_spot"],
    ["facebook", "facebook", "Facebook", "Jamaica Jerk Spot"],
    ["threads", "threads", "Threads", "@jamaica_jerk_spot"],
    ["whatsapp", "whatsapp", "WhatsApp us", "775-470-3704"],
  ];
  $("[data-hub]").innerHTML = items.map(([k, ic, label, sub, cls = ""]) =>
    `<a class="hub__btn ${cls}" href="${LINKS[k]}" target="_blank" rel="noopener"><span class="hub__ic">${ICONS[ic]}</span><span class="hub__txt"><b>${label}</b>${sub ? `<small>${sub}</small>` : ""}</span><span class="hub__arrow">↗</span></a>`).join("");
}

/* DoorDash: two stores, let the customer pick */
function initDoorDash() {
  const m = $("[data-ddm]");
  $("[data-ddm-opts]").innerHTML = [
    ["doordashTruck", "🚚 Food Truck", "185 Shelby Dr, Sparks"],
    ["doordashTrailer", "🛻 Food Trailer", "10525 Stead Blvd, Reno"],
  ].map(([k, t, a]) => `<a class="ddm__opt" href="${LINKS[k]}" target="_blank" rel="noopener"><b>${t}</b><small>${a}</small></a>`).join("");
  let last;
  const close = () => { m.hidden = true; document.body.style.overflow = ""; last && last.focus(); };
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-dd]");
    if (t) { e.preventDefault(); last = t; m.hidden = false; document.body.style.overflow = "hidden"; $(".ddm__opt", m).focus(); return; }
    if (e.target === m || e.target.closest("[data-ddm-close]") || e.target.closest(".ddm__opt")) { if (!m.hidden) close(); }
  });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !m.hidden) close(); });
}

/* =========================================================
   Menu
   ========================================================= */
function renderMenu() {
  const tabs = $("[data-tabs]");
  const grid = $("[data-menu-grid]");
  const keys = Object.keys(MENU);
  tabs.innerHTML = keys.map((k, i) => `<button role="tab" aria-selected="${i === 0}" data-cat="${k}">${MENU[k].label}</button>`).join("");

  const show = (cat) => {
    $$("button", tabs).forEach((b) => b.setAttribute("aria-selected", b.dataset.cat === cat));
    grid.innerHTML = MENU[cat].items.map((it, i) => `
      <article class="dish" style="animation-delay:${i * 60}ms">
        <div class="dish__img ${it.img ? "" : "dish__img--none"}">
          ${it.img ? `<img src="${IMG + it.img}" alt="${esc(it.name)}" loading="lazy" />` : `<span class="dish__ph">${it.emoji || "🍽️"}<br>${esc(it.name)}</span>`}
          ${it.tag ? `<span class="dish__tag ${it.vegan ? "dish__tag--vegan" : ""}">${esc(it.tag)}</span>` : ""}
          <span class="dish__price">${money(it.price)}</span>
        </div>
        <div class="dish__body">
          <h3>${esc(it.name)}</h3>
          <p>${esc(it.desc)}</p>
          ${it.main ? `<button class="dish__add" data-build="${it.main.join(",")}">+ Build this plate</button>` : ""}
        </div>
      </article>`).join("");
  };
  tabs.addEventListener("click", (e) => { const b = e.target.closest("[data-cat]"); if (b) show(b.dataset.cat); });
  tabs.addEventListener("keydown", (e) => {
    if (!["ArrowRight", "ArrowLeft"].includes(e.key)) return;
    const btns = $$("button", tabs); const i = btns.indexOf(document.activeElement);
    const n = btns[(i + (e.key === "ArrowRight" ? 1 : -1) + btns.length) % btns.length];
    n.focus(); show(n.dataset.cat);
  });
  grid.addEventListener("click", (e) => {
    const b = e.target.closest("[data-build]"); if (!b) return;
    Builder.load(b.dataset.build.split(","));
    $("#build").scrollIntoView({ behavior: "smooth" });
  });
  show(keys[0]);
}

/* =========================================================
   Plate builder
   ========================================================= */
const Builder = (() => {
  const state = { mains: [], rice: null, side: null };

  // Look up the real board price for a selection
  function match() {
    if (!state.mains.length) return null;
    const key = [...state.mains].sort().join("|");
    return allItems().find((it) => it.main && [...it.main].sort().join("|") === key) || null;
  }

  function chip(id, label, media, group) {
    return `<button class="chip" type="button" aria-pressed="false" data-${group}="${id}">${media}${esc(label)}</button>`;
  }

  function init() {
    $("[data-mains]").innerHTML = Object.entries(MAINS).map(([id, m]) =>
      chip(id, m.name, m.img ? `<img src="${IMG + m.img}" alt="" loading="lazy" />` : `<span class="ph">${m.emoji}</span>`, "main")).join("");
    $("[data-rice]").innerHTML = RICE.map((r) => chip(r.id, r.name, "", "rice")).join("");
    $("[data-side]").innerHTML = SIDES.map((s) => chip(s.id, s.name, "", "side")).join("");

    $("[data-mains]").addEventListener("click", (e) => {
      const b = e.target.closest("[data-main]"); if (!b) return;
      const id = b.dataset.main;
      if (state.mains.includes(id)) state.mains = state.mains.filter((x) => x !== id);
      else { state.mains.push(id); if (state.mains.length > 2) state.mains.shift(); }
      render(true);
    });
    $("[data-rice]").addEventListener("click", (e) => { const b = e.target.closest("[data-rice]"); if (b && b.dataset.rice) { state.rice = b.dataset.rice; render(true); } });
    $("[data-side]").addEventListener("click", (e) => { const b = e.target.closest("[data-side]"); if (b && b.dataset.side) { state.side = b.dataset.side; render(true); } });
    $("[data-surprise]").addEventListener("click", surprise);
    render(false);
  }

  function fill(cell, label, bg) {
    const el = $(`[data-cell="${cell}"]`);
    const was = el.classList.contains("is-filled") && el.dataset.label === label;
    el.dataset.label = label || "";
    el.classList.toggle("is-filled", !!label);
    el.style.background = bg || "";
    el.innerHTML = `<span>${esc(label || el.dataset.empty)}</span>`;
    if (label && !was) { el.classList.remove("pop"); void el.offsetWidth; el.classList.add("pop"); }
  }

  function render(bump) {
    $$("[data-main]").forEach((b) => b.setAttribute("aria-pressed", state.mains.includes(b.dataset.main)));
    $$("button[data-rice]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.rice === state.rice));
    $$("button[data-side]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.side === state.side));

    const cells = { main: "Pick a main", rice: "Rice", side: "Side", plant: "Plantains" };
    Object.entries(cells).forEach(([k, v]) => ($(`[data-cell="${k}"]`).dataset.empty = v));

    const names = state.mains.map((m) => MAINS[m].name);
    const imgs = state.mains.map((m) => MAINS[m].img).filter(Boolean);
    const mainBg = imgs.length === 2
      ? `linear-gradient(90deg, transparent 49.5%, #111 49.5% 50.5%, transparent 50.5%), url(${IMG + imgs[0]}) left/50% 100% no-repeat, url(${IMG + imgs[1]}) right/50% 100% no-repeat`
      : imgs.length ? `url(${IMG + imgs[0]}) center/cover` : state.mains.length ? "#0b3d1f" : "";
    fill("main", names.join(" + "), mainBg);
    const r = RICE.find((x) => x.id === state.rice), s = SIDES.find((x) => x.id === state.side);
    fill("rice", r && r.name, r && (r.id === "rice-peas" ? `radial-gradient(ellipse 4px 3px, #5a1f1a 90%, transparent) 0 0/26px 20px, radial-gradient(ellipse 4px 3px, #5a1f1a 90%, transparent) 13px 10px/26px 20px, ${r.color}` : r.color));
    fill("side", s && s.name, s && s.color);
    fill("plant", state.mains.length ? "Fried Plantains 🍌" : "", "linear-gradient(90deg,#8a4a12,#d58a2a,#8a4a12)");

    if (bump) { const box = $("[data-box]"); box.classList.add("is-bump"); setTimeout(() => box.classList.remove("is-bump"), 350); }

    const nameEl = $("[data-plate-name]"), priceEl = $("[data-plate-price]"), msgEl = $("[data-plate-msg]"), sms = $("[data-plate-sms]");
    if (!state.mains.length) {
      nameEl.textContent = "Your plate is empty"; priceEl.textContent = "—";
      msgEl.textContent = "Choose a main to get started."; sms.classList.add("is-disabled"); return;
    }
    const item = match();
    nameEl.textContent = item ? item.name : names.join(" + ");
    priceEl.textContent = item ? money(item.price) : "Ask us";
    const notes = [];
    if (!item) notes.push("This combo isn't on the board yet — text us and we'll see what we can do!");
    else notes.push("Matches our menu board.");
    if (!state.rice || !state.side) notes.push("Pick your rice and side to finish the plate.");
    if (state.mains.includes("mushrooms") && state.side === "mac") notes.push("Heads up: mac & cheese isn't vegan — go cabbage for fully plant-based.");
    msgEl.textContent = notes.join(" ");

    sms.classList.remove("is-disabled");
    const order = `Hi Jamaica Jerk Spot! I'd like to order: ${item ? item.name : names.join(" + ")}` +
      `${r ? ` with ${r.name}` : ""}${s ? ` and ${s.name}` : ""}, plus fried plantains. Where are you today?`;
    sms.href = smsHref(order);
  }

  function load(mains) { state.mains = mains.slice(0, 2); render(true); toast("Added to your plate 🍽️"); }

  function surprise() {
    const plates = allItems().filter((i) => i.main);
    const pick = plates[Math.floor(Math.random() * plates.length)];
    state.mains = [...pick.main];
    state.rice = RICE[Math.floor(Math.random() * RICE.length)].id;
    state.side = pick.vegan ? "cabbage" : SIDES[Math.floor(Math.random() * SIDES.length)].id;
    render(true);
    toast(`Chef's pick: ${pick.name}!`);
  }

  return { init, load };
})();

/* =========================================================
   Schedule / Find the truck
   ========================================================= */
function stopStatus(s, now) {
  if (s.private || !s.start) return s.date < now.date ? "past" : s.date === now.date ? "private" : "upcoming";
  if (s.date < now.date) return "past";
  if (s.date > now.date) return "upcoming";
  const a = toMins(s.start), b = toMins(s.end);
  if (now.mins < a) return "later";
  if (now.mins < b) return "live";
  return "past";
}

function renderNow() {
  const now = renoNow();
  const box = $("[data-now]");
  const pill = $("[data-today-pill]");
  const kinds = [["truck", "Food Truck"], ["trailer", "Food Trailer"]];
  let pillHtml = "";

  box.innerHTML = kinds.map(([k, label]) => {
    const stops = SCHEDULE.filter((s) => s.kind === k && !s.private);
    const live = stops.find((s) => stopStatus(s, now) === "live");
    const later = stops.find((s) => stopStatus(s, now) === "later");
    const next = stops.find((s) => stopStatus(s, now) === "upcoming");
    let badge, head, body, cta = "";
    if (live) {
      const left = toMins(live.end) - now.mins;
      badge = `<span class="live">Open now</span>`;
      head = live.title;
      body = `<p>${esc(live.place)}</p><p>Until ${fmtTime(live.end)} · <span class="now__count">closes in ${fmtDur(left)}</span></p>`;
      cta = `<a class="btn btn--gold btn--sm" href="${mapsUrl(live.place)}" target="_blank" rel="noopener">Directions</a>`;
      if (!pillHtml) pillHtml = `<span class="live">Live</span> ${label} is open now at <strong>${esc(live.title)}</strong> until ${fmtTime(live.end)} →`;
    } else if (later) {
      badge = `<span class="live live--soon">Today</span>`;
      head = later.title;
      body = `<p>${esc(later.place)}</p><p>${fmtTime(later.start)} – ${fmtTime(later.end)} · <span class="now__count">opens in ${fmtDur(toMins(later.start) - now.mins)}</span></p>`;
      cta = `<a class="btn btn--gold btn--sm" href="${mapsUrl(later.place)}" target="_blank" rel="noopener">Directions</a>`;
      if (!pillHtml) pillHtml = `<span class="live live--soon">Today</span> ${label} opens at <strong>${fmtTime(later.start)}</strong> · ${esc(later.title)} →`;
    } else if (next) {
      const d = dayInfo(next.date);
      badge = `<span class="live live--off">Next stop</span>`;
      head = next.title;
      body = `<p>${esc(next.place)}</p><p>${d.long} · ${fmtTime(next.start)} – ${fmtTime(next.end)}</p>`;
      cta = `<a class="btn btn--line btn--sm" href="${mapsUrl(next.place)}" target="_blank" rel="noopener">Directions</a>`;
    } else {
      badge = `<span class="live live--off">Schedule coming</span>`;
      head = "New week loading…";
      body = `<p>This week's stops drop on Instagram — follow so you don't miss us.</p>`;
      cta = `<a class="btn btn--gold btn--sm" href="${LINKS.instagram}" target="_blank" rel="noopener">See Instagram</a>`;
    }
    return `<div class="now__card now__card--${k}"><div class="now__label">${label} ${badge}</div><h3>${esc(head)}</h3>${body}${cta}</div>`;
  }).join("");

  if (!pillHtml) {
    const next = SCHEDULE.find((s) => !s.private && stopStatus(s, now) === "upcoming");
    if (next) { const d = dayInfo(next.date); pillHtml = `📍 Next stop: <strong>${esc(next.title)}</strong> · ${d.long}, ${fmtTime(next.start)} →`; }
    else pillHtml = `📍 Weekly schedule drops on Instagram — <strong>tap to find us</strong> →`;
  }
  pill.innerHTML = `<a href="#find">${pillHtml}</a>`;
}

function renderWeek(filter = "all") {
  const now = renoNow();
  const list = $("[data-week]");
  const stops = SCHEDULE.filter((s) => filter === "all" || s.kind === filter);
  if (!stops.length) { list.innerHTML = `<li class="week__empty">No stops posted yet.</li>`; return; }
  list.innerHTML = stops.map((s) => {
    const d = dayInfo(s.date);
    const st = stopStatus(s, now);
    const cls = st === "past" ? "is-past" : s.date === now.date ? "is-today" : "";
    const right = s.private
      ? `<span class="stop__private">🔒 Closed to public</span>`
      : `<a class="stop__go" href="${mapsUrl(s.place)}" target="_blank" rel="noopener">${st === "live" ? "🟢 Open now" : "Directions"}</a>`;
    return `<li class="stop ${cls}">
      <div class="stop__date"><small>${d.dow}</small><b>${d.day}</b><small>${d.mon}</small></div>
      <div>
        <span class="stop__kind ${s.kind === "trailer" ? "stop__kind--trailer" : ""}">${s.kind === "truck" ? "🚚 Food Truck" : "🛻 Food Trailer"}${s.date === now.date ? " · Today" : ""}</span>
        <h4>${esc(s.title)}</h4>
        <p>${s.private ? "Private event" : `${esc(s.place)} · ${fmtTime(s.start)} – ${fmtTime(s.end)}`}</p>
      </div>
      ${right}
    </li>`;
  }).join("");
}

function initSchedule() {
  renderNow(); renderWeek();
  $(".week__filter").addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter]"); if (!b) return;
    $$(".week__filter button").forEach((x) => x.classList.toggle("is-on", x === b));
    renderWeek(b.dataset.filter);
  });
  setInterval(() => { renderNow(); renderWeek($(".week__filter .is-on").dataset.filter); }, 60_000);
}

/* =========================================================
   Flavor Match quiz
   ========================================================= */
const QUIZ = [
  { q: "Pick your vibe", key: "vibe", opts: [["smoky", "🔥", "Smoky, off the grill"], ["slow", "🍲", "Slow-cooked & saucy"], ["creamy", "🍝", "Creamy & cheesy"], ["plant", "🌱", "Plant-based please"]] },
  { q: "Land or sea?", key: "src", opts: [["land", "🐓", "Land all day"], ["sea", "🦐", "Seafood for me"], ["both", "🌊", "Give me both"], ["none", "🥬", "Neither — veggies"]] },
  { q: "How hungry yuh deh?", key: "hunger", opts: [["light", "🙂", "Likkle hungry"], ["hungry", "😋", "Proper hungry"], ["starving", "🤤", "Mi belly empty!"]] },
];
function quizPick(a) {
  if (a.vibe === "plant" || a.src === "none") return a.hunger === "light" ? "callaloo" : "mushrooms";
  if (a.vibe === "creamy") return a.hunger === "starving" ? "pasta-shortribs" : "pasta-ribs";
  if (a.vibe === "slow") {
    if (a.src === "sea" || a.src === "both") return "oxtails-shrimp";
    if (a.hunger === "light") return "ala-goat";
    return a.hunger === "starving" ? "shortribs-oxtails" : "oxtails";
  }
  if (a.src === "both") return "chicken-shrimp";
  if (a.src === "sea") return a.hunger === "starving" ? "chicken-shrimp" : "jerk-shrimp";
  if (a.hunger === "light") return "ala-chicken";
  return a.hunger === "starving" ? "ribs-chicken" : "jerk-chicken-plate";
}
function initQuiz() {
  const el = $("[data-quiz]");
  let step = 0, ans = {};
  const draw = () => {
    if (step < QUIZ.length) {
      const q = QUIZ[step];
      el.innerHTML = `<div class="quiz__progress">${QUIZ.map((_, i) => `<i class="${i <= step ? "on" : ""}"></i>`).join("")}</div>
        <p class="quiz__q">${q.q}</p>
        <div class="quiz__opts">${q.opts.map(([v, e, t]) => `<button type="button" data-v="${v}"><span>${e}</span>${t}</button>`).join("")}</div>`;
      return;
    }
    const it = findItem(quizPick(ans));
    el.innerHTML = `<div class="quiz__result">
      ${it.img ? `<img src="${IMG + it.img}" alt="${esc(it.name)}" />` : `<div class="ph">${it.emoji || "🍽️"}</div>`}
      <div>
        <small>Your match</small>
        <h3>${esc(it.name)}</h3>
        <p>${esc(it.desc)} <b>${money(it.price)}</b></p>
        <div class="btns">
          ${it.main ? `<button class="btn btn--gold btn--sm" data-q-build="${it.main.join(",")}">Build this plate</button>` : ""}
          <a class="btn btn--green btn--sm" href="${LINKS.doordashTrailer}" target="_blank" rel="noopener" data-dd>Order</a>
          <button class="btn btn--line-dark btn--sm" data-q-again>Try again</button>
        </div>
      </div></div>`;
  };
  el.addEventListener("click", (e) => {
    const o = e.target.closest("[data-v]");
    if (o) { ans[QUIZ[step].key] = o.dataset.v; step++; draw(); return; }
    if (e.target.closest("[data-q-again]")) { step = 0; ans = {}; draw(); return; }
    const b = e.target.closest("[data-q-build]");
    if (b) { Builder.load(b.dataset.qBuild.split(",")); $("#build").scrollIntoView({ behavior: "smooth" }); }
  });
  draw();
}

/* =========================================================
   Reels + Patois
   ========================================================= */
function initReels() {
  const reels = $$(".reel");
  reels.forEach((r) => {
    const v = $("video", r);
    r.addEventListener("click", (e) => {
      if (e.target.closest(".reel__sound")) {
        v.muted = !v.muted; e.target.textContent = v.muted ? "🔇" : "🔊";
        if (v.paused) v.play();
        r.classList.add("is-playing"); return;
      }
      if (v.paused) { reels.forEach((o) => { if (o !== r) { $("video", o).pause(); o.classList.remove("is-playing"); } }); v.play(); r.classList.add("is-playing"); }
      else { v.pause(); r.classList.remove("is-playing"); }
    });
  });
  const io = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (!en.isIntersecting) { const v = $("video", en.target); v.pause(); en.target.classList.remove("is-playing"); }
  }), { threshold: 0.2 });
  reels.forEach((r) => io.observe(r));
}
function initPatois() {
  const g = $("[data-patois]");
  g.innerHTML = PATOIS.map(([p, m]) => `<button class="flip" type="button" aria-label="${esc(p)} — tap to reveal meaning"><div class="flip__in"><div class="flip__f">${esc(p)}</div><div class="flip__b">${esc(m)}</div></div></button>`).join("");
  g.addEventListener("click", (e) => { const f = e.target.closest(".flip"); if (f) f.classList.toggle("is-flipped"); });
}

/* =========================================================
   Booking form
   ========================================================= */
function initForm() {
  const form = $("[data-form]");
  const status = $("[data-form-status]");
  const guests = $("[data-guests]"), out = $("[data-guests-out]");
  const dishes = ["Jerk Chicken", "Oxtails", "Curry Goat", "Jerk Shrimp", "Rasta Pasta", "Short Ribs", "Ackee & Saltfish", "Vegan options"];
  $("[data-dish-checks]").innerHTML = dishes.map((d) => `<label><input type="checkbox" name="dishes" value="${d}" /><span>${d}</span></label>`).join("");

  const sync = () => { out.textContent = guests.value === guests.max ? `${guests.value}+` : guests.value; };
  guests.addEventListener("input", sync); sync();

  const toggleEvent = () => {
    const t = form.inquiry.value;
    $$("[data-event-only]", form).forEach((el) => el.classList.toggle("is-hidden", t === "General question"));
  };
  form.addEventListener("change", (e) => { if (e.target.name === "inquiry") toggleEvent(); });
  toggleEvent();

  const today = new Date().toISOString().slice(0, 10);
  form.date.min = today;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form__status"; status.textContent = "";
    let ok = true;
    ["name", "phone", "message"].forEach((n) => {
      const f = form[n]; const bad = !f.value.trim();
      f.closest(".field").classList.toggle("is-error", bad); if (bad) ok = false;
    });
    if (form.email.value && !form.email.checkValidity()) { form.email.closest(".field").classList.add("is-error"); ok = false; }
    if (!ok) { status.classList.add("err"); status.textContent = "Please fill in the highlighted fields."; return; }

    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    data.dishes = fd.getAll("dishes").join(", ");
    if (data.inquiry === "General question") ["date", "eventType", "guests", "location", "dishes"].forEach((k) => delete data[k]);

    const btn = $("button[type=submit]", form);
    btn.disabled = true; btn.textContent = "Sending…";
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error(String(res.status));
      form.reset(); sync(); toggleEvent();
      status.classList.add("ok");
      status.textContent = "Respect! 🇯🇲 Your request was sent — we'll reach out soon.";
      toast("Request sent — bless up!");
    } catch {
      const body = `Hi Jamaica Jerk Spot! I'm ${data.name} (${data.phone}). ${data.inquiry}` +
        `${data.date ? ` on ${data.date}` : ""}${data.guests ? ` for about ${data.guests} guests` : ""}${data.location ? ` in ${data.location}` : ""}. ${data.message}`;
      status.classList.add("err");
      status.innerHTML = `Couldn't send online right now. <a href="${smsHref(body)}">Tap here to text your request</a> or call <a href="tel:${PHONE}">775-470-3704</a>.`;
    } finally {
      btn.disabled = false; btn.textContent = "Send request";
    }
  });
}

/* =========================================================
   Nav, reveal, smoke
   ========================================================= */
function initNav() {
  const nav = $(".nav"), burger = $(".nav__burger"), drawer = $("#drawer");
  const onScroll = () => nav.classList.toggle("is-solid", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const close = () => { drawer.hidden = true; burger.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; };
  burger.addEventListener("click", () => {
    const open = drawer.hidden;
    drawer.hidden = !open; burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  drawer.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}
function initReveal() {
  const els = $$(".section__head, .now, .week, .find__extra, .quiz__card, .reels, .patois, .story__img, .story__copy, .catering__pitch, .form, .build__panel, .build__box, .menu__foot");
  els.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}
function initSmoke() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = $(".hero__smoke"), ctx = c.getContext("2d");
  let w, h, parts = [], raf;
  const resize = () => { w = c.width = c.offsetWidth * devicePixelRatio; h = c.height = c.offsetHeight * devicePixelRatio; };
  const spawn = () => ({ x: Math.random() * w, y: h + Math.random() * 60, r: (Math.random() * 2 + 0.6) * devicePixelRatio, vy: -(Math.random() * 0.6 + 0.25) * devicePixelRatio, vx: (Math.random() - 0.5) * 0.3, a: Math.random() * 0.5 + 0.2, gold: Math.random() < 0.6 });
  resize(); addEventListener("resize", resize);
  parts = Array.from({ length: 70 }, () => { const p = spawn(); p.y = Math.random() * h; return p; });
  const tick = () => {
    ctx.clearRect(0, 0, w, h);
    parts.forEach((p, i) => {
      p.x += p.vx + Math.sin(p.y / 60) * 0.25; p.y += p.vy;
      const fade = Math.min(1, p.y / (h * 0.6));
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold ? `rgba(254,170,0,${p.a * fade})` : `rgba(255,240,200,${p.a * fade * 0.6})`;
      ctx.fill();
      if (p.y < -10) parts[i] = spawn();
    });
    raf = requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(([en]) => { if (en.isIntersecting) { if (!raf) tick(); } else { cancelAnimationFrame(raf); raf = null; } });
  io.observe(c);
}

document.addEventListener("DOMContentLoaded", () => {
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  renderSocials();
  renderHub();
  initDoorDash();
  renderMenu();
  Builder.init();
  initSchedule();
  initQuiz();
  initReels();
  initPatois();
  initForm();
  initNav();
  initReveal();
  initSmoke();
});
