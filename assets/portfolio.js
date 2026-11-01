(function () {
  var d = document, root = d.documentElement;
  var y = d.getElementById('yr'); if (y) y.textContent = new Date().getFullYear();
  var b = d.querySelector('.burger'), l = d.getElementById('navlinks');
  if (b && l) {
    var set = function (o) { l.classList.toggle('open', o); b.setAttribute('aria-expanded', o); b.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); };
    b.addEventListener('click', function () { set(b.getAttribute('aria-expanded') !== 'true'); });
    l.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  }
  var noanim = /[?&]noanim\b/.test(location.search) || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window);
  if (noanim) { root.classList.add('noanim'); return; }
  root.classList.add('js');
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, {rootMargin: '0px 0px -6% 0px'});
  d.querySelectorAll('.reveal').forEach(function (el, i) { el.style.transitionDelay = (i % 3) * 70 + 'ms'; io.observe(el); });
})();
