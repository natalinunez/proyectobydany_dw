//este bloque de codigo es para establecer en el localStorage el valor de la categoria (1,2,3)
//que se seleccione en la pagina principal

function fCategoriaAretes(){
    // let valor = categoriaAretes.innerText.toLowerCase()
    localStorage.setItem('lscategoria',1);    
};

function fcategoriaCollares(){
    localStorage.setItem('lscategoria',2); 
    console.log("holis");   
};

function fcategoriaPulseras(){
  localStorage.setItem('lscategoria',3);
};

let productosCategoria, idCategoria, productos = [];
const contenedorProducto = document.getElementById('contenedorProducto');

class Producto {
    constructor(id, nombre, precio, categoria, imagen) {    
        this.id = id,
        this.nombre  = nombre;
        this.precio  = precio;
        this.categoria = categoria;
        this.imagen = imagen
    } 
    
    // Metodos de la clase
    todosProductos(){        
        productos.push(new Producto(1, "Gota cristales", 10, "aretes","../images/aretes/aretes-gota-cristales-dorado.jpg"));
        productos.push(new Producto(2, "Rayitos de luz", 20, "aretes","../images/aretes/Aretes-rayito.jpg")); 
        productos.push(new Producto(3, "Argollas chispas colgantes", 25, "aretes","../images/aretes/Argollas-chispa-colgante.jpg"));       
        productos.push(new Producto(4, "Argolla cristal con estrellas", 35, "aretes","../images/aretes/Argollas-cristal-con-estrellas.jpg"));  
        productos.push(new Producto(5, "argollas delgaditas", 33, "aretes","../images/aretes/Argollas-delgaditas-14mm.jpg"));
        productos.push(new Producto(6, "Argolla doble cadena", 16, "aretes","../images/aretes/Argollas-doble-cadena.jpg"));  
        productos.push(new Producto(7, "Argolla doble", 14, "aretes","../images/aretes/Argollas-doble.jpg"));
        
        productos.push(new Producto(8, "Corazón calado plata", 30, "collares","../images/collares/cadena-corazon-calado-plata-1228x1536-1.jpg")); 
        productos.push(new Producto(9, "Perla cristal", 35, "collares","../images/collares/cadena-perla-cristal-1228x1536-1.jpg")); 
        productos.push(new Producto(10, "Trinity tree", 35, "collares","../images/collares/cadena-trinity-1229x1536-1.jpg")); 
        productos.push(new Producto(11, "Mom calado", 30, "collares","../images/collares/DSCF5839-1024x859-1.jpg")); 
        productos.push(new Producto(12, "Estrella jerusalén", 35, "collares","../images/collares/DSCF9672-1024x967-1.jpg")); 
        productos.push(new Producto(13, "Corazón tree ", 35, "collares","../images/collares/DSCF9684-scaled-1.jpg")); 
        // productos.push(new Producto(14, "princesa", 35, "collares","../images/collares/Formato-Post.jpg")); 

        productos.push(new Producto(15, "María lola", 15, "pulseras","../images/pulseras/Maria-lola-bf.jpg")); 
        productos.push(new Producto(17, "Nico corona", 15, "pulseras","../images/pulseras/nico-corona-scaled-1.jpg"));
        productos.push(new Producto(18, "Pulsera rodeada", 25, "pulseras","../images/pulseras/pulsera_1.jpg")); 
        productos.push(new Producto(19, "Julia lola", 15, "pulseras","../images/pulseras/pulsera_4.jpg")); 
        productos.push(new Producto(20, "Piedra bordada", 15, "pulseras","../images/pulseras/pulsera_5.jpg"));
        productos.push(new Producto(21, "Pulsera colgante", 25, "pulseras","../images/pulseras/pulsera_6.jpg")); 


    }

    filtrarProductosCategoria(idCategoria){
        switch(idCategoria) {
            case 1:                
                productosCategoria = productos.filter(producto => producto.categoria === "aretes");  
                break;
            case 2:
                productosCategoria = productos.filter(producto => producto.categoria === "collares");                                                
                break;
            case 3:
                productosCategoria = productos.filter(producto => producto.categoria === "pulseras");                                                
                break;                
            default:                                
                break;
        }
    }    

    //coloca los productos por categoria en el HTML
    renderProducts(productosCategoria, etiqueta){
        etiqueta.innerHTML="";
        let producto;
        for(producto of productosCategoria){
            etiqueta.innerHTML+=`
                <div class="card my-3 p-2 card__hover" style="width: 18rem;">
                    <img src="${producto.imagen}" class="card-img-top" alt="..">
                    <div class="card-body m-auto text-center card__body">
                        <h5 class="card-title">${producto.nombre}</h5>                                       
                        <h3 class="mb-3">$ ${producto.precio}</h5>                            
                    </div>                          
                    <a id="${producto.id}" href="#" class="btn mb-3 card__boton">AGREGAR AL CARRITO</a>                
                </div>
            `
        }
    }    
}

//Instanciamos un objeto para llamar a los metodos de la clase
const productoMetodos = new Producto();

//Crea una lista de objetos de los productos
productoMetodos.todosProductos();

//obtenemos la categoria que elegimos en la pagina principal
idCategoria = +localStorage.getItem('lscategoria');

//filtramos los productos por categoria
productoMetodos.filtrarProductosCategoria(idCategoria);

//invocamos al metodo para renderizar en le HTML los productos por categoria
productoMetodos.renderProducts(productosCategoria, contenedorProducto);

