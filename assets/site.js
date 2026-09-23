// Language filter for the "All works" list. Without JavaScript the full list shows.
(function () {
  var filters = document.querySelector('.filters');
  var items = Array.prototype.slice.call(document.querySelectorAll('.works li'));
  var count = document.getElementById('works-count');
  var year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();
  if (!filters || !items.length) return;

  var buttons = Array.prototype.slice.call(filters.querySelectorAll('button'));
  filters.hidden = false;

  function show(lang) {
    var shown = 0;
    items.forEach(function (li) {
      var match = lang === 'All' || li.getAttribute('data-lang') === lang;
      li.hidden = !match;
      if (match) shown++;
    });
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    if (count) count.textContent = shown + ' of ' + items.length + ' repositories';
  }

  filters.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (b) show(b.getAttribute('data-lang'));
  });
})();
