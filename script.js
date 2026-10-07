const P = window.PROJECTS || [];
const chips = a => `<ul class="chips">${a.map(t => `<li>${t}</li>`).join("")}</ul>`;
const typeLabel = t => (t === "android" ? "Android app" : "Web app");

/* Mobile menu */
const menuBtn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); } });

/* Home page: project cards + filter */
const grid = document.getElementById("project-grid");
if (grid) {
  const draw = f => {
    grid.innerHTML = P.filter(p => f === "all" || p.type === f).map(p => `
      <article class="card">
        <div class="card-top"><span>${typeLabel(p.type)}</span><span class="status">${p.status}</span></div>
        <h3>${p.title}</h3>
        <p>${p.tagline}</p>
        ${chips(p.stack.slice(0, 4))}
        <div class="card-actions">
          <a class="btn primary" href="project.html?p=${p.slug}">View details</a>
          <a class="btn" href="${p.links[0].url}" target="_blank" rel="noopener">${p.type === "android" && p.status === "Google Play" ? "Google Play" : p.status === "Open source" ? "Source code" : "Live site"}</a>
        </div>
      </article>`).join("");
  };
  draw("all");
  document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
    draw(b.dataset.filter);
  }));

  /* Highlight current section in nav */
  const links = [...menu.querySelectorAll("a")];
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(s => io.observe(s));

  /* Contact form (Formspree) */
  const form = document.getElementById("contact-form"), btn = document.getElementById("send-btn"), st = document.getElementById("form-status");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    btn.disabled = true; btn.textContent = "Sending..."; st.className = ""; st.textContent = "";
    try {
      const r = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (r.ok) { st.textContent = "Message sent. I'll reply soon."; st.className = "ok"; form.reset(); }
      else { st.textContent = "Message not sent. Please try again or email me directly."; st.className = "err"; }
    } catch { st.textContent = "Network error. Check your connection and try again."; st.className = "err"; }
    btn.disabled = false; btn.textContent = "Send message";
  });
}

/* Project detail page */
const root = document.getElementById("detail-root");
if (root) {
  const i = P.findIndex(p => p.slug === new URLSearchParams(location.search).get("p"));
  if (i < 0) {
    root.innerHTML = `<a class="back" href="index.html#projects">Back to projects</a><h1 style="margin:16px 0">Project not found</h1><p class="lead">That project doesn't exist. <a href="index.html#projects">See all projects</a>.</p>`;
  } else {
    const p = P[i], prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];
    document.title = `${p.title} | Devanshu Panchal`;
    document.querySelector('meta[name=description]').content = p.tagline;
    root.innerHTML = `
      <a class="back" href="index.html#projects">Back to projects</a>
      <div class="detail-head">
        <span class="status">${p.status}</span>
        <h1>${p.title}</h1>
        <p class="lead">${p.tagline}</p>
        <div class="cta">${p.links.map(l => `<a class="btn ${l.primary ? "primary" : ""}" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")}</div>
      </div>
      <div class="detail">
        <div>
          ${p.images ? `<div class="shots">${p.images.map(s => `<img src="${s}" alt="${p.title} screenshot" loading="lazy">`).join("")}</div>` : ""}
          <section><h2>Overview</h2><p>${p.overview}</p></section>
          <section><h2>Key features</h2><ul class="plain">${p.features.map(f => `<li>${f}</li>`).join("")}</ul></section>
          <section><h2>What I learned</h2><p>${p.learned}</p></section>
        </div>
        <aside>
          <div class="box"><h2>Type</h2><p>${typeLabel(p.type)}</p></div>
          <div class="box"><h2>Tech stack</h2>${chips(p.stack)}</div>
        </aside>
      </div>
      <nav class="pager" aria-label="Other projects">
        <a href="project.html?p=${prev.slug}"><small>Previous</small><b>${prev.title}</b></a>
        <a href="project.html?p=${next.slug}" style="text-align:right"><small>Next</small><b>${next.title}</b></a>
      </nav>`;
  }
}
