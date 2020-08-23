//Array productos en stock
var productos = [
    {
        id: 1,
        nombre: "harina",
        precioUnitario: 35,
        cantidad: 9
    },
    {
        id: 2,
        nombre: "pan",
        precioUnitario: 25,
        cantidad: 120
    },
    {
        id: 3,
        nombre: "papa",
        precioUnitario: 52,
        cantidad: 23,
    },
    {
        id: 4,
        nombre: "palta",
        precioUnitario: 55,
        cantidad: 23
    },
    {
        id: 5,
        nombre: "fideos",
        precioUnitario: 85,
        cantidad: 58
    },
    {
        id: 6,
        nombre: "aceite",
        precioUnitario: 350,
        cantidad: 85
    },
    {
        id: 7,
        nombre: "sopa",
        precioUnitario: 86,
        cantidad: 12
    },
    {
        id: 8,
        nombre: "mermelada",
        precioUnitario: 108,
        cantidad: 58
    },
    {
        id: 9,
        nombre: "porotos",
        precioUnitario: 69,
        cantidad: 74
    },
    {
        id: 10,
        nombre: "lentejas",
        precioUnitario: 85,
        cantidad: 14
    },
    {
        id: 11,
        nombre: "mandarina",
        precioUnitario: 43,
        cantidad: 86
    },
    {
        id: 12,
        nombre: "banana",
        precioUnitario: 79,
        cantidad: 111
    },
    {
        id: 13,
        nombre: "leche de almendras",
        precioUnitario: 145,
        cantidad: 54
    },
    {
        id: 14,
        nombre: "papel higienico",
        precioUnitario: 147,
        cantidad: 1025
    },
    {
        id: 15,
        nombre: "lavandina",
        precioUnitario: 55,
        cantidad: 95
    },
    {
        id: 16,
        nombre: "alcohol en gel",
        precioUnitario: 123,
        cantidad: 62
    },
    {
        id: 17,
        nombre: "shampoo",
        precioUnitario: 400,
        cantidad: 41
    },
    {
        id: 18,
        nombre: "arroz",
        precioUnitario: 66,
        cantidad: 100
    },
    {
        id: 19,
        nombre: "harina",
        precioUnitario: 35,
        cantidad: 46
    },
    {
        id: 20,
        nombre: "salsa de tomate",
        precioUnitario: 35,
        cantidad: 35
    },
];

//Creo array para los productos agregados al carrito
var productosComprados = [];

//Estructura de la lista de productos en stock
//<tr>
//  <td>salsa de tomate</td> nombre
//  <td>20</td> stock
//  <td>35</td> precioUnitario
//  <td>#</td> input
//  <td>Agregar al carrito</td> Boton
//</tr>


//Creo lista de productos en stock
function ListaProductos(productos){
    
    //Nombre
    var nombreElemento = document.createElement('td');
    var nombreTexto = document.createTextNode(productos.nombre);
    nombreElemento.appendChild(nombreTexto);

    //Stock
    var stockElemento = document.createElement('td');
    var stockTexto = document.createTextNode(productos.cantidad);
    stockElemento.appendChild(stockTexto);

    //Precio Unitario
    var precioU = document.createElement('td');
    var precioUTexto = document.createTextNode(productos.precioUnitario);
    precioU.appendChild(precioUTexto);

    //Input
    var inputElemento = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('placeHolder', 'Ingrese cantidad');
    inputElemento.appendChild(input);

    //Botón Agregar
    var botonAElemento = document.createElement('td');
    var botonAgregar = document.createElement('button');
    var botonAgregarTexto = document.createTextNode('Agregar');
    botonAgregar.appendChild(botonAgregarTexto);
    botonAgregar.addEventListener('click', agregarAlCarrito);
    botonAgregar.setAttribute('id', productos.id);
    botonAElemento.appendChild(botonAgregar);

    //TR Lista de Stock
    var listaStock = document.createElement('tr');
    listaStock.setAttribute('id', productos.id);
    listaStock.appendChild(nombreElemento);
    listaStock.appendChild(stockElemento);
    listaStock.appendChild(precioU);
    listaStock.appendChild(inputElemento);
    listaStock.appendChild(botonAElemento);
    
    //Agrego tr al body 
    var tbodyLista = document.getElementById('ListaProductos');
    tbodyLista.appendChild(listaStock);

}

//funcion que recorre el array y crea la tabla
productos.forEach(item => {
    ListaProductos(item);
});


