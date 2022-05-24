// Variables
const body = document.querySelector('body')
const titulo = document.querySelector('#titulo')
const precio = document.querySelector('#precio')
const btnBuscar = document.querySelector('#btnBuscar')
const formulario = document.querySelector('#formulario')
const error = document.querySelector('#error')

// Funciones

const limpiarBusqueda = () => {
    titulo.textContent = ''
    precio.textContent = ''
    error.textContent = ''
}

const filtrarBusqueda = () => {
    limpiarBusqueda()
    const dato = parseInt(formulario.value)
    pizzas.forEach(pizza => {
        if(pizza.id === dato) {
            titulo.textContent += pizza.nombre
            precio.textContent += `$${pizza.precio}`
        }
    })

    if (titulo.textContent == '') {
        error.textContent = 'No se encontraron resultados'
    }
}


// Listeners

btnBuscar.addEventListener('click', filtrarBusqueda)