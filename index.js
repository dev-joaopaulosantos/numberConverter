const romanNumerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

// função para converter números arábicos para romanos
function arabicToRoman(num) {
    if (num < 1 || num > 3999) {
        return "Fora do intervalo permitido (1-3999)";
    }

    let roman = "";
    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            roman += key;
            num -= romanNumerals[key];
        }
    }

    return roman;
}

// função para converter números romanos para arábicos
function romanToArabic(roman) {
    
    let arabic = 0;
    for (let i = 0; i < roman.length; i++) {
        const currentSymbolValue = romanNumerals[roman[i]];
        const nextSymbolValue = romanNumerals[roman[i + 1]];

        if (nextSymbolValue && nextSymbolValue > currentSymbolValue) {
            arabic += nextSymbolValue - currentSymbolValue;
            i++;
        } else {
            arabic += currentSymbolValue;
        }
    }

    console.log(arabic)
    return arabic;
}

// função que mostra a conversão
function converter() {
    const input = document.getElementById("number").value;
    const result = document.getElementById("result");
    const select = document.querySelector('input[name="selectRadio"]:checked').value;

    if(input === ""){
        alert("Entrada inválida!")
        return
    }

    if (select === "romanToArabic") {
        result.innerHTML =
            "Número Arábico: " + romanToArabic(input.toUpperCase());
    } else {
        result.innerHTML =
            "Número Romano: " + arabicToRoman(parseInt(input));
    }
}