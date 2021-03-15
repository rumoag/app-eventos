<template>
  <div class="home">
      <h1>Inicio</h1>
      <h2>Charlas</h2>
    <div class="charlas">
      <div class="row">
          <Orador v-for="orador in $store.state.oradores" :key="orador.id" :id="orador.id"></Orador>
      </div>
    </div>
  </div>
</template>

<script>
import Orador from "@/components/Orador"
export default {
  name: 'Home',
  components: {
    Orador
  }
}
</script>
