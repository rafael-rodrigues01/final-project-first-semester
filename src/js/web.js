document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const toggleMenu = document.createElement('button');
  toggleMenu.textContent = '☰ Menu';
  toggleMenu.classList.add('toggle-menu');
  document.body.insertBefore(toggleMenu, menu);

  toggleMenu.addEventListener('click', function () {
    menu.classList.toggle('menu-open');
  });

  const topButton = document.querySelector('.top-button');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  });

  topButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  const sections = document.querySelectorAll('.introdution-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  const themeToggle = document.createElement('button');
  themeToggle.textContent = 'Toggle Theme';
  themeToggle.classList.add('theme-toggle');
  document.body.insertBefore(themeToggle, document.body.firstChild);

  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  });
});
