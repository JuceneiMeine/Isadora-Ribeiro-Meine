document.addEventListener("DOMContentLoaded", () => {

    /* =============================================
       1. MENU HAMBÚRGUER E EVENTOS DE MENU
       ============================================= */
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');

            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

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
       3. CARDS (SERVIÇO E TERAPIA) - EXPANDIR CONTEÚDO
       =========================================== */
    const botoesSaibaMais = document.querySelectorAll('.btn-saiba-mais');

    botoesSaibaMais.forEach(botao => {
        botao.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Tenta encontrar o card de "Serviços" OU o card de "Terapia"
            const card = this.closest('.card-servico') || this.closest('.card');
            
            if (card) {
                // Tenta encontrar a descrição de "Serviços" (.conteudo-oculto) OU de "Terapia" (.descricao)
                const conteudo = card.querySelector('.conteudo-oculto') || card.querySelector('.descricao');

                if (conteudo) {
                    conteudo.classList.toggle('ativo');
                    
                    if (conteudo.classList.contains('ativo')) {
                        this.textContent = 'Fechar';
                        this.classList.add('aberto');
                    } else {
                        this.textContent = 'Saiba mais';
                        this.classList.remove('aberto');
                    }
                }
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
       6. BOTÃO VOLTAR AO TOPO
       ============================================ */
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});