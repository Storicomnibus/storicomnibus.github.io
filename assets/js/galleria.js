// Menu su telefono
document.querySelectorAll('.menu-bottone').forEach(function (b) {
  b.addEventListener('click', function () {
    var m = document.getElementById('menu');
    var aperto = m.classList.toggle('aperto');
    b.setAttribute('aria-expanded', aperto);
  });
});
// Visore foto a schermo intero per le gallerie
document.querySelectorAll('[data-galleria]').forEach(function (g) {
  var link = Array.prototype.slice.call(g.querySelectorAll('a.foto'));
  var i = 0, v = null;
  function mostra() {
    v.querySelector('img').src = link[i].href;
    v.querySelector('.conta').textContent = (i + 1) + ' / ' + link.length;
  }
  function chiudi() { v.remove(); v = null; document.removeEventListener('keydown', tasti); }
  function tasti(e) {
    if (e.key === 'Escape') chiudi();
    if (e.key === 'ArrowRight') { i = (i + 1) % link.length; mostra(); }
    if (e.key === 'ArrowLeft') { i = (i - 1 + link.length) % link.length; mostra(); }
  }
  link.forEach(function (a, n) {
    a.addEventListener('click', function (e) {
      e.preventDefault(); i = n;
      v = document.createElement('div'); v.className = 'visore';
      v.innerHTML = '<img alt=""><button class="chiudi" aria-label="Chiudi">×</button>' +
        '<button class="prec" aria-label="Precedente">‹</button><button class="succ" aria-label="Successiva">›</button><span class="conta"></span>';
      v.querySelector('.chiudi').onclick = chiudi;
      v.querySelector('.prec').onclick = function () { i = (i - 1 + link.length) % link.length; mostra(); };
      v.querySelector('.succ').onclick = function () { i = (i + 1) % link.length; mostra(); };
      v.onclick = function (ev) { if (ev.target === v) chiudi(); };
      document.body.appendChild(v); document.addEventListener('keydown', tasti); mostra();
    });
  });
});
