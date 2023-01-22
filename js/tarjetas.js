const contenedor = document.querySelector(".container")

const cardHtml = ( array ) => {
    const generarNodos = array.reduce(( acc, productos) => {
        return acc +  `
        <div class="card" id="producto-${productos.id}"
            <div class ="container-img">
                <img class="imgcard" src=${productos.img} alt=${productos.nombre}>
                <h2 class="prd-nombre">
                    ${productos.nombre}
                </h2>   
                <h3 class="prd-precio">
                    $${productos.precio}
                </h3>
                <div class="divbuttons">
                    <button class="likebutton">
                        ♥
                    </button>
                    <button id="boton-${productos.id}" class="likebutton2">
                        🛒
                    </button>
                </div>
            </div>
        </div>
    `
    }, "")

    contenedor.innerHTML = generarNodos
}

cardHtml(productos)

// CARRITO DE COMPRAS - AÑADIR + LOCALSTORAGE

let carrito = []

function aniadirAlCarrito (array) {
    const botonAniadir = document.querySelectorAll(".likebutton2")
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.find((elemento) => {
                return elemento.id === Number(id)
            })
            carrito.push(filtrarProducto)   
            console.log(carrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))   
        }
        
    })
}

aniadirAlCarrito(productos)


const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
carrito = productosElegidos || []