function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function setYear() {
  const el = qs("[data-year]");
  if (el) el.textContent = String(new Date().getFullYear());
}

function initHeaderElevate() {
  const header = qs("[data-elevate]");
  if (!header) return;
  const onScroll = () => {
    header.setAttribute("data-elevate", window.scrollY > 4 ? "true" : "false");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileNav() {
  const toggle = qs("[data-nav-toggle]");
  const list = qs("[data-nav-list]");
  if (!toggle || !list) return;

  const close = () => {
    list.removeAttribute("data-open");
    toggle.setAttribute("aria-label", "Open menu");
  };
  const open = () => {
    list.setAttribute("data-open", "true");
    toggle.setAttribute("aria-label", "Close menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = list.getAttribute("data-open") === "true";
    if (isOpen) close();
    else open();
  });

  qsa("a.nav-link", list).forEach((a) => a.addEventListener("click", close));

  document.addEventListener("click", (e) => {
    if (!list.getAttribute("data-open")) return;
    const t = e.target;
    if (!(t instanceof Node)) return;
    if (list.contains(t) || toggle.contains(t)) return;
    close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initContactFormMailto() {
  const form = qs("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const to = "you@example.com";
    const subject = encodeURIComponent(`Portfolio message from ${name || "Someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

setYear();
initHeaderElevate();
initMobileNav();
initContactFormMailto();

