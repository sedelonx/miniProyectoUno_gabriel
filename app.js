//añado las librerías externas y propias necesarias para el funcionamiento general
const express = require("express");
const path = require("path");
const jsonUtil = require("fs")
const aSystem = require('./accountSystem');
const jFIle =  require('./PrivateValues/accounts.json');
const { parse } = require("path");
//const verify = require('./test');
const app = express();

//Hago que las carpetas "public" y "public/images" sean accesibles y que se puedan cargar en la página
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/images"));
app.use(express.urlencoded({extended : true}));
//verify.check();

//Básicamente hago que se carge un archivo .JSON que tiene información de las cuentas registradas, es mala práctica, pero es para probar
const jjj = JSON.stringify(jFIle)
const parsedFile = JSON.parse(jjj);
console.log(JSON.parse(jjj)[0].username);


//Peticiones de las páginas en general y que te redirigan a su correspondiente extensión
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname + "/index.html"))
});
app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
    });

app.get("/order", (req, res) => {
    res.sendFile(path.join(__dirname + "/order.html"))
    });

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname + "/register.html"))
    });


//registrar y procesar el registro   
    app.post("/register", (req, res) => {
        
        //console.log(typeof(JSON.parse(jjj)))
        let l = JSON.parse(jjj).length
        aSystem.checkAccount(req.body.username, req.body.password, req.body.email, l, jjj);
        res.sendFile(path.join(__dirname + "/register.html"));
        });    


//Acá la app va a permitir pasar a aquellos que pasen por la ip estática que establecí en mi computadora
//PARA QUE FUNCIONE DEBEN REEMPLAZAR LA IP POR SU PROPIA IP ESTÁTICA O A 127.0.0.1 (El localHost)
app.listen(3000, "192.168.0.69", () => {
    console.log("Server is up");
})


//La función en sí para guardar en el archivo JSON la cuenta generada
function writeInAccount(newString){
  
    jsonUtil.writeFile('./PrivateValues/accounts.json', JSON.stringify(newString), function err(){if(err) console.log("ohno")});
}

//Exportar algunos módulos para poder acceder a los archivos en otros JS
module.exports.writeInAccount = writeInAccount;
module.exports.parsedFile = parsedFile;
module.exports.jjj = jjj;