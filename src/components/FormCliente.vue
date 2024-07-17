<template>
  <q-form ref="form">
    <q-input
      v-model="clienteModel.nome"
      label="Nome"
      hint="informe o seu nome"
      clearable
      :rules="[
        (val) => val.length > 0 || 'Campo obrigatório',
        (val) => val.indexOf(' ') > 0 || 'é obrigatório informar o sobrenome',
      ]"
    />
    <q-input
      v-model="clienteModel.cpf"
      label="CPF"
      hint="informe o seu CPF"
      clearable
      mask="###.###.###-##"
      lazy-rules
      :rules="[(val) => validaCPF(val) || 'CPF inválido']"
    />

    <q-input
      v-model="clienteModel.email"
      label="email"
      hint="informe o seu email"
      clearable
      lazy-rules
    />

    <q-input
      v-model="clienteModel.password"
      label="Senha"
      hint="informe sua senha"
      clearable
      lazy-rules
    />

    <q-btn label="Salvar" color="primary" @click="salvar" />
  </q-form>
</template>
<script>
import services from "src/services";
import firebaseServices from "src/services/firebase";
import clientesServices from "src/services/clientesServices";

export default {
  name: "FormCliente",
  emits: ["salvarCliente"],
  props: {
    cliente: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      clienteModel: {
        nome: "",
        cpf: "",
        email: "",
        password: "",
      },
    };
  },
  created() {
    if (this.cliente) {
      this.clienteModel.id = this.cliente.id;
      this.clienteModel.nome = this.cliente.nome;
      this.clienteModel.cpf = this.cliente.cpf;
      this.clienteModel.email = this.cliente.email;
      this.clienteModel.password = this.cliente.password;
    }
  },
  methods: {
    validaCPF(cpf) {
      return services.validaCPF(cpf);
    },
    salvar() {
      this.$refs.form.validate().then((valido) => {
        if (valido) {
          const newClient = this.clienteModel;

          firebaseServices.criarUsuarioComEmailSenha(
            newClient.email,
            newClient.password,
            (user) => {
              services.mensagem("Usuário criado com sucesso " + user.uid);
              firebaseServices.salvarUsuario(user.uid, newClient.email);

              // Sending data to local database
              clientesServices.saveCliente({
                id: user.uid,
                nome: newClient.nome,
                cpf: newClient.cpf,
                email: newClient.email,
              });
            }
          );
        } else {
          services.mensagemErro("Verifique os campos obrigatórios");
        }
      });
    },
  },
};
</script>
