const express = require("express");
const path = require("path");
const jsonUtil = require("fs")
const aSystem = require('./accountSystem');
const jFIle =  require('./PrivateValues/accounts.json');
const { parse } = require("path");
//const verify = require('./test');
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/images"));
app.use(express.urlencoded({extended : true}));
//verify.check();
const jjj = JSON.stringify(jFIle)
const parsedFile = JSON.parse(jjj);
console.log(JSON.parse(jjj)[0].username);

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

    app.post("/register", (req, res) => {
        
        //console.log(typeof(JSON.parse(jjj)))
        let l = JSON.parse(jjj).length
        aSystem.checkAccount(req.body.username, req.body.password, req.body.email, l, jjj);
        res.sendFile(path.join(__dirname + "/register.html"));
        });    

app.listen(3000, "192.168.0.69", () => {
    console.log("Server is up");
})



function writeInAccount(newString){
  
    jsonUtil.writeFile('./PrivateValues/accounts.json', JSON.stringify(newString), function err(){if(err) console.log("ohno")});
}

module.exports.writeInAccount = writeInAccount;
module.exports.parsedFile = parsedFile;
module.exports.jjj = jjj;