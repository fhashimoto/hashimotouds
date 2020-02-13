<template>
  <div class="f-selecao__container">
    <h2>Sabores*</h2>
    <div class="f-selecao__display" v-for="(sabores, index) in dataSabor" :key="index">
      <label :for="sabores.id">
        <input type="radio" v-bind:id="sabores.id" :value="sabores" v-model="$store.state.selectSabor">
        {{sabores.nome}}<br/>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataSabor']
}
</script>

<style>
  .f-selecao__display{
    padding: 5px 0;
  }
</style>