<template>
  <div class="f-selecao__container">
    <h2>Personalização</h2>
    <div class="f-selecao__display" v-for="(persona, index) in dataPersona" :key="index">
      <label :for="persona.id">
        <input type="checkbox" v-bind:id="persona.id" :value="persona" v-model="$store.state.selectPersona" @change="updatePersona">
        {{persona.nome}}<br/>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataPersona'],
  data() {
    return {
      personaValorTotal: 0,
      personaTempoTotal: 0
    }
  },
  methods: {
    updatePersona() {
      this.personaValorTotal = 0;
      this.personaTempoTotal = 0;
      this.$store.state.selectPersona.forEach(element => {
        this.personaValorTotal += element.valor;
        this.personaTempoTotal += element.tempo;                
      });
      this.$store.state.personaValorTotal = this.personaValorTotal;
      this.$store.state.personaTempoTotal = this.personaTempoTotal;
    }
  }
}
</script>

<style>

</style>