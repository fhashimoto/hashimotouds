<template>
  <div class="f-barra">
    <div class="f-barra__progress" :style="{width: ($store.state.step / 3)*100 + '%'}"></div>
    {{$store.state.step}} / 3
  </div>
</template>

<script>
export default {
}
</script>

<style>
.f-barra {
  max-width: 320px;
  width: 100%;
  margin: 25px auto 0;
  text-align: center;
  border-radius: 5px;
  background: rgba(128, 128, 128, 0.25);
  position: relative;
  padding: 5px 0;
  font-weight: 600;
}
.f-barra__progress{
  background: rgba(64, 62, 158, 0.5);
  width: 0%;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 5px 0 0 5px;
  transition: width 500ms ease-in-out;
}
</style>