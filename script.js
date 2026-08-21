const herois = [
    { nome: "Capitã Marvel", universo: "Marvel", poder: "Força, voo e absorção de energia", ano: 1968 },
    { nome: "Tempestade", universo: "Marvel", poder: "Controle do clima", ano: 1975 },
    { nome: "Jean Grey", universo: "Marvel", poder: "Telepatia e telecinese", ano: 1963 },
    { nome: "Ravena", universo: "DC", poder: "Magia e telecinese", ano: 1980 },
    { nome: "Zatanna", universo: "DC", poder: "Magia e manipulação da realidade", ano: 1964 },
    { nome: "Supergirl", universo: "DC", poder: "Super força, voo e resistência", ano: 1959 },
    { nome: "Batgirl", universo: "DC", poder: "Inteligência, agilidade e artes marciais", ano: 1967 },
    { nome: "Feiticeira Escarlate", universo: "Marvel", poder: "Manipulação da realidade e magia", ano: 1964 },
    { nome: "Gamora", universo: "Marvel", poder: "Força e habilidades de combate", ano: 1975 },
    { nome: "She-Hulk", universo: "Marvel", poder: "Super força e resistência", ano: 1980 },
    { nome: "Mera", universo: "DC", poder: "Hidrocinese e super força", ano: 1963 },
    { nome: "Vampira", universo: "Marvel", poder: "Absorção de poderes e energia", ano: 1981 },
    { nome: "Ms. Marvel", universo: "Marvel", poder: "Alteração corporal e super força", ano: 2013 },
    { nome: "Elektra", universo: "Marvel", poder: "Artes marciais e habilidades acrobáticas", ano: 1981 },
    { nome: "Harley Quinn", universo: "DC", poder: "Agilidade, inteligência e combate", ano: 1992 },
    { nome: "Mulher Invisível", universo: "Marvel", poder: "Invisibilidade e campos de força", ano: 1961 },
    { nome: "Estelar", universo: "DC", poder: "Voo e absorção de energia", ano: 1980 },
    { nome: "Canário Negro", universo: "DC", poder: "Grito supersônico e artes marciais", ano: 1947 },
    { nome: "Hera Venenosa", universo: "DC", poder: "Controle sobre plantas e toxinas", ano: 1966 },
    { nome: "Batwoman", universo: "DC", poder: "Artes marciais, inteligência e estratégia", ano: 2006 },
    { nome: "Abelha", universo: "DC", poder: "Voo, super força e alteração de tamanho", ano: 1976 },
    { nome: "Poderosa", universo: "DC", poder: "Super força, voo e resistência", ano: 1976 },
    { nome: "Vixen", universo: "DC", poder: "Imitação de habilidades de animais", ano: 1981 },
    { nome: "Donna Troy", universo: "DC", poder: "Super força, agilidade e resistência", ano: 1965 },
    { nome: "Vespa", universo: "Marvel", poder: "Encolhimento, voo e rajadas de energia", ano: 1963 },
    { nome: "Jessica Jones", universo: "Marvel", poder: "Super força e resistência", ano: 2001 },
    { nome: "Kitty Pryde", universo: "Marvel", poder: "Intangibilidade", ano: 1980 },
    { nome: "Jubileu", universo: "Marvel", poder: "Manipulação de energia", ano: 1989 },
    { nome: "Monica Rambeau", universo: "Marvel", poder: "Manipulação de energia e voo", ano: 1980 },
    { nome: "Mulher-Aranha", universo: "Marvel", poder: "Força, agilidade e bioeletricidade", ano: 1977 },
    { nome: "Caçadora", universo: "DC", poder: "Artes marciais, agilidade e combate", ano: 1989 },
    { nome: "Big Barda", universo: "DC", poder: "Super força, resistência e combate", ano: 1971 },
    { nome: "Mulher-Gavião", universo: "DC", poder: "Voo, força e habilidades de combate", ano: 1940 },
    { nome: "Katana", universo: "DC", poder: "Artes marciais e habilidade com espada", ano: 1983 },
    { nome: "Stargirl", universo: "DC", poder: "Força, voo e energia cósmica", ano: 1999 }
];


const corpoTabela = document.getElementById("corpoTabela");

const campoBusca = document.getElementById("campoBusca");

const botaoOrdenar = document.getElementById("botaoOrdenar");

const mensagemVazia = document.getElementById("mensagemVazia");


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



campoBusca.addEventListener("input", function () {

    const termo = campoBusca.value.toLowerCase();

    const filtrados = herois.filter(function (heroi) {

        return heroi.nome.toLowerCase().includes(termo)
            || heroi.universo.toLowerCase().includes(termo)
            || heroi.poder.toLowerCase().includes(termo);

    });

    mostrarHerois(filtrados);

});



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



mostrarHerois(herois);