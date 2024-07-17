import axios from "axios";
import { Notify } from "quasar";
import cartStore from "src/stores/cartStore";

const jsonAPI = axios.create({
  baseURL: process.env.URL,
});
const produtosServices = {
  getProdutos: (callback) => {
    if (cartStore.produtos.length > 0) {
      console.log("Produtos já carregados");
      callback(cartStore.produtos);
      return;
    }
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        console.log("Produtos carregados da API");

        cartStore.produtos = retorno.data;
        callback(retorno.data);
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
      });
  },

  //Filtrar por Mouse
  getMouses: (callback) => {
    if (cartStore.produtos.length > 0) {
      console.log("Produtos já carregados");
      callback(cartStore.produtos);
      return;
    }
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        
        const mouseProducts = retorno.data.filter(produto => produto.categoria === "Mouse");
        cartStore.produtos = mouseProducts;
        callback(mouseProducts);
        console.log("Produtos carregados da API");
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
      });
  },

  getStorages: (callback) => {
    if (cartStore.produtos.length > 0) {
      console.log("Produtos já carregados");
      callback(cartStore.produtos);
      return;
    }
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        
        const storageProducts = retorno.data.filter(produto => produto.categoria === "Armazenamento");
        cartStore.produtos = storageProducts;
        callback(storageProducts);
        console.log("Produtos carregados da API");
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
      });
  },

  getKeyboards: (callback) => {
    if (cartStore.produtos.length > 0) {
      console.log("Produtos já carregados");
      callback(cartStore.produtos);
      return;
    }
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        
        const keyboardProducts = retorno.data.filter(produto => produto.categoria === "Teclado");
        cartStore.produtos = keyboardProducts;
        callback(keyboardProducts);
        console.log("Produtos carregados da API");
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
      });
  },

  getHeadesets: (callback) => {
    if (cartStore.produtos.length > 0) {
      console.log("Produtos já carregados");
      callback(cartStore.produtos);
      return;
    }
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        
        const headesetProducts = retorno.data.filter(produto => produto.categoria === "Headeset");
        cartStore.produtos = headesetProducts;
        callback(headesetProducts);
        console.log("Produtos carregados da API");
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
      });
  },

  getBoards: (callback) => {
    if (cartStore.produtos.length > 0) {
      console.log("Produtos já carregados");
      callback(cartStore.produtos);
      return;
    }
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        
        const boardProducts = retorno.data.filter(produto => produto.categoria === "Placa");
        cartStore.produtos = boardProducts;
        callback(boardProducts);
        console.log("Produtos carregados da API");
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
      });
  },

  getRams: (callback) => {
    if (cartStore.produtos.length > 0) {
      console.log("Produtos já carregados");
      callback(cartStore.produtos);
      return;
    }
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        
        const ramProducts = retorno.data.filter(produto => produto.categoria === "Ram");
        cartStore.produtos = ramProducts;
        callback(ramProducts);
        console.log("Produtos carregados da API");
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
      });
  },

  getPhones: (callback) => {
    if (cartStore.produtos.length > 0) {
      console.log("Produtos já carregados");
      callback(cartStore.produtos);
      return;
    }
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        
        const phoneProducts = retorno.data.filter(produto => produto.categoria === "Celular");
        cartStore.produtos = phoneProducts;
        callback(phoneProducts);
        console.log("Produtos carregados da API");
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
      });
  },

  getMonitors: (callback) => {
    if (cartStore.produtos.length > 0) {
      console.log("Produtos já carregados");
      callback(cartStore.produtos);
      return;
    }
    jsonAPI
      .get("produtos")
      .then((retorno) => {
        
        const monitorProducts = retorno.data.filter(produto => produto.categoria === "Monitor");
        cartStore.produtos = monitorProducts;
        callback(monitorProducts);
        console.log("Produtos carregados da API");
      })
      .catch((erro) => {
        Notify.create({
          message: erro.message,
          color: "negative",
          position: "bottom",
          timeout: 3000,
        });
      });
  },

  

};
export default produtosServices;
