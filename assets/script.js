/* Massage Kowis — interaksi ringan, tanpa dependency */
(function () {
  "use strict";

  /* Tahun berjalan di footer */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* Bayangan header saat halaman di-scroll */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Animasi muncul saat elemen masuk layar */
  var targets = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(function (el) { observer.observe(el); });
})();
