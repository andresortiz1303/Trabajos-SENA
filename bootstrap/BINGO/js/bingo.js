
   let numInicial = 1, numFinal = 75;

        // Función para sacar balotas
        function sacarBalota() {
            let numero = Math.round(Math.random() * (numFinal - numInicial) + numInicial);
            let letra;

            if (numero >= 1 && numero <= 15) letra = "B";
            else if (numero >= 16 && numero <= 30) letra = "I";
            else if (numero >= 31 && numero <= 45) letra = "N";
            else if (numero >= 46 && numero <= 60) letra = "G";
            else if (numero >= 61 && numero <= 75) letra = "O";

            document.getElementById("resultado").innerHTML = `<h2>El número es: ${letra}${numero}</h2>`;
        }

document.addEventListener("DOMContentLoaded", () => {
    const cartonContainer = document.getElementById("cartonContainer");
    const nuevoCartonBtn = document.getElementById("nuevoCartonBtn");

    function generarCarton() {
        cartonContainer.innerHTML = "";

        const columnas = {
            B: generarNumerosAleatorios(1, 15, 5),
            I: generarNumerosAleatorios(16, 30, 5),
            N: generarNumerosAleatorios(31, 45, 5),
            G: generarNumerosAleatorios(46, 60, 5),
            O: generarNumerosAleatorios(61, 75, 5)
        };

        // Espacio "FREE" en el centro
        columnas.N[2] = "FREE";

        const carton = document.createElement("div");
        carton.className = "bingo-card";

        // Cabecera B-I-N-G-O
        const header = document.createElement("div");
        header.className = "d-flex";
        for (const letra of Object.keys(columnas)) {
            const cell = document.createElement("div");
            cell.className = "bingo-header flex-fill";
            cell.textContent = letra;
            header.appendChild(cell);
        }
        carton.appendChild(header);

        // Filas con números
        for (let i = 0; i < 5; i++) {
            const row = document.createElement("div");
            row.className = "d-flex";
            for (const letra of Object.keys(columnas)) {
                const cell = document.createElement("div");
                cell.className = "bingo-cell flex-fill";
                cell.textContent = columnas[letra][i];

                if (cell.textContent === "FREE") {
                    cell.classList.add("free", "marked");
                } else {
                    cell.addEventListener("click", () => {
                        cell.classList.toggle("marked");
                    });
                }

                row.appendChild(cell);
            }
            carton.appendChild(row);
        }

        cartonContainer.appendChild(carton);
    }

    function generarNumerosAleatorios(min, max, cantidad) {
        const numeros = [];
        while (numeros.length < cantidad) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!numeros.includes(num)) {
                numeros.push(num);
            }
        }
        return numeros.sort((a, b) => a - b);
    }

    nuevoCartonBtn.addEventListener("click", generarCarton);
    generarCarton(); // Cartón inicial al cargar la página
});

