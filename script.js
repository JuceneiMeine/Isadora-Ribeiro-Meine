// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Alerta simples para o botão de contato (pode ser trocado por link de WhatsApp)
document.querySelector('.btn-cta').addEventListener('click', () => {
    alert("Redirecionando para o WhatsApp...");
});