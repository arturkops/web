<template>
  <q-card class="q-ma-lg q-pa-md">
    <h5>Login</h5>
    <q-input v-model="email" label="email" />
    <q-input v-model="senha" type="password" label="senha" />
    <q-btn label="Entrar" color="primary" @click="entrar" />
  </q-card>
</template>
<script>
import services from "src/services";
import cartStore from "src/stores/cartStore";
import firebaseServices from "src/services/firebase";
import clientesServices from "src/services/clientesServices";

export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      arrProdutos: [],
      cliente: null,
      email: "",
      senha: "",
    };
  },

  methods: {
    entrar() {
      clientesServices.login(this.email, this.senha, null);
    },
  },
};
</script>
