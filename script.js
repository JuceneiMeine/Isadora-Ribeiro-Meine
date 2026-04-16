document.addEventListener("DOMContentLoaded", () => {

    /* =============================================
       1. MENU HAMBÚRGUER E EVENTOS DE MENU
       ============================================= */
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        // Clique no botão hambúrguer
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');

            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Fechar menu ao rolar a página
        window.addEventListener('scroll', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            }
        });

        // Fechar menu ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            }
        });
    }

    /* ============================================
       2. ROLAGEM SUAVE
       ============================================ */
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(targetId);

                if (section) {
                    // Fecha o menu mobile ao clicar em um link
                    if (navLinks) navLinks.classList.remove('active');
                    if (menuBtn) {
                        const icon = menuBtn.querySelector('i');
                        if (icon) {
                            icon.classList.add('fa-bars');
                            icon.classList.remove('fa-xmark');
                        }
                    }

                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    /* ============================================
       3. AGENDAMENTO - EXPANDIR DESCRIÇÃO
       =========================================== */
    const botoesSaibaMais = document.querySelectorAll('.btn-saiba-mais');

    botoesSaibaMais.forEach(botao => {
        botao.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const descricao = this.nextElementSibling;

            if (descricao && descricao.classList.contains('descricao')) {
                descricao.classList.toggle('ativo');

                if (descricao.classList.contains('ativo')) {
                    this.textContent = 'Fechar';
                } else {
                    this.textContent = 'Saiba mais';
                }
            } else {
                console.error("Erro: Tag <p class='descricao'> não encontrada após o botão.");
            }
        });
    });

    /* =============================================
       4. ANIMAÇÃO SOBRE-MIM (Intersection Observer)
       ============================================= */
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

    /* ============================================
       5. FOOTER / WHATSAPP
       ============================================ */
    const whatsappLink = document.getElementById('whatsapp-link');
    if (whatsappLink) {
        whatsappLink.style.cursor = "pointer";
        whatsappLink.addEventListener('click', () => {
            const numero = "5583999180699";
            window.open(`https://wa.me/${numero}`, '_blank');
        });
    }

    
    /* ============================================
       6. BOTÃO VOLTAR AO TOPO (Lógica)
       ============================================ */
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        // Função para monitorar o scroll e mostrar/esconder o botão
        window.addEventListener('scroll', () => {
            // Se rolar mais de 300px para baixo, mostra o botão
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        // Função para rolar para o topo ao clicar
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Rolagem suave
            });
        });
    }

});