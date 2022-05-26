// >>CONSIGNA:
//   1) Utilizando la misma API de productos del proyecto entregable de la clase anterior,
// construir un web server (no REST) que incorpore:
//     a)Un formulario de carga de productos en la ruta raiz (confirugar la ruta '/productos' para recibir el POST
//     y redirigir al mismo formulario)
//     b)Una vista de los productos cargados (utilizando plantillas de handlebars ) en la ruta GET '/productos'.
//     c) Ambas paginas  contaran con un boton que redirija a la otra.

//   2) Manteniendo la misma funcionalidad  reemplazar el motor de las plantillas  handlebars por Pug.

//   3) Manteniendo la misma funcionalidad reemplazar el motor de las plantillas handlebars por EJS .

//   4) Por escrito, indicar cual de los tres motores de plantillas prefieres para tu proyecto y por que.

// >>Aspectos a incluir en el entregable :
//     -Realizar las plantillas correspondientes que permitan recorrer el array de productos y representarlo
// en forma de tabla dinamica , siendo sus cabeceras el nombre del producto, el precio y su foto ( la foto se mostrara
// como una imagen de la tabla)
// -En el caso de no encontrarse datos, mostrar el mensaje:'No hay productos'.
// >>Sugerencias :
//     -Utilizar iconfinder(https://www.iconfinder.com/free_icons) para obtener  la url de las imagenes
// de los productos(click derecho sobre la imagen  -> copiar la direccion de la imagen )

// >>Opcional
//     --Utilizar Bootstrap para maquetar la vista creada por dicho motor de plantillas y
// el formulario de ingreso  de productos.

const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");
const routes = require('./router/main')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.use('/', routes)

app.set('views', './views/layout')
app.set('view engine', 'pug')


// app.get('/datos', (req, res)=>{
//     const {min, nivel, max, titulo}= req.query
//     res.render('meter.pug',{ min, nivel, max, titulo})
// })

const PORT = 8080;

const server = app.listen(PORT, ()=>{
    let mensaje = `Servidor escuchando en el puerto ${PORT}`
    return mensaje
})
server.on('error', error => console.log(`Error en el servidor ${error}`))
console.log(server)