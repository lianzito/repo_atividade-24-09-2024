document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const tipoSelect = document.getElementById("tipo");
    const feedbackMessage = document.createElement("p");
    feedbackMessage.id = "feedbackMessage";
    feedbackMessage.style.display = "none";
    document.querySelector(".container").appendChild(feedbackMessage);

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        const tipoSelecionado = tipoSelect.value;
        feedbackMessage.textContent = `Gerando receita otimizada para ${tipoSelecionado}...`;
        feedbackMessage.style.display = "block";
        feedbackMessage.style.color = "#ff6347";
        feedbackMessage.style.animation = "fadeIn 0.5s ease-in-out";

        // Simulação de um tempo de espera para processar a receita (2 segundos)
        setTimeout(() => {
            window.location.href = `misto_quente.php?tipo=${tipoSelecionado}`;
        }, 2000);
    });
});

// Animação para o feedback
const style = document.createElement("style");
style.innerHTML = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(style);