//Estructura de la lista del carrito
//<tr>
//  <td>salsa de tomate</td> ProductoSeleccionado
//  <td>20</td> Precio del producto Elegido
//  <td>35</td> Cantidad Seleccionada
//  <td>#</td> PrecioTotal
//  <td>Quitar del carrito</td> Boton borrar
//</tr>


//Creo la lista del carrito
function listaCarrito(productosComprados, e){

    var tbody = document.getElementById('CarritoCompras');
    tbody.innerHTML = '';

    productosComprados.forEach(item => {

        //Producto Seleccionado
        var productoSelecc = document.createElement('td');
        var productoSeleccTexto = document.createTextNode(item.nombre);
        productoSelecc.appendChild(productoSeleccTexto);


        //Precio Unitario del producto seleccionado
        var precioSelecc = document.createElement('td');
        var precioSeleccTexto = document.createTextNode(item.precioUnitario);
        precioSelecc.appendChild(precioSeleccTexto);


        //Cantidad Seleccionada
        var cantidadSelecc = document.createElement('td');
        var cantidadSeleccTexto = document.createTextNode(item.cantidad);
        cantidadSelecc.appendChild(cantidadSeleccTexto);


        //Precio total del producto seleccionado
        var totalProducto = document.createElement('td');
        var totalProductoTexto = document.createTextNode(item.precioUnitario*item.cantidad);
        totalProducto.appendChild(totalProductoTexto);


        //Boton borrar del carrito
        var borrarElemento = document.createElement('td');
        var borrar = document.createElement('button');
        var borrarTexto = document.createTextNode('Borrar');
        borrar.appendChild(borrarTexto);
        borrar.addEventListener('click', quitardelCarrito);
        borrar.setAttribute('id', item.id);
        borrarElemento.appendChild(borrar);


        //TR Carrito
        var carrito = document.createElement('tr');
        carrito.setAttribute('id', productos.id);
        carrito.appendChild(productoSelecc);
        carrito.appendChild(precioSeleccTexto);
        carrito.appendChild(cantidadSelecc);
        carrito.appendChild(totalProducto);
        carrito.appendChild(borrarElemento);

        //Agrego tr al body
        var tbodyCarrito = document.getElementById('CarritoCompras');
        tbodyCarrito.appendChild(carrito);

    });
}


//Funcion para agregar al carrito
function agregarAlCarrito(e){
    //ALERTAS
    //Muestra etn consola 
    var input = e.target.parentNode.parentNode.childNodes[3].firstChild;
    console.log('Seleccionó '+input.value+' unidades del producto id:'+e.target.id);

    //Alerta No hay suficiente stock
    var cantidadElegida = input.value;
    var idProducto = e.target.id;
    var enStock = productos[idProducto-1].cantidad - cantidadElegida;
        if(enStock <0) {
            alert('No hay suficiente stock.');
            return;
        }

        //Alerta ingresar cantidad
        if(cantidadElegida == ''){
            alert('Debe ingresar la cantidad requerida');
            return;
        }

    //Alerta producto ya comprado
    var idBoton = e.target.id;
    var indiceComprados = productosComprados.findIndex(e => e.id == idBoton);
        if (indiceComprados != -1) {
            alert('Este producto ya fue agregado al carrito.');
            return;
        }

    //Sumo la informacion de cada uno    
    Auxiliar(productos[idProducto-1], input.value);
    listaCarrito(productosComprados);
}

//Funcion para agregar la informacion                            
function Auxiliar (item,input){
    var infoProductos = {
        id:'',
        nombre:'',
        precioUnitario:'',
        cantidad:'',
    }

    infoProductos.id = item.id;
    infoProductos.nombre = item.nombre;
    infoProductos.precioUnitario = item.precioUnitario;
    infoProductos.cantidad = input;

    productosComprados.push(infoProductos);
}



//Quitar del carrito
function quitardelCarrito(e){
    carrito = e.target.parentNode.parentNode;
    carrito.parentNode.removeChild(carrito);
    console.log('Eliminó el producto id: '+e.target.id+' del carrito.');

}


//Total de la compra
//Funcion cuando haga click indique el total de la compra
var mensaje = document.querySelector('h4');

function Cuandohagaclick(){
    var totalCompra = 0;

    productosComprados.forEach(item => {
        totalCompra= item.precioUnitario*item.cantidad+totalCompra;
    });

    mensaje.innerHTML = ('El total de la compra es $ ')+totalCompra;
}