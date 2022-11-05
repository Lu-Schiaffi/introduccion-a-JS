//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
//numeroMenor = Math.min(...arrayNumeros);
//numeroMayor = Math.max(...arrayNumeros);

const listaNumeros = document.querySelectorAll("li");
const arrayNumeros = [];
const multiploParaRedondear = 10;
//let promedio;
//let numeroMenor;
//let numeroMayor;
const numeroMasFrecuente = [];

generarNumerosAleatorios();

function generarNumerosAleatorios() {
  for (let i = 0; i < listaNumeros.length; i++) {
    const numeroAleatorio = Math.random() * multiploParaRedondear;
    listaNumeros[i].innerText = Math.floor(numeroAleatorio);
  }
}

obtenerNumeros();

function obtenerNumeros() {
  for (let i = 0; i < listaNumeros.length; i++) {
    arrayNumeros.push(Number(listaNumeros[i].innerText));
  }
  return arrayNumeros;
}

document.querySelector("#calcular-promedio").onclick = function () {
  imprimirPromedio();
  deshabilitarBotonCalcularPromedio();
};

function imprimirPromedio() {
  document.querySelector("#promedio").innerText = Math.round(
    calcularPromedio()
  );
}

function calcularPromedio() {
  let total = 0;
  let promedio;
  for (let i = 0; i < arrayNumeros.length; i++) {
    total = total + arrayNumeros[i];
  }
  promedio = total / arrayNumeros.length;
  return promedio;
}

function deshabilitarBotonCalcularPromedio() {
  document.querySelector("#calcular-promedio").setAttribute("disabled", "");
}

document.querySelector("#obtener-numero-menor").onclick = function () {
  imprimirNumeroMenor();
  deshabilitarBotonObtenerNumeroMenor();
};

function imprimirNumeroMenor() {
  document.querySelector("#numero-menor").innerText = obtenerNumeroMenor();
}

function obtenerNumeroMenor() {
  let numeroMenor = arrayNumeros[0];
  for (let i = 1; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] < numeroMenor) {
      numeroMenor = arrayNumeros[i];
    }
  }
  return numeroMenor;
}

function deshabilitarBotonObtenerNumeroMenor() {
  document.querySelector("#obtener-numero-menor").setAttribute("disabled", "");
}

document.querySelector("#obtener-numero-mayor").onclick = function () {
  imprimirNumeroMayor();
  deshabilitarBotonObtenerNumeroMayor();
};

function imprimirNumeroMayor() {
  document.querySelector("#numero-mayor").innerText = obtenerNumeroMayor();
}

function obtenerNumeroMayor() {
  let numeroMayor = arrayNumeros[0];
  for (let i = 1; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > numeroMayor) {
      numeroMayor = arrayNumeros[i];
    }
  }
  return numeroMayor;
}

function deshabilitarBotonObtenerNumeroMayor() {
  document.querySelector("#obtener-numero-mayor").setAttribute("disabled", "");
}

document.querySelector("#obtener-numero-frecuente").onclick = function () {
  obtenerNumeroMasFrecuente();
  determinarExistenciaNumeroFrecuente();
  deshabilitarBotonObtenerNumeroFrecuente();
};

function obtenerNumeroMasFrecuente() {
  let repeticionesMaximas = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    let contadorNumeroActual = 0;

    for (let j = i + 1; j < arrayNumeros.length; j++) {
      if (arrayNumeros[j] === arrayNumeros[i]) {
        contadorNumeroActual++;
      }
    }

    if (
      contadorNumeroActual === repeticionesMaximas &&
      contadorNumeroActual !== 0
    ) {
      numeroMasFrecuente.push(arrayNumeros[i]);
    } else if (contadorNumeroActual > repeticionesMaximas) {
      repeticionesMaximas = contadorNumeroActual;

      if (numeroMasFrecuente.length > 0) {
        for (let j = 0; j < numeroMasFrecuente.length; j++) {
          numeroMasFrecuente[j].remove();
        }
      }
      numeroMasFrecuente[0] = arrayNumeros[i];
    }
  }
}

function determinarExistenciaNumeroFrecuente() {
  if (numeroMasFrecuente[0] === undefined) {
    document.querySelector("#numero-frecuente").innerText =
      "Ningún número se repite";
  } else imprimirNumerosFreceuntes();
}

function imprimirNumerosFreceuntes() {
  if (numeroMasFrecuente.length > 1) {
    document.querySelector("#titulo-numero-frecuente").innerText =
      "Los números más frecuentes son:";
    document.querySelector("#numero-frecuente").innerText =
      numeroMasFrecuente[0];

    for (let i = 1; i < numeroMasFrecuente.length; i++) {
      const nuevoNumeroFrecuente = document.createElement("label");
      nuevoNumeroFrecuente.innerText = `, ${numeroMasFrecuente[i]}`;
      document
        .querySelector("#numero-frecuente")
        .appendChild(nuevoNumeroFrecuente);
    }
  } else {
    document.querySelector("#numero-frecuente").innerText =
      numeroMasFrecuente[0];
  }
}

function deshabilitarBotonObtenerNumeroFrecuente() {
  document
    .querySelector("#obtener-numero-frecuente")
    .setAttribute("disabled", "");
}
