document.getElementById("convertir").addEventListener("click", function() {
    const valeur = parseFloat(document.getElementById("valeur").value);
    const uniteDepart = document.getElementById("uniteDepart").value;
    const uniteConversion = document.getElementById("uniteConversion").value;

    if (isNaN(valeur)) {
        alert("Veuillez entrer une valeur numérique.");
        return;
    }

    let resultat;

    // Ajoutez des conversions pour d'autres unités si nécessaire
    if (uniteDepart === "pieds" && uniteConversion === "mètres") {
        resultat = valeur * 0.3048;
    } else if (uniteDepart === "mètres" && uniteConversion === "pieds") {
        resultat = valeur / 0.3048;
    } else if (uniteDepart === "pouces" && uniteConversion === "mètres") {
        resultat = valeur * 0.0254;
    } else if (uniteDepart === "mètres" && uniteConversion === "pouces") {
        resultat = valeur / 0.0254;
    } else {
        alert("Conversion non prise en charge.");
        return;
    }

    document.getElementById("resultat").textContent = valeur + " " + uniteDepart + " équivaut à " + resultat + " " + uniteConversion;
});
