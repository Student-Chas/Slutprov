const bocker = [
    {titel: "JavaScript för nybörjare", pris: 200},
    {titel: "Avancerad CSS", pris: 150},
    {titel: "HTML grunder", pris: 100}
];

function listaBocker(bocker) {
    for (const bok of bocker) {
        console.log(bok.titel + " - " + bok.pris + " kr");
    }
}

function filtreraUnderPris(bocker, maxPris) {
    return bocker.filter(bok => bok.pris < maxPris);
}

function sorteraEfterTitel(bocker) {
    return bocker.slice().sort((a, b) => a.titel.localeCompare(b.titel));
}

// Anrop
console.log("Alla böcker:");
listaBocker(bocker);

console.log("\nBöcker under 150 kr:");
const billiga = filtreraUnderPris(bocker, 150);
listaBocker(billiga);

console.log("\nBöcker sorterade efter titel:");
const sorterade = sorteraEfterTitel(bocker);
listaBocker(sorterade);
 