/* PEGANDO OS ELEMENTOS DO CSS*/
const inputUsername = document.getElementById("usuario").value

const inputPassword = document.getElementById("senha").value

/*FUNÇÕES*/

function cadastro() {

  if(inputUsername <= 0){
    console.log("Usuario indefinido")
  }if(inputPassword <= 0){
    console.log("Esse campo é obrigatório")
  }else{
    console.log("usuario logado com sucesso!")
  }
}


