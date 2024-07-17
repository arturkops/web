import services from "./";
import firebaseServices from "./firebase";
import axios from "axios";
const jsonAPIClientes = axios.create({
  baseURL: process.env.URL,
});
const clientesServices = {
  saveCliente(cliente) {
    jsonAPIClientes
      .post("clientes", cliente)
      .then((retorno) => {
        console.log(retorno);
      })
      .catch((erro) => {
        console.log(erro);
      });
  },
  updateCliente(cliente) {
    jsonAPIClientes
      .put(`clientes/${cliente.id}`, cliente)
      .then((retorno) => {
        console.log(retorno);
      })
      .catch((erro) => {
        console.log(erro);
      });
  },

  cadastro(){
    this.$router.push('/novoCliente');
  },
  login(email, password, callback) {
    firebaseServices.loginComEmailSenha(email, password, (user) => {
        //fetch user database using uid
        jsonAPIClientes.get(`clientes/${user.uid}`)
        .then((retorno) => {
          let cliente = retorno.data
          sessionStorage.setItem("cliente_nome", cliente.nome);

          services.mensagem("Usuário logado com sucesso " + user.uid);

          setTimeout(function(){
            location.href = "/";
          }, 1000);
          
        })
        .catch((erro) => {
          console.log(erro);
          services.mensagem("Houve um erro");
        });

        if (callback) {
          callback(user);
        }
    });
  },
};

export default clientesServices;
