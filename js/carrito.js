let infoDelLs = JSON.parse(localStorage.getItem("carrito"))

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
                    <button id="boton-${productos.id}" class="likebutton2">
                        X
                    </button>
                </div>
            </div>
        </div>
    `
    }, "")

    document.querySelector(".carrito-contenedor").innerHTML = generarNodos
}

cardHtml(infoDelLs || [])



function borrarDelCarrito (array) {
    const botonAniadir = document.querySelectorAll(".likebutton2")
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.filter((elemento, i) => {
                return elemento.id != Number(id)
            })
            infoDelLs = filtrarProducto
            localStorage.setItem("carrito", JSON.stringify(infoDelLs))
            console.log(infoDelLs)    
            cardHtml(infoDelLs)
            borrarDelCarrito(infoDelLs)       
        }
    })
}

borrarDelCarrito(infoDelLs )

const botonBorrarCarrito = document.querySelector("#borrar-productos")

botonBorrarCarrito.onclick = () => {
    localStorage.removeItem("carrito")
    document.querySelector(".carrito-contenedor").innerHTML = "no hay productos"
}