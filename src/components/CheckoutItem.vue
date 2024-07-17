<template>
    <div class="list">

      <div class="label">
        {{ item.produto.nome }}
        <q-img class="img_fit"
          :src="item.produto.imagem"
        /> 
      </div>

      <div class="buttons">
        <div class="price">
          R${{ (item.produto.preco * quantidade).toFixed(2) }}
        </div>
        <div class="quantity-controls">
          <q-btn label="-" @click="quantidade--" size ="sm" color="primary" />
          {{ quantidade }}
          <q-btn label="+" @click="quantidade++" size ="sm" color="primary" />
        </div>
        <q-btn label="Remover Item" icon ="delete" @click="remove" size="sm" color="red"/> 
      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: "CheckoutItem",
    emits: ["remover"],
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    watch: {
      quantidade(atual, anterior) {
        if (atual < 1) {
          if (confirm("Deseja remover o item?")) {
            this.remove();
          } else {
            this.quantidade = anterior;
          }
        }
      },
    },
    data() {
      return {
        quantidade: this.item.qtd,
      };
    },
    methods: {
      remove() {
        this.$emit("remover", this.item.produto.id);
      },
    },
  };
  </script>
  <style>
  .list {
    width: 15%;
    box-shadow: 0 0 px rgba(8, 0, 0, 0.459);
    background-color: hsla(221, 100%, 62%, 0.199);
    padding: 8px;
    margin-right: 10px;
    box-sizing: border-box; 
    border-radius: 5px; 
    display: inline-flex;
    flex-direction: column;
    align-items:flex-start; 
  }
  
  .label {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 0px;
    font-size: 15px;
    font-weight: bold;
    width: 100%; 
    box-sizing: border-box;
  }
  
  .img_fit {
    height: 150px; 
    width: 150px; 
    border-radius: 5px; 
    object-fit: contain;
    margin-bottom: 10px;
    margin-top: 5px;
  }
  
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 0px;
    border-radius: 5px;
    width: 100%; 
    box-sizing: border-box; 
    margin-bottom: 5px;
  }
  
  .price {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 3px;
  }
  
  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 5px;
  }
  
  </style>
  
  