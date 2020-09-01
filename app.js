class Producto{
    constructor(nombre, marca, precio){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}
// Clase de la interfaz de usuario
class UI{
    agregarProducto(producto){
       const lista =  document.getElementById('lista_productos');
       const elemento = document.createElement('div');
       elemento.innerHTML = `
                <div class="card text-center mb-4"> 
                    <div class="card-body">
                    <strong>Nombre</strong>: ${producto.nombre}
                    <strong>Marca</strong>: ${producto.marca}
                    <strong>Precio</strong>:$ ${producto.precio}
                    <a href= "" class="btn btn-danger btn-sm" name="eliminar">Eliminar <i class="fas fa-trash-alt"></i></a>
                    </div>
                </div>
       `;

       lista.appendChild(elemento);
    }

    limpiarForm(){
        document.getElementById('formularioProductos').reset();
    }

    eliminarProducto(elemento){
        if(elemento.name === 'eliminar'){
            elemento.parentElement.parentElement.remove();
            this.mostrarMensajes('Producto eliminado satisfactoriamente...', 'danger');
        }
    }

    mostrarMensajes(mensaje, cssClass){
        const cuerpo = document.createElement('div');
        cuerpo.className = `alert alert-${cssClass} mt-4`;
        cuerpo.appendChild(document.createTextNode(mensaje));

        // Mostramos el mensaje en pantalla
        const contenedor = document.querySelector('.container');
        const app = document.querySelector('#app');
        contenedor.insertBefore(cuerpo, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// Eventos del DOM
document.getElementById('formularioProductos')
        .addEventListener('submit', function(e){
            const nombre = document.getElementById('nombre').value,
                  marca = document.getElementById('marca').value,
                  precio = document.getElementById('precio').value;

            const producto = new Producto(nombre, marca, precio);
            const ui = new UI();

            if(nombre === '' || marca === '' || precio === ''){
                ui.mostrarMensajes('Faltan datos en el producto... ', 'primary');
            }

            ui.agregarProducto(producto);
            ui.mostrarMensajes('Producto agregado satisfactoriamente...', 'success');
            ui.limpiarForm();

            e.preventDefault();
})

document.getElementById('lista_productos')
        .addEventListener('click', function(e){
            const ui = new UI();
            ui.eliminarProducto(e.target);
            e.preventDefault();

})
