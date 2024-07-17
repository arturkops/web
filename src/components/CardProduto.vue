<template>
  <q-card class="cardProduto">
    <q-card-section>
      <q-card-title class="card-title">
        {{ produto.nome }}
      </q-card-title>
    </q-card-section>
    <q-card-section>
      <q-card-subtitle class="card-price">
        R${{ produto.preco.toFixed(2) }}
      </q-card-subtitle>
    </q-card-section>
    <q-card-section v-if="comImagem" class="img_container">
      <q-img class="img"
        :src="produto.imagem"
        :alt="produto.nome"
      />
    </q-card-section>
    <q-card-action>
      <q-btn class="action"
        label="Adicionar ao Cart"
        color="primary"
        @click="comprar"
        v-if="botoes.includes('comprar')"
      />
      <q-btn class="action"
        label="Detalhes"
        color="primary"
        @click="detalhes"
        v-if="botoes.includes('detalhes')"
      />
    </q-card-action>
  </q-card>
</template>

<script>
export default {
  name: "CardProduto",
  props: {
    produto: {
      type: Object,
      required: true,
    },
    comImagem: {
      type: Boolean,
      required: false,
      default: false,
    },
    botoes: {
      type: Array,
      required: false,
      default: () => ["comprar", "detalhes"],
    },
  },
  methods: {
    comprar() {
      this.$emit("comprar", this.produto);
    },
    detalhes() {
      this.$emit("detalhes", this.produto);
    },
  },
};
</script>

<style>
.cardProduto {
  width: 250px;
  min-width: 250px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cardProduto:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.img_container {
  height: 200px; 
  overflow: hidden; 
  border-radius: 10px;
  margin-bottom: 10px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.card-price {
  color: #f56c6c;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.action {
  margin: 5px;
  width: 100%;
  max-width: 200px;
}

.q-btn {
  border-radius: 5px;
}
</style>
