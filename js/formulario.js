const formEspecialista = document.getElementById("formEspecialista");
const mensagemFormulario = document.querySelector(".mensagem-formulario");

if (formEspecialista && mensagemFormulario) {
    formEspecialista.addEventListener("submit", async (event) => {
        event.preventDefault();

        const botao = formEspecialista.querySelector("button[type='submit']");
        const textoOriginal = botao.textContent;

        botao.disabled = true;
        botao.textContent = "ENVIANDO...";
        mensagemFormulario.className = "mensagem-formulario";
        mensagemFormulario.textContent = "";

        try {
            const resposta = await fetch(formEspecialista.action, {
                method: "POST",
                body: new FormData(formEspecialista),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!resposta.ok) {
                throw new Error("Erro ao enviar formulario");
            }

            formEspecialista.reset();
            mensagemFormulario.classList.add("sucesso");
            mensagemFormulario.innerHTML = "Seu formul&aacute;rio foi enviado para nossa equipe BRASA. Em breve, um especialista ir&aacute; entrar em contato com voc&ecirc;.";
        } catch (error) {
            mensagemFormulario.classList.add("erro");
            mensagemFormulario.innerHTML = "N&atilde;o foi poss&iacute;vel enviar agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.";
        } finally {
            botao.disabled = false;
            botao.textContent = textoOriginal;
        }
    });
}