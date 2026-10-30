/* Chế độ nhúng cho mô phỏng. Tham số URL:
   ?embed=1   ẩn tiêu đề và chân trang (giữ nút ngôn ngữ, mức độ)
   &tab=N     mở sẵn tab thứ N (đếm từ 1)
   &notabs=1  ẩn thanh tab (khoá vào đúng một tab) */
(function () {
  var q = new URLSearchParams(location.search);
  if (q.get('embed') !== '1') return;
  var css = 'header>div:first-child,footer{display:none!important}.wrap{padding-top:8px!important}';
  if (q.get('notabs') === '1') css += 'nav.tabs{display:none!important}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
  var n = parseInt(q.get('tab'), 10);
  if (!(n >= 1)) return;
  var tries = 0;
  (function go() {
    var b = document.querySelectorAll('nav.tabs button')[n - 1];
    if (b) b.click();
    else if (++tries < 20) setTimeout(go, 100);
  })();
})();
