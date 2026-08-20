/* =====================================================================
   ENCICLOPÉDIA DE SUPER-HEROÍNAS
   ===================================================================== */

const herois = [

    { nome: "Mulher-Maravilha", universo: "DC", poder: "Força sobre-humana", ano: 1941 },

    { nome: "Viúva Negra", universo: "Marvel", poder: "Espionagem e artes marciais", ano: 1964 },

    { nome: "Mulher-Gato", universo: "DC", poder: "Agilidade e habilidades de combate", ano: 1940 },

    { nome: "Capitã Marvel", universo: "Marvel", poder: "Força e absorção de energia", ano: 1968 },

    { nome: "Tempestade", universo: "Marvel", poder: "Controle do clima", ano: 1975 },

    { nome: "Jean Grey", universo: "Marvel", poder: "Telepatia e telecinese", ano: 1963 },

    { nome: "Ravena", universo: "DC", poder: "Magia e telecinese", ano: 1980 },

    { nome: "Zatanna", universo: "DC", poder: "Magia", ano: 1964 },

    { nome: "Supergirl", universo: "DC", poder: "Super força e voo", ano: 1959 },

    { nome: "Batgirl", universo: "DC", poder: "Inteligência e artes marciais", ano: 1967 },

    { nome: "Feiticeira Escarlate", universo: "Marvel", poder: "Manipulação da realidade", ano: 1964 },

    { nome: "Gamora", universo: "Marvel", poder: "Força e habilidades de combate", ano: 1975 },

    { nome: "She-Hulk", universo: "Marvel", poder: "Super força", ano: 1980 },

    { nome: "Mera", universo: "DC", poder: "Hidrocinese", ano: 1963 },

    { nome: "Mulher-Hulk", universo: "Marvel", poder: "Força sobre-humana", ano: 1980 },

    { nome: "Vampira", universo: "Marvel", poder: "Absorção de poderes", ano: 1981 },

    { nome: "Ms. Marvel", universo: "Marvel", poder: "Alteração corporal", ano: 2013 },

    { nome: "Elektra", universo: "Marvel", poder: "Artes marciais", ano: 1981 },

    { nome: "Harley Quinn", universo: "DC", poder: "Agilidade e combate", ano: 1992 },

    { nome: "Mulher Invisível", universo: "Marvel", poder: "Invisibilidade e campos de força", ano: 1961 }

];


/* ---------------------------------------------------------------------
   2) LIGAÇÃO COM A PÁGINA
   --------------------------------------------------------------------- */

const corpoTabela = document.getElementById("corpoTabela");

const campoBusca = document.getElementById("campoBusca");

const botaoOrdenar = document.getElementById("botaoOrdenar");

const mensagemVazia = document.getElementById("mensagemVazia");


/* ---------------------------------------------------------------------
   3) DESENHAR A TABELA
   --------------------------------------------------------------------- */

function mostrarHerois(lista) {

    corpoTabela.innerHTML = "";

    lista.forEach(function (heroi) {

        const linha = document.createElement("tr");

        linha.innerHTML =
            "<td>" + heroi.nome + "</td>" +
            "<td>" + heroi.universo + "</td>" +
            "<td>" + heroi.poder + "</td>" +
            "<td>" + heroi.ano + "</td>";

        corpoTabela.appendChild(linha);
    });

    if (lista.length === 0) {

        mensagemVazia.style.display = "block";

    } else {

        mensagemVazia.style.display = "none";

    }
}


/* ---------------------------------------------------------------------
   4) BUSCAR
   --------------------------------------------------------------------- */

campoBusca.addEventListener("input", function () {

    const termo = campoBusca.value.toLowerCase();

    const filtrados = herois.filter(function (heroi) {

        return heroi.nome.toLowerCase().includes(termo)
            || heroi.universo.toLowerCase().includes(termo)
            || heroi.poder.toLowerCase().includes(termo);

    });

    mostrarHerois(filtrados);

});


/* ---------------------------------------------------------------------
   5) ORDENAR POR ANO
   --------------------------------------------------------------------- */

let crescente = true;

botaoOrdenar.addEventListener("click", function () {

    herois.sort(function (a, b) {

        return crescente ? a.ano - b.ano : b.ano - a.ano;

    });

    botaoOrdenar.textContent = crescente
        ? "Ordenar por ano ↓"
        : "Ordenar por ano ↑";

    crescente = !crescente;

    mostrarHerois(herois);

});


/* ---------------------------------------------------------------------
   6) PRIMEIRA EXIBIÇÃO
   --------------------------------------------------------------------- */

mostrarHerois(herois);