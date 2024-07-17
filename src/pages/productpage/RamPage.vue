<template>
    <q-page class="inline">
      <ListaProdutos
        :produtos="arrProdutos"
        @comprar="onComprar"
        @detalhes="onDetalhes"
        @retirar="onRetirar"
        :botoes="['detalhes', 'comprar']"
      />
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import services from "src/services";
  import cartStore from "src/stores/cartStore";
  import ListaProdutos from "src/components/ListaProdutos.vue";
  
  
  export default defineComponent({
    name: "IndexPage",
    components: {
      ListaProdutos,
    },
    data() {
      return {
        arrProdutos: [],
        cliente: null,
        email: "",
        senha: "",
      };
    },
  
    created() {
      services.produtos.getRams((prods) => {
        this.arrProdutos = prods;
      });
      cartStore.cliente = {
        id: "",
        nome: "",
        cpf: "",
        email:""
      };
      this.cliente = cartStore.cliente;
      if (!localStorage.getItem('reloaded')) {
        localStorage.setItem('reloaded', 'true');
        location.reload();
      } else {
        localStorage.removeItem('reloaded');
      }
    },
    methods: {
      onComprar(produto) {
        cartStore.addProduto(produto, 1);
      },
    },
  });
  </script>