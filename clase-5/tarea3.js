
//TAREA 3: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let horasClase = []
let minutosClase = []
let segundosClase = []

let horasCurso = 0
let minutosCurso = 0
let segundosCurso = 0
const SEGUNDOS_POR_MINUTO = 60

document.querySelector("#agregar-clases").onclick = function () {

    if (document.querySelector("#cantidad-clases").value === "") {
        alert("Por favor, ingresá la cantidad de clases del curso.")
        return false
    }

    crearElementosHTMLPorClase()

    deshabilitarBotonCantidadClases()
    deshabilitarCantidadClases()

    habilitarBotonCalcularDuracionCurso()
}

function crearElementosHTMLPorClase() {

    const cantidadClases = document.querySelector("#cantidad-clases").value

    for (let i = 1; i <= cantidadClases; i++) {

        const nuevoParrafo = document.createElement('p')
        nuevoParrafo.innerText = `Clase ${i}`
        nuevoParrafo.className = "clase-label"

        const horasClaseNueva = document.createElement('label')
        horasClaseNueva.innerText = "Horas: "
        horasClaseNueva.className = "horas-label"
        const horasClaseNuevaValor = document.createElement('input')
        horasClaseNuevaValor.type = "number"
        horasClaseNuevaValor.className = "horas-clase"
        horasClaseNuevaValor.placeholder = "0"
        horasClaseNuevaValor.setAttribute("required", "")

        const minutosClaseNueva = document.createElement('label')
        minutosClaseNueva.innerText = "Minutos: "
        minutosClaseNueva.className = "minutos-label"
        const minutosClaseNuevaValor = document.createElement('input')
        minutosClaseNuevaValor.type = "number"
        minutosClaseNuevaValor.className = "minutos-clase"
        minutosClaseNuevaValor.placeholder = "0"
        minutosClaseNuevaValor.setAttribute("required", "")

        const segundosClaseNueva = document.createElement('label')
        segundosClaseNueva.innerText = "Segundos: "
        segundosClaseNueva.className = "segundos-label"
        const segundosClaseNuevaValor = document.createElement('input')
        segundosClaseNuevaValor.type = "number"
        segundosClaseNuevaValor.className = "segundos-clase"
        segundosClaseNuevaValor.placeholder = "0"
        segundosClaseNuevaValor.setAttribute("required", "")

        document.querySelector("form").appendChild(nuevoParrafo)
        document.querySelector("form").appendChild(horasClaseNueva)
        document.querySelector("form").appendChild(horasClaseNuevaValor)
        document.querySelector("form").appendChild(minutosClaseNueva)
        document.querySelector("form").appendChild(minutosClaseNuevaValor)
        document.querySelector("form").appendChild(segundosClaseNueva)
        document.querySelector("form").appendChild(segundosClaseNuevaValor)
    }
}

function deshabilitarBotonCantidadClases() {
    document.querySelector("#agregar-clases").setAttribute("disabled", "")
}

function deshabilitarCantidadClases() {
    document.querySelector("#cantidad-clases").setAttribute("disabled", "")
}

function habilitarBotonCalcularDuracionCurso() {
    document.querySelector("#calcular-duracion-curso").removeAttribute("disabled", "")
}

document.querySelector("#calcular-duracion-curso").onclick = function () {

    //corroborarIngresoDeDatos ()
    const cantidadClases = document.querySelector("#cantidad-clases").value

    segundosClase = (document.querySelectorAll(".segundos-clase"))
    minutosClase = (document.querySelectorAll(".minutos-clase"))
    horasClase = (document.querySelectorAll(".horas-clase"))

    for (let i = 0; i <= cantidadClases - 1; i++) {
        if (segundosClase[i].value === "" || minutosClase[i].value === "" || horasClase[i].value === "") {
            alert("Por favor, ingresá las horas, minutos y segundos de cada clase.")
            return false
        }
    }
    

    calcularDuracionCurso()

    completarDuracionCurso()

    deshabilitarBotonDuracionCurso()
    deshabilitarDuracionCurso()

    habilitarBotonVolverACalcular()

}

/*function corroborarIngresoDeDatos (){
    const cantidadClases = document.querySelector("#cantidad-clases").value

    segundosClase = (document.querySelectorAll(".segundos-clase"))
    minutosClase = (document.querySelectorAll(".minutos-clase"))
    horasClase = (document.querySelectorAll(".horas-clase"))

    for (let i = 0; i <= cantidadClases - 1; i++) {
        if (segundosClase[i].value === "" || minutosClase[i].value === "" || horasClase[i].value === "") {
            alert("Por favor, ingresá las horas, minutos y segundos de cada clase.")
            return false
        }
    }
}
*/

function calcularDuracionCurso() {
    const cantidadClases = document.querySelector("#cantidad-clases").value

    for (let i = 0; i <= cantidadClases - 1; i++) {
        segundosCurso = segundosCurso + Number(segundosClase[i].value)
    }
    while (segundosCurso >= SEGUNDOS_POR_MINUTO) {
        minutosCurso = minutosCurso + 1
        segundosCurso = segundosCurso - SEGUNDOS_POR_MINUTO
    }

    for (let i = 0; i <= cantidadClases - 1; i++) {
        minutosCurso = minutosCurso + Number(minutosClase[i].value)
    }
    while (minutosCurso >= SEGUNDOS_POR_MINUTO) {
        horasCurso = horasCurso + 1
        minutosCurso = minutosCurso - SEGUNDOS_POR_MINUTO
    }

    for (let i = 0; i <= cantidadClases - 1; i++) {
        horasCurso = horasCurso + Number(horasClase[i].value)
    }
}

function completarDuracionCurso() {
    const cantidadClases = document.querySelector("#cantidad-clases").value

    document.querySelector("#clases-curso").value = cantidadClases
    document.querySelector("#horas-curso").value = horasCurso
    document.querySelector("#minutos-curso").value = minutosCurso
    document.querySelector("#segundos-curso").value = segundosCurso
}

function deshabilitarBotonDuracionCurso() {
    document.querySelector("#calcular-duracion-curso").setAttribute("disabled", "")
}

function deshabilitarDuracionCurso() {
    const cantidadClases = document.querySelector("#cantidad-clases").value

    for (let i = 0; i <= cantidadClases - 1; i++) {
        segundosClase[i].setAttribute("disabled", "")
        minutosClase[i].setAttribute("disabled", "")
        horasClase[i].setAttribute("disabled", "")
    }
}

function  habilitarBotonVolverACalcular() {
    document.querySelector("#resetear").removeAttribute("disabled", "")

}

document.querySelector("#resetear").onclick = function () {
    resetearClases()
    resetearDuracionCurso()
    resetearCantidadDeClases()
    habilitarBotonCantidadClases()
    habilitarCantidadClases()
}

function resetearClases() {
    const cantidadClases = document.querySelector("#cantidad-clases").value
    
    const claseLabel = document.querySelectorAll(".clase-label")
    const horasLabel = document.querySelectorAll(".horas-label")
    const minutosLabel = document.querySelectorAll(".minutos-label")
    const segundosLabel = document.querySelectorAll(".segundos-label")


    for (let i = 0; i <= cantidadClases - 1; i++) {
        claseLabel[i].remove()

        horasLabel[i].remove()
        horasClase[i].remove()

        minutosLabel[i].remove()
        minutosClase[i].remove()

        segundosLabel[i].remove()
        segundosClase[i].remove()
    }
}

function resetearDuracionCurso() {
    document.querySelector("#clases-curso").value = ""
    document.querySelector("#horas-curso").value = ""
    document.querySelector("#minutos-curso").value = ""
    document.querySelector("#segundos-curso").value = ""

    horasCurso = 0
    minutosCurso = 0
    segundosCurso = 0
}

function resetearCantidadDeClases() {
    document.querySelector("#cantidad-clases").value = ""
}

function habilitarBotonCantidadClases() {
    document.querySelector("#agregar-clases").removeAttribute("disabled", "")
}

function habilitarCantidadClases() {
    document.querySelector("#cantidad-clases").removeAttribute("disabled", "")
}
