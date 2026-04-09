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


// AGENDAMENTO

document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll('.btn-saiba-mais');

  botoes.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Exemplo: Alerta simples, mas poderia ser um Modal
      if (index === 0) {
        alert("Você será redirecionado para o WhatsApp para tirar suas dúvidas!");
      } else {
        alert("Informações detalhadas sobre a primeira consulta enviadas para o console.");
        console.log("Detalhes: A sessão dura 50min e foca na anamnese inicial.");
      }
    });
  });
});


// SOBRE-MIM 

// Simples animação de entrada ao rolar a página
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.sobre-container');
    container.style.opacity = "0";
    container.style.transform = "translateY(30px)";
    container.style.transition = "all 0.8s ease-out";
    
    observer.observe(container);
});

// FOOTER

document.addEventListener("DOMContentLoaded", function() {
    const whatsappElement = document.getElementById('whatsapp-link');
    
    // Função simples para formatar e criar link de clique
    whatsappElement.style.cursor = "pointer";
    whatsappElement.addEventListener('click', function() {
        const numero = "5500000000000"; // Substitua pelo número real (DDI + DDD + Numero)
        window.open(`https://wa.me/${numero}`, '_blank');
    });

    // Efeito de hover suave nos itens de contato
    const links = document.querySelectorAll('.item-contato');
    links.forEach(link => {
        link.addEventListener('mouseover', () => link.style.opacity = "0.7");
        link.addEventListener('mouseout', () => link.style.opacity = "1");
    });
});

