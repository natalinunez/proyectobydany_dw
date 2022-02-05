"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var urlCategorias = '../data/categorias.json'; //este bloque de codigo es para establecer en el localStorage el valor de la categoria (1,2,3)
//que se seleccione en la pagina principal

function fCategoriaAretes() {
  // let valor = categoriaAretes.innerText.toLowerCase()
  localStorage.setItem('lscategoria', 1);
}

;

function fcategoriaCollares() {
  localStorage.setItem('lscategoria', 2);
  console.log("holis");
}

;

function fcategoriaPulseras() {
  localStorage.setItem('lscategoria', 3);
}

; //Ini agregado por desafio: usar ajax y jquery

function colocarNombreCategoria(idCategoria) {
  console.log("idCategoria=".concat(idCategoria));
  $.getJSON(urlCategorias, function (response, status) {
    if (status === "success") {
      var datos = response;
      console.log("datos=" + datos); //no se puede visualizar datos correctamente

      console.log(datos);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = datos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var dato = _step.value;

          if (+dato.id === +idCategoria) {
            $("#idFontsizeColorWeight").append(dato.name);
            $("#idCategoriaEtiqueta").append("<h3 class=\"estiloNombreCategoria\">  ".concat(dato.description, "\n            </h3>"));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  });
} //Fin agregado por desafio: usar ajax y jquery


var productosCategoria,
    idCategoria,
    productos = [];
var contenedorProducto = document.getElementById('contenedorProducto');

var Producto =
/*#__PURE__*/
function () {
  function Producto(id, nombre, precio, categoria, imagen) {
    _classCallCheck(this, Producto);

    this.id = id, this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
  } // Metodos de la clase


  _createClass(Producto, [{
    key: "todosProductos",
    value: function todosProductos() {
      productos.push(new Producto(1, "Gota cristales", 10, "aretes", "../images/aretes/aretes-gota-cristales-dorado.jpg"));
      productos.push(new Producto(2, "Rayitos de luz", 20, "aretes", "../images/aretes/Aretes-rayito.jpg"));
      productos.push(new Producto(3, "Argollas chispas colgantes", 25, "aretes", "../images/aretes/Argollas-chispa-colgante.jpg"));
      productos.push(new Producto(4, "Argolla cristal con estrellas", 35, "aretes", "../images/aretes/Argollas-cristal-con-estrellas.jpg"));
      productos.push(new Producto(5, "argollas delgaditas", 33, "aretes", "../images/aretes/Argollas-delgaditas-14mm.jpg"));
      productos.push(new Producto(6, "Argolla doble cadena", 16, "aretes", "../images/aretes/Argollas-doble-cadena.jpg")); // productos.push(new Producto(7, "Argolla doble", 14, "aretes","../images/aretes/Argollas-doble.jpg"));

      productos.push(new Producto(8, "Corazón calado plata", 30, "collares", "../images/collares/cadena-corazon-calado-plata-1228x1536-1.jpg"));
      productos.push(new Producto(9, "Perla cristal", 35, "collares", "../images/collares/cadena-perla-cristal-1228x1536-1.jpg"));
      productos.push(new Producto(10, "Trinity tree", 35, "collares", "../images/collares/cadena-trinity-1229x1536-1.jpg"));
      productos.push(new Producto(11, "Mom calado", 30, "collares", "../images/collares/DSCF5839-1024x859-1.jpg"));
      productos.push(new Producto(12, "Estrella jerusalén", 35, "collares", "../images/collares/DSCF9672-1024x967-1.jpg"));
      productos.push(new Producto(13, "Corazón tree ", 35, "collares", "../images/collares/DSCF9684-scaled-1.jpg")); // productos.push(new Producto(14, "princesa", 35, "collares","../images/collares/Formato-Post.jpg")); 

      productos.push(new Producto(15, "María lola", 15, "pulseras", "../images/pulseras/Maria-lola-bf.jpg"));
      productos.push(new Producto(17, "Nico corona", 15, "pulseras", "../images/pulseras/nico-corona-scaled-1.jpg"));
      productos.push(new Producto(18, "Pulsera rodeada", 25, "pulseras", "../images/pulseras/pulsera_1.jpg"));
      productos.push(new Producto(19, "Julia lola", 15, "pulseras", "../images/pulseras/pulsera_4.jpg"));
      productos.push(new Producto(20, "Piedra bordada", 15, "pulseras", "../images/pulseras/pulsera_5.jpg"));
      productos.push(new Producto(21, "Pulsera colgante", 25, "pulseras", "../images/pulseras/pulsera_6.jpg"));
    }
  }, {
    key: "filtrarProductosCategoria",
    value: function filtrarProductosCategoria(idCategoria) {
      switch (idCategoria) {
        case 1:
          productosCategoria = productos.filter(function (producto) {
            return producto.categoria === "aretes";
          });
          break;

        case 2:
          productosCategoria = productos.filter(function (producto) {
            return producto.categoria === "collares";
          });
          break;

        case 3:
          productosCategoria = productos.filter(function (producto) {
            return producto.categoria === "pulseras";
          });
          break;

        default:
          break;
      }
    } //coloca los productos por categoria en el HTML

  }, {
    key: "renderProducts",
    value: function renderProducts(productosCategoria, etiqueta) {
      etiqueta.innerHTML = "";
      var producto;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = productosCategoria[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          producto = _step2.value;
          etiqueta.innerHTML += "\n                <div class=\"bordeAzul card_1 card__hover\" >\n                    <img\n                        src=\"".concat(producto.imagen, "\"  alt=\"..\"    \n                        class=\"bordeVerde imageClass\"  />\n                    <div class=\"bordeRojo descriptionCard\">\n                        <h3 class=\"bordeVerde styleName\">").concat(producto.nombre, "</h3>\n                        <h5 class=\"bordeAzul stylePrecio\">$ ").concat(producto.precio, "<h5>\n                        <a id=\"").concat(producto.id, "\" href=\"#\" class=\"bordeAzul card__boton\" >\n                           Ver detalles del producto\n                        </a>\n                    </div>\n                </div>    \n            ");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return Producto;
}(); //Instanciamos un objeto para llamar a los metodos de la clase


var productoMetodos = new Producto(); //Crea una lista de objetos de los productos

productoMetodos.todosProductos(); //obtenemos la categoria que elegimos en la pagina principal

idCategoria = +localStorage.getItem('lscategoria'); //filtramos los productos por categoria

productoMetodos.filtrarProductosCategoria(idCategoria); //invocamos al metodo para renderizar en le HTML los productos por categoria

productoMetodos.renderProducts(productosCategoria, contenedorProducto);
colocarNombreCategoria(idCategoria);