
let sliderElement = document.querySelector("#slider"); let button Element document.querySelector("#button");

lot size Password = document.querySelector("#valor");

let password = document.querySelector("#password"); let containerPassword document.querySelector("#container-password");

let novaSenha ="

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891;

sizePassword.innerHTML = sliderElement.value; slider.oninput = function() (

sizePassword.innerHTML = this.value;

function generatePassword(){

lot pass="

for(let i=0, n charset.length; i < sliderElement.value; ++i){

pass + charset.charAt(Math.floor(Math.random()*n));

)

console.log(pass)

containerPassword.classList.remove("hide");

password.innerHTML = pass;

novaSenha pass;

function copyPassword(){
  alert("Senha copiada com sucesso!")
  navegador.clipboard.writeText(novaSenha);
}
