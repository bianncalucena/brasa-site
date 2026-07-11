const imagemPrincipal = document.getElementById("imagemPrincipal");

const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach((foto)=>{

    foto.addEventListener("click",()=>{

        imagemPrincipal.src = foto.src;

        document.querySelector(".miniatura.ativa")
        ?.classList.remove("ativa");

        foto.classList.add("ativa");

    });

});
