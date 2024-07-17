<script>
const cliente_logado =
  sessionStorage.cliente_nome && sessionStorage.cliente_nome !== ""
    ? sessionStorage.cliente_nome
    : null;
import { defineComponent, ref } from "vue";
import cartStore from "src/stores/cartStore";
import FilterTab from "src/components/FilterTab.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    FilterTab,
  },

  methods: {
    gotoCadastro() {
      this.$router.push("/novoCliente");
    },
    gotoLogin() {
      this.$router.push("/novoLogin");
    },
    gotoLogout() {
      sessionStorage.setItem("cliente_nome", "");
      // this.$router.push("/");
      location.href = "/";
    },
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      cart: cartStore.carrinho,
      cliente_logado: cliente_logado,
    };
  },
});
</script>

<template>
  <q-layout view="hhh Lhr lff">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-icon
            name="devices_other"
            style="color: #ffffff; font-size: 1.4em"
          />
          StoreIT
        </q-toolbar-title>

        <div v-if="cliente_logado === null">
          <q-btn label="login" @click="gotoLogin" />
          <q-btn label="Cadastro" @click="gotoCadastro"></q-btn>
        </div>

        <div v-if="cliente_logado !== null">
          <span>{{ cliente_logado }}</span>
          <q-btn dense color="grey" round icon="person" class="q-ml-md"></q-btn>

          <q-btn
            dense
            color="grey"
            round
            icon="shopping_cart"
            to="/checkout"
            class="q-ml-md"
            ><q-badge color="red" floating>{{ cart.length }}</q-badge>
          </q-btn>

          <q-btn class="q-ml-md" label="Logout" @click="gotoLogout" />
        </div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/mouses" label="Mouses"/>
        <q-route-tab to="/keyboards" label="Teclados" />
        <q-route-tab to="/headsets" label="HEADSETS" />
        <q-route-tab to="/boards" label="Placas de vídeo" />
        <q-route-tab to="/ram" label="RAM" />
        <q-route-tab to="/storages" label="ARMAZENAMENTO" />
        <q-route-tab to="/phones" label="CELULARES" />
        <q-route-tab to="/monitors" label="MONITORES" />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      behavior="desktop"
    >
      <FilterTab />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
