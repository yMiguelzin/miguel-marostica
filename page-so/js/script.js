// Função que mostra a seção clicada e esconde as outras
function mostrar(id) {
    const secoes = document.querySelectorAll("main section");
    secoes.forEach(secao => {
    secao.classList.remove("visivel");
    });
      document.getElementById(id).classList.add("visivel");
}

// Simula o envio do formulário com feedback
function enviarMensagem(event) {
    event.preventDefault(); // Evita o envio real
    alert("Mensagem enviada com sucesso! 😊");
    event.target.reset(); // Limpa o formulário
}
