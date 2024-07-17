<template>
  <div class="checkout" label="Checkout">
    <h4>Checkout</h4>
    <hr>
    <h6>Lista de compras</h6>
    <div class="product_list">
      <CheckoutItem
        v-for="item in carrinho"
        :key="item.id"
        :item="item"
        @remover="onRemover"
      />
    </div>
    <h5>Total: R$ {{ total.toFixed(2) }}</h5>
    <hr>
    <h4>Pagamento</h4>
    Escolha o método de pagamento:
    <div class="payment-options">
      <button @click="selectPaymentMethod('pix')" :class="{'selected': selectedPaymentMethod === 'pix'}">Pix</button>
      <button @click="selectPaymentMethod('card')" :class="{'selected': selectedPaymentMethod === 'card'}">Cartão</button>
    </div>
    <div class="payment-details">
      <div v-if="selectedPaymentMethod === 'pix'">
        <p>Escaneie o QR Code:</p>
        <img src="/src/assets/qr.jpg" alt="Pix QR Code" class="payment-image"/>
      </div>
      <div v-if="selectedPaymentMethod === 'card'">
        Informações do Cartão
        <form @submit.prevent="processPayment">
          <input v-model="cardNumber" type="text" placeholder="Número do Cartão" required />
          <input v-model="cardHolderName" type="text" placeholder="Nome no Cartão" required />
          <input v-model="expirationDate" type="text" placeholder="Data de Validade (MM/AA)" required />
          <input v-model="cvv" type="text" placeholder="CVV" required />
          <button type="submit">Finalizar Compra</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from "src/stores/cartStore";
import CheckoutItem from "src/components/CheckoutItem.vue";

export default {
  name: "CheckoutPage",
  components: {
    CheckoutItem,
  },
  data() {
    return {
      carrinho: [],
      selectedPaymentMethod: null,
      cardNumber: '',
      cardHolderName: '',
      expirationDate: '',
      cvv: '',
    };
  },
  created() {
    this.carrinho = cartStore.carrinho;
  },
  computed: {
    total() {
      return this.carrinho.reduce((acc, item) => {
        return acc + item.produto.preco * item.qtd;
      }, 0);
    },
  },
  methods: {
    onRemover(id) {
      console.log(id);
      cartStore.removeProduto(id);
    },
    selectPaymentMethod(method) {
      this.selectedPaymentMethod = method;
    },
    processPayment() {
      if (this.selectedPaymentMethod === 'pix') {
        // Handle Pix payment logic
        alert('Pagamento via Pix');
      } else if (this.selectedPaymentMethod === 'card') {
        // Handle Card payment logic
        alert('Pagamento com Cartão');
      } else {
        alert('Selecione um método de pagamento');
      }
    },
  },
};
</script>

<style>
.checkout {
  margin: 5px;
  background-color: lightgray;
  border-radius: 10px;
  padding: 5px;
}

h4, h5,h6 {
  margin: 15px;
  margin-top: 10px;
}


.product_list {
  margin-bottom: 15px;
}

.payment-options {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.payment-options button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
}

.payment-options .selected {
  background-color: #007BFF;
  color: #fff;
}

.payment-details {
  margin-top: 20px;
}

.payment-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

form input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

form button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
}
</style>
