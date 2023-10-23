
let chave = '';
let name = '';



export function setUserSession(userName){

         // Defina o nome da chave e o valor que você deseja armazenar
 chave = "userLoged";
 name = userName;

// Defina o tempo de expiração em milissegundos (por exemplo, 30 minutos)
const tempoExpiracao = 30 * 60 * 1000;

// Obtenha a hora atual
const agora = new Date().getTime();


// Crie um objeto que contém o valor e a hora de expiração
const objetoArmazenado = {
  name: name,
  expiracao: agora + tempoExpiracao,
};

// Armazene o objeto na sessionStorage
sessionStorage.setItem(chave, JSON.stringify(objetoArmazenado));

return false

}

export function validaUserSession(){

  chave = "userLoged";
  

// Para verificar se o tempo de expiração já venceu e recuperar o valor:
const itemArmazenado = JSON.parse(sessionStorage.getItem(chave));

if (itemArmazenado) {
  if (itemArmazenado.expiracao > new Date().getTime()) {
    // A chave ainda está dentro do período de tempo de expiração
    const valorRecuperado = itemArmazenado.name;
    //console.log(valorRecuperado);

  return valorRecuperado
  } else {
    // A chave expirou
    //console.log("A chave expirou.");
    let reult = "A chave expirou."
   
    // Você pode remover a chave da sessionStorage se desejar
   sessionStorage.removeItem(chave);
   localStorage.removeItem('token')
  // console.log(reult)
   return reult
  }
} else {
  // A chave não existe
  //console.log("A chave não existe.");
  let reult = "A chave não existe."
  return reult
}
}