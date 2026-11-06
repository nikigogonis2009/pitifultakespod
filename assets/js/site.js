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

  // Hot Takes board host filter
  var chips = document.querySelectorAll('[data-board-filter]');
  var notes = document.querySelectorAll('.board .note');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var host = chip.dataset.boardFilter;
      chips.forEach(function (c) { var on = c === chip; c.classList.toggle('is-active', on); c.setAttribute('aria-pressed', on); });
      notes.forEach(function (n) { n.classList.toggle('is-hidden', host !== 'all' && n.dataset.host !== host); });
    });
  });

  // Wrapped countdown
  var cd = document.querySelector('[data-countdown]');
  if (cd) {
    var target = new Date(cd.dataset.countdown.replace(/([+-]\d\d)(\d\d)$/, '$1:$2')).getTime();
    var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
    var tick = function () {
      var left = Math.max(0, target - Date.now());
      var d = Math.floor(left / 864e5), h = Math.floor(left / 36e5) % 24, m = Math.floor(left / 6e4) % 60;
      cd.querySelector('[data-cd="d"]').textContent = d;
      cd.querySelector('[data-cd="h"]').textContent = pad(h);
      cd.querySelector('[data-cd="m"]').textContent = pad(m);
    };
    tick(); setInterval(tick, 30000);
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
