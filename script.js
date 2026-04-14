document.addEventListener("DOMContentLoaded", () => {
    
/* ===========================================================
    1. MENU HAMBÚRGUER (Prioridade)
    =========================================================== */
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique "vaze" para outros elementos
        navLinks.classList.toggle('active');
        
        const icon = menuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });
}

/* ===========================================================
    2. ROLAGEM SUAVE (Corrigida)
    =========================================================== */
// Seletor mais específico para não quebrar outros links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Só executa se for um link interno (que começa com #)
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(targetId);
            
            if (section) {
                // Fecha o menu ao clicar (importante para mobile!)
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if(icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }

                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

/* ===========================================================
3. AGENDAMENTO - EXPANDIR DESCRIÇÃO
=========================================================== */
const botoesSaibaMais = document.querySelectorAll('.btn-saiba-mais');

botoesSaibaMais.forEach(botao => {
botao.addEventListener('click', function(e) {
    // Impede que o clique dispare outras funções de scroll ou links
    e.preventDefault();
    e.stopPropagation();

    // Pega a descrição que vem logo após o botão
    const descricao = this.nextElementSibling;

    if (descricao && descricao.classList.contains('descricao')) {
        // Alterna a classe 'ativo'
        descricao.classList.toggle('ativo');

        // Muda o texto do botão
        if (descricao.classList.contains('ativo')) {
            this.textContent = 'Fechar';
        } else {
            this.textContent = 'Saiba mais';
        }
        
        console.log("Botão Saiba Mais clicado com sucesso!");
    } else {
        console.error("Erro: Não encontrei a tag <p class='descricao'> logo após o botão.");
    }
});
});

/* ===========================================================
    4. ANIMAÇÃO SOBRE-MIM (Intersection Observer)
    =========================================================== */
const sobreContainer = document.querySelector('.sobre-container');
if (sobreContainer) {
    sobreContainer.style.opacity = "0";
    sobreContainer.style.transform = "translateY(30px)";
    sobreContainer.style.transition = "all 0.8s ease-out";

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    observer.observe(sobreContainer);
}

/* ===========================================================
    5. FOOTER
    =========================================================== */
const whatsappLink = document.getElementById('whatsapp-link');
if (whatsappLink) {
    whatsappLink.style.cursor = "pointer";
    whatsappLink.addEventListener('click', () => {
        const numero = "5583999180699"; 
        window.open(`https://wa.me/${numero}`, '_blank');
    });
}
});