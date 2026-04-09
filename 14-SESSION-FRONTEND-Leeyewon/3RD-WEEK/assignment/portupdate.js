const portfolioCard = document.querySelector('.portfolio-card');
const subtitle = document.querySelector('.subtitle');

window.addEventListener('load', () => {
  portfolioCard.classList.add('show');
});

const text = 'LIKELION YONSEI PORTFOLIO';
let index = 0;

subtitle.textContent = '';

function typeEffect() {
  if (index < text.length) {
    subtitle.textContent += text[index];
    index++;
    setTimeout(typeEffect, 90);
  }
}

window.addEventListener('load', () => {
  setTimeout(typeEffect, 500);
});

const socialLinks = document.querySelectorAll('.github-section a');

socialLinks.forEach(link => {
  link.addEventListener('click', function () {
    const icon = this.querySelector('img');

    icon.classList.add('clicked');

    setTimeout(() => {
      icon.classList.remove('clicked');
    }, 200);
  });
});