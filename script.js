document.addEventListener("DOMContentLoaded", () => {
    // Inicializar íconos gráficos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Efecto de mouse interactivo sobre tarjetas de proyectos y habilidades
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
