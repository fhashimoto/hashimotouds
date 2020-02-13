<template>
  <div id="app">
    <h1>Açaí Eats</h1>
    <transition name="fade"  mode="out-in">
      <div class="f-container" v-if="$store.state.step < 4">      
        <div class="f-selecao">      
          <button class="f-arrow-back" v-if="$store.state.step" @click.prevent="$store.state.step--"></button>
          <div class="f-selecao__container">
            <transition name="fade"  mode="out-in">            
            <app-sabor :dataSabor="acai.sabor" v-if="$store.state.step == 0"></app-sabor>
            
            <app-tamanho :dataTamanho="acai.tamanho" v-else-if="$store.state.step == 1"></app-tamanho>
            
            <app-persona :dataPersona="acai.personalizacao" v-else-if="$store.state.step == 2"></app-persona>
            
            <app-resumo v-else-if="$store.state.step == 3"></app-resumo>
            </transition>            
          </div>
          <button class="f-arrow-fwd" v-if="$store.state.step<3" @click.prevent="$store.state.step++" :disabled="checkStep()"></button>
        </div>    
        <app-barra></app-barra>
        <app-info v-if="$store.state.step<2"></app-info>
      </div>
      <div class="f-container" v-else>
        <app-confirm></app-confirm>
      </div>
    </transition>
    <img class="acai_bg" src="./assets/acai_bg.png" alt="background image">
    <img class="acai_bg right" src="./assets/acai_bg.png" alt="background image">
  </div>
</template>

<script>

import Data from './database/Data.json';
import Sabor from './components/Sabor';
import Tamanho from './components/Tamanho';
import Persona from './components/Persona';
import Resumo from './components/Resumo';
import Barra from './components/Barra';
import Confirm from './components/Confirm';
import Info from './components/Info';

export default {
  name: 'App',
  data() {
    return {
      acai: Data.acai
    }
  },
  components: {
    appSabor: Sabor,
    appTamanho: Tamanho,
    appPersona: Persona,
    appResumo: Resumo,
    appBarra: Barra,
    appConfirm: Confirm,
    appInfo: Info
  },
  methods: {
    checkStep() {
      if (this.$store.state.step == 0 && this.$store.state.selectSabor) {
        return false
      } else if (this.$store.state.step == 1 && this.$store.state.selectTamanho) {
        return false
      } else if (this.$store.state.step == 2) {
        return false
      }
      return true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin: 60px auto 60px;
  display: flex;
  flex-direction: column; 
  position: relative; 
}
#app>h1{
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.acai_bg {
  position: absolute;
  z-index: -100;
  width: 45%;
  opacity: .5;
  max-width: 500px;
  transform: rotate(25deg);
  left: 0;
  top: 50%;
}
.acai_bg.right {
  position: absolute;
  z-index: -100;
  width: 45%;
  opacity: .5;
  max-width: 500px;
  top: 50%;
  right: 0;
  left: unset;
  transform: rotate(-25deg);
}
.f-selecao {
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}
.f-selecao__container {
  padding: 0 50px;
}
.f-arrow-back{
  background: url('./assets/next.svg');
  padding: 20px;
  border: none;
  cursor: pointer;  
  position: absolute;
  left: 0;
  top: calc(50% - 20px);
  transform: rotate(180deg);
}
.f-arrow-fwd{
  background: url('./assets/next.svg');
  padding: 20px;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: calc(50% - 20px);
}
.f-arrow-back:disabled {
  opacity: 0.05;
}
.f-arrow-fwd:disabled {
  opacity: 0.05;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
