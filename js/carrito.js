let carrito;

if(JSON.parse(localStorage.getItem('carrito'))) {
  carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
  localStorage.setItem('carrito', JSON.stringify([]))
  carrito = JSON.parse(localStorage.getItem('carrito'))
}

const totalCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}

const body = document.getElementById("carrito");
console.log(carrito)
if (carrito.length == 0) {
    const texto = `
        <article class="h2">
            <h2>Mi Carrito</h2><hr>
        </article>
        <article>
            <h4>Su carrito esta vacío</h4>
            <h4>¿Desea volver al <a href="../index.html">Inicio</a>?</h4>
        </article>
        `;        
    body.innerHTML += texto;    
} 
else {
    const titulo = `
    <div class"carritoContainer">
        <h1 class="carritoH1">Carrito</h1>
    </div>`;
    body.innerHTML += titulo;
    const table = `    
    <div class="tableContainer">
    <table>
        <thead>
            <tr>
                <th></th>
                <th class="txtTabla">Productos</th>
                <th class="txtTabla">Cantidad</th>
                <th class="txtTabla">Precio</th>
            </tr>
        </thead>
        <Tbody id="tbody">
        </Tbody>
        <tfoot>
            <tr>
                <th></th>
                <th></th>
                <th class="txtTotal">Total:</th>
                <th id="total">$${totalCarrito().toLocaleString()}</th>
            </tr>
        </tfoot>
    </table>
    </div>
    <div class="btn-container">
        <button class="btnTerminar">Terminar compra</button>
    </div>`;
    body.innerHTML += table
    const tbody = document.getElementById('tbody')
    for (let i = 0; i < carrito.length; i++) {
        const element = carrito[i];
        const { id, nombre, precio, img, cantidad } = element;
        const cart = `
        <tr id=${id}>
            <th><i class="fa-solid fa-trash btnEliminar"></i></th>
            <th class="detallesTabla"><img class="imgProductoCarrito" src="../${img}" alt="${nombre}"><span class="nombreProducto">${nombre}</span></th>
            <th>${cantidad}</th>
            <th>$${(cantidad * precio).toLocaleString()}</th>
        </tr>
        `;
        tbody.innerHTML += cart;
    }
}


/* const btnTerminar = document.getElementsByClassName("btnTerminar");
const elemento = btnTerminar;
elemento.addEventListener("click", terminarCompra);

function terminarCompra() {
    alert("Su compra se ha realizado correctamente. Muchas gracias.")
}

const btnEliminar = document.getElementsByClassName("btnEliminar");

for (let i = 0; i < btnEliminar.length; i++) {
    const element = btnEliminar[i];
    element.addEventListener("click", EliminarDelCarrito);
}
    
function ElimarDelCarrito(e) {
    const btn = e.target;
    const botonId = btn.getAttribute("id");
    const productoEncontrado = productos.reduce(prod => prod.id == botonId);
    const enCarrito = carrito.find(prod => prod.id == productoEncontrado.id);
    localStorage.setItem('carrito', JSON.stringify(carrito))
} */