"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Producto = function Producto(nombre, marca, precio) {
  _classCallCheck(this, Producto);

  this.nombre = nombre;
  this.marca = marca;
  this.precio = precio;
}; // Clase de la interfaz de usuario


var UI =
/*#__PURE__*/
function () {
  function UI() {
    _classCallCheck(this, UI);
  }

  _createClass(UI, [{
    key: "agregarProducto",
    value: function agregarProducto(producto) {
      var lista = document.getElementById('lista_productos');
      var elemento = document.createElement('div');
      elemento.innerHTML = "\n                <div class=\"card text-center mb-4\"> \n                    <div class=\"card-body\">\n                    <strong>Nombre</strong>: ".concat(producto.nombre, "\n                    <strong>Marca</strong>: ").concat(producto.marca, "\n                    <strong>Precio</strong>:$ ").concat(producto.precio, "\n                    <a href= \"\" class=\"btn btn-danger btn-sm\" name=\"eliminar\">Eliminar <i class=\"fas fa-trash-alt\"></i></a>\n                    </div>\n                </div>\n       ");
      lista.appendChild(elemento);
    }
  }, {
    key: "limpiarForm",
    value: function limpiarForm() {
      document.getElementById('formularioProductos').reset();
    }
  }, {
    key: "eliminarProducto",
    value: function eliminarProducto(elemento) {
      if (elemento.name === 'eliminar') {
        elemento.parentElement.parentElement.remove();
        this.mostrarMensajes('Producto eliminado satisfactoriamente...', 'danger');
      }
    }
  }, {
    key: "mostrarMensajes",
    value: function mostrarMensajes(mensaje, cssClass) {
      var cuerpo = document.createElement('div');
      cuerpo.className = "alert alert-".concat(cssClass, " mt-4");
      cuerpo.appendChild(document.createTextNode(mensaje)); // Mostramos el mensaje en pantalla

      var contenedor = document.querySelector('.container');
      var app = document.querySelector('#app');
      contenedor.insertBefore(cuerpo, app);
      setTimeout(function () {
        document.querySelector('.alert').remove();
      }, 3000);
    }
  }]);

  return UI;
}(); // Eventos del DOM


document.getElementById('formularioProductos').addEventListener('submit', function (e) {
  var nombre = document.getElementById('nombre').value,
      marca = document.getElementById('marca').value,
      precio = document.getElementById('precio').value;
  var producto = new Producto(nombre, marca, precio);
  var ui = new UI();

  if (nombre === '' || marca === '' || precio === '') {
    ui.mostrarMensajes('Faltan datos en el producto... ', 'primary');
  }

  ui.agregarProducto(producto);
  ui.mostrarMensajes('Producto agregado satisfactoriamente...', 'success');
  ui.limpiarForm();
  e.preventDefault();
});
document.getElementById('lista_productos').addEventListener('click', function (e) {
  var ui = new UI();
  ui.eliminarProducto(e.target);
  e.preventDefault();
});