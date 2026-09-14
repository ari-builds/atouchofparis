(function () {
  var go = function () {
    var BOOK = "https://booksy.com/en-us/1605658_atouchofparis_braids-locs_18698_north-chicago";
    var IG = "https://www.instagram.com/da_real_atouchofpariss/";

    function esc(s) {
      return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    var header = document.createElement("header");
    header.className = "top";
    var here = document.body.getAttribute("data-page") || "home";
    function on(rel) { return here === rel ? ' class="on"' : ""; }
    header.innerHTML =
      '<div class="inner top-inner">' +
      '<a class="brand" href="index.html" aria-label="A Touch of Paris, Braids and Locs - home">' +
      '<span class="brand-mark">AP</span>' +
      '<span class="brand-name">A Touch of Paris<span>Braids &amp; Locs &middot; North Chicago</span></span>' +
      "</a>" +
      '<div class="top-ph">' +
      '<span class="pwhy">Book a Look &middot; Satisfaction Guaranteed</span>' +
      '<a class="btn btn-call" href="' + BOOK + '" target="_blank" rel="noopener">Book on Booksy</a>' +
      "</div>" +
      '<button class="burger" aria-expanded="false" aria-controls="menu" aria-label="Open menu">' +
      "<span></span><span></span><span></span>" +
      "</button>" +
      "</div>";

    var ctaBar = document.createElement("div");
    ctaBar.className = "cta-bar";
    ctaBar.id = "ctaBar";
    ctaBar.innerHTML =
      '<a href="' + BOOK + '" target="_blank" rel="noopener">Book your look on Booksy <span aria-hidden="true">&#8594;</span></a>';

    var menu = document.createElement("div");
    menu.className = "menu";
    menu.id = "menu";
    menu.setAttribute("aria-hidden", "true");
    menu.innerHTML =
      '<div class="menu-inner">' +
      '<div class="menu-top">' +
      '<a class="brand" href="index.html" aria-label="home">' +
      '<span class="brand-mark">AP</span>' +
      '<span class="brand-name">A Touch of Paris<span>Braids &amp; Locs</span></span>' +
      "</a>" +
      '<button class="menu-x" aria-label="Close menu">&times;</button>' +
      "</div>" +
      '<nav class="menu-groups">' +
      '<div class="mgroup"><h4>Explore</h4>' +
      "<a href='index.html'" + on("home") + ">Home</a>" +
      "<a href='about.html'" + on("about") + ">About Paris</a>" +
      "<a href='services.html'" + on("services") + ">Services &amp; prices</a>" +
      "<a href='gallery.html'" + on("gallery") + ">Portfolio</a>" +
      "</div>" +
      '<div class="mgroup"><h4>Book</h4>' +
      "<a href='booking.html'" + on("booking") + ">Book an appointment</a>" +
      '<a href="' + BOOK + '" target="_blank" rel="noopener">Open Booksy page</a>' +
      '<a href="' + BOOK + '/gift-cards" target="_blank" rel="noopener">Gift cards</a>' +
      "</div>" +
      '<div class="mgroup"><h4>Follow</h4>' +
      '<a href="' + IG + '" target="_blank" rel="noopener">Instagram &ndash; da_real_atouchofpariss</a>' +
      "</div>" +
      "</nav>" +
      '<div class="menu-cta">' +
      '<a class="btn btn-call" style="width:100%;text-align:center" href="' + BOOK + '" target="_blank" rel="noopener">Book on Booksy</a>' +
      '<p class="menu-note">2234 Green Bay Rd, Unit A, North Chicago, IL 60064 &middot; 5.0&starf; on Booksy (44 reviews)</p>' +
      "</div>" +
      "</div>";

    var footer = document.createElement("footer");
    footer.innerHTML =
      '<div class="inner">' +
      '<div class="foot-grid">' +
      '<div class="foot-brand">' +
      '<span class="brand-name">A Touch of Paris<span>Braids &amp; Locs</span></span>' +
      "<p>Paris has been a stylist for 15+ years, specializing in braids, locs and weaves. Every look is booked, detailed and guaranteed &ndash; Book a Look.</p>" +
      '<span class="foot-loc">2234 Green Bay Rd, Unit A, North Chicago, IL 60064</span>' +
      "</div>" +
      '<div> <h4>Popular looks</h4><nav class="links">' +
      "<a href='services.html#knotless'>Knotless braids</a>" +
      "<a href='services.html#feedins'>Feed-ins</a>" +
      "<a href='services.html#stitch'>Stitch braids</a>" +
      "<a href='services.html#locs'>Loc services</a>" +
      "<a href='services.html#sewins'>Sew-ins</a>" +
      "<a href='services.html#kids'>Kids styles</a>" +
      "</nav></div>" +
      '<div class="foot-contact"> <h4>Get in touch</h4>' +
      '<p style="margin-top:.6rem;font-size:.92rem;color:#d9cbb4">' +
      'Instagram: <a href="' + IG + '" target="_blank" rel="noopener">da_real_atouchofpariss</a><br>' +
      "Booksy: <a href='" + BOOK + "' target='_blank' rel='noopener'>atouchofparis</a><br>" +
      '<span style="font-size:.8rem">Same-day? Message on Instagram before booking. Kid services book before 3&nbsp;PM. Prices shown are starting prices.</span>' +
      "</p>" +
      "</div>" +
      "</div>" +
      '<div class="copy">&copy; <span class="yr">2026</span> A Touch of Paris &middot; Braids &amp; Locs &middot; North Chicago, IL &middot; 5.0&starf; (44 reviews) &middot; Satisfaction Guaranteed</div>' +
      "</div>";

    document.body.insertBefore(ctaBar, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);
    document.body.appendChild(menu);
    document.body.appendChild(footer);

    var btn = header.querySelector(".burger");
    var mm = menu;
    var closeBtn = menu.querySelector(".menu-x");
    function openM() {
      mm.classList.add("open");
      mm.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function closeM() {
      mm.classList.remove("open");
      mm.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    btn.addEventListener("click", openM);
    closeBtn.addEventListener("click", closeM);
    mm.addEventListener("click", function (e) {
      if (e.target === mm) closeM();
    });
    mm.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeM);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeM();
    });

    var cta = document.getElementById("ctaBar");
    var shownP = false;
    function onScroll() {
      header.classList.toggle("scrolled", window.scrollY > 8);
      if (!shownP && window.scrollY > 120) {
        shownP = true;
        cta.classList.add("in");
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    function reveal(els) {
      els.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
          el.classList.add("in");
        }
      });
    }
    var fades = document.querySelectorAll(".fade");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      fades.forEach(function (el) { io.observe(el); });
    } else {
      fades.forEach(function (el) { el.classList.add("in"); });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", go);
  } else {
    go();
  }
})();