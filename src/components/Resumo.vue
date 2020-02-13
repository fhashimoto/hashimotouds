<template>
  <div class="f-resumo">
    <h2>Resumo</h2>
    <div class="f-resumo__row">
      <span class="f-resumo__title">Sabor: </span>
      <span class="f-resumo__content"> {{$store.state.selectSabor.nome}} (R$ {{$store.state.selectSabor.valor}},00)</span>
      <a class="f-resumo__edit" @click="$store.state.step = 0">
        <img src="../assets/edit.svg" alt="Editar sabor">
      </a>
    </div>
    <div class="f-resumo__row">
      <span class="f-resumo__title">Tamanho: </span>
      <span class="f-resumo__content"> {{$store.state.selectTamanho.nome}} (R$ {{$store.state.selectTamanho.valor}},00)</span>
      <a class="f-resumo__edit" @click="$store.state.step = 1">
        <img src="../assets/edit.svg" alt="Editar sabor">
      </a>
    </div>
    <div class="f-resumo__row" v-if="$store.state.selectPersona.length">
      <span class="f-resumo__title">Personalização: </span>
      <span class="f-resumo__content">
        <span v-for="(persona, index) in $store.state.selectPersona" :key="index">
           {{persona.nome}} (R$ {{persona.valor}},00)<span v-if="index < ($store.state.selectPersona.length - 1)">, </span>
        </span>
      </span>
      <a class="f-resumo__edit" @click="$store.state.step = 2">
        <img src="../assets/edit.svg" alt="Editar sabor">
      </a>
    </div>
    <div class="f-resumo__row">
      <span class="f-resumo__title">Valor Total: </span>
      <span class="f-resumo__content">
        R$ {{valorTotal}},00
      </span>
    </div>
    <div class="f-resumo__row">
      <span class="f-resumo__title">Tempo Total: </span>
      <span class="f-resumo__content">
        {{tempoTotal}} min
      </span>
    </div>
    <div class="f-resumo__confirm">
      <button class="confirmBtn" @click="$store.state.step++">Confirmar Pedido!</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tempoTotal() {
      return this.$store.state.selectSabor.tempo + this.$store.state.selectTamanho.tempo + this.$store.state.personaTempoTotal;
    },
    valorTotal() {
      return this.$store.state.selectSabor.valor + this.$store.state.selectTamanho.valor + this.$store.state.personaValorTotal;
    }
  }
}
</script>

<style>
  .f-resumo__row{
    padding: 12px 50px 12px 0;
    display: flex;
    position: relative;
  }
  @media only screen and (max-width: 600px) {
    .f-resumo__row{
      flex-direction: column
    }
  }
  .f-resumo__edit {
    position: absolute;
    right: 0;
  }
  .f-resumo__content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .f-resumo__confirm{
    margin: 20px 0 0;
    text-align: center;
  }
  .f-resumo__edit{
    cursor: pointer;
  }
  .confirmBtn{
    padding: 10px 20px;
    border: none;
    background: #0043ff6e;
    border-radius: 5px;
    box-shadow: 0px 0px 4px 0px;
    font-weight: 600;
  }
</style>