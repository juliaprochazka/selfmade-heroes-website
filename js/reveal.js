(function () {
  var targets = document.querySelectorAll(
    ".section-head, .card, .manifesto-item, .format-card, .persona-card, .team-card, .step, .price-card, .fit-col, .offer-side"
  );

  if (!("IntersectionObserver" in window) || targets.length === 0) {
    return;
  }

  targets.forEach(function (el, i) {
    el.setAttribute("data-reveal", "");
    el.style.transitionDelay = (i % 4) * 60 + "ms";
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
