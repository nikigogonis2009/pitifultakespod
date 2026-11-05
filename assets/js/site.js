(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // Sport filters on the All Takes page (supports /takes/#nfl links)
  var filters = document.querySelectorAll('.filter');
  var cards = document.querySelectorAll('[data-filter-target] .card');
  var empty = document.querySelector('[data-empty]');
  function applyFilter(sport) {
    var shown = 0;
    filters.forEach(function (f) {
      var on = f.dataset.filter === sport;
      f.classList.toggle('is-active', on);
      f.setAttribute('aria-pressed', on);
    });
    cards.forEach(function (c) {
      var match = sport === 'all' || c.dataset.sport === sport;
      c.classList.toggle('is-hidden', !match);
      if (match) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  }
  if (filters.length) {
    filters.forEach(function (f) {
      f.addEventListener('click', function () {
        applyFilter(f.dataset.filter);
        history.replaceState(null, '', f.dataset.filter === 'all' ? location.pathname : '#' + f.dataset.filter);
      });
    });
    var hash = location.hash.slice(1);
    if (hash) applyFilter(hash);
  }

  // Share button
  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('show'); });
    setTimeout(function () { t.classList.remove('show'); setTimeout(function () { t.remove(); }, 300); }, 1800);
  }
  document.querySelectorAll('[data-share]').forEach(function (b) {
    b.addEventListener('click', function () {
      var data = { title: b.dataset.title, url: location.href };
      if (navigator.share) { navigator.share(data).catch(function () {}); return; }
      if (navigator.clipboard) {
        navigator.clipboard.writeText(location.href).then(function () { toast('Link copied'); });
      }
    });
  });
})();
