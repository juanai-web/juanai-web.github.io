// JuanAI landing — interacciones mínimas, sin frameworks.

// Smooth-scroll ya lo hace el CSS (scroll-behavior); aquí solo evitamos
// que el salto a anclas quede oculto bajo el header pegajoso.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const headerH = document.querySelector('.top')?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
