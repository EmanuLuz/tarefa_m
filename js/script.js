function login () {

const user = document.getElementById("usuario").value;

const password = document.getElementById("senha").value;

if (user == "emanueli.bessa@escola.pr.gov.br" && password == "246") {
    alert("Sucesso");

}else{
    alert("Algo deu errado, tente novamente");

    console.log("email ou senha errado");
}
}