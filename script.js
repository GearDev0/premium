// Script para manipulação do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação simples
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Simulação de envio do formulário
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);

    // Limpa os campos do formulário
    document.getElementById('contact-form').reset();
});

// Efeito de rolagem suave para os links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
