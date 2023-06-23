const fs = require("fs");
const path = require("path");
const mainS = require("./app");


var realAccounts = null;
var ra = null;




function checkAccount(name, pass, email, l, sss){
  console.log("on it")
  var t = JSON.parse(mainS.jjj);
  console.log("done")
    //console.log(t)
    realAccounts = t;
    ra = t;

    const testu = JSON.parse(mainS.jjj);
    console.log("SUPPOSED TO BE "+ testu.lenght)
   


    for(let i = 0; i< l; i++){
      console.log(t[i].username);
      console.log(t[i].email);
        if(
            name != t[i].username &&
            email != t[i].email
        ){
          console.log("add one");
            return(registerNewAccount(name, pass, email));
        }
    }
}

function registerNewAccount(n, p, e){
    ra.push({"username" : n, "password" : p, "email" : e});
    mainS.writeInAccount(ra);
}


class account{
    constructor(name, password, email){
      this.name = name;
      this.password = password;
      this.email = email;
    }
  }
  
  class accounts{
    constructor(a){
      this.a = [account];
    }
  }
  module.exports.realAccounts = realAccounts;
  module.exports.checkAccount = checkAccount;