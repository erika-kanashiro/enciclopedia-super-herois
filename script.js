const barraPesquisa = document.getElementById("barraPesquisa");
const herois = document.querySelectorAll(".heroi");

barraPesquisa.addEventListener("input", function() {
    const pesquisa = barraPesquisa.value.toLowerCase();

    herois.forEach(function(heroi) {
        const nome = heroi.textContent.toLowerCase();

        if (nome.includes(pesquisa)) {
            heroi.style.display = "block";
        } else {
            heroi.style.display = "none";
        }
    });
});