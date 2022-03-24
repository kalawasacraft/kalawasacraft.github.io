$(function() {

  if (localStorage && !('skinMode' in localStorage)) {
    localStorage.skinMode = 'light';
  }

  if (localStorage && localStorage.skinMode == 'dark') {
    changeDarkMode();
  }

  $('#change-skin').on('click', function () {
    if (localStorage && localStorage.skinMode == 'light') {
      localStorage.skinMode = 'dark';
    } else if (localStorage && localStorage.skinMode == 'dark') {
      localStorage.skinMode = 'light';
    }
    changeDarkMode();
  });

  function changeDarkMode() {
    $("body").toggleClass("page-dark-mode");
    BeautifulJekyllJS.initNavbar();
  }
});
