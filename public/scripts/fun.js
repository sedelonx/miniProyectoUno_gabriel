   
const express = require("express");

  let currentAccounts = null;
  currentAccounts = JSON.parse(acc);
  
  function direct() {
    alert("amogus")
}


function loginPage(){
location.href = "login";

}

function registerPage(){
  location.href = "register";
}



function Home(){
  
  location.href = "index";
}

function Order(){

  location.href = "order";
}
    
function registerAttempt(){
  console.log("registering");
  _name = document.getElementById("name");
  _password = document.getElementById("password");
  _email = document.getElementById("email");

  for(let i = 0; i < currentAccounts.a.length(); i++){
    var b = currentAccounts.a
    if(_name == b[i].name) return;
    if(_password == b[i].password) return;
    if(_email == b[i].email) return;
    registerNewAccount(_name, _password, _email);

  }
}    

function registerNewAccount(n, p, e){
    currentAccounts.a.push(new account(n, p, e));
   
    overWriteJson();
}

function overWriteJson(){
  var j = JSON.stringify(currentAccounts);
  FileSystem.writeFile("accounts_.json", j, (error=>{if(error)throw error;}));

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
    
