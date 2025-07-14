/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
const main = document.querySelector('main');

function scrollActive() {
  const scrollY = main.scrollTop;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 60;
    const sectionId = current.getAttribute('id');

    const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (link) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
}

main.addEventListener('scroll', scrollActive);





