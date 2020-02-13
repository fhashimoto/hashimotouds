<template>
  <div class="f-selecao__container">
    <h2>Tamanhos*</h2>
    <div class="f-selecao__display" v-for="(tamanhos, index) in dataTamanho" :key="index">
      <label :for="tamanhos.id">
        <input type="radio" v-bind:id="tamanhos.id" :value="tamanhos" v-model="$store.state.selectTamanho">
        {{tamanhos.nome}}<br/>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataTamanho']
}
</script>

<style>

</style>