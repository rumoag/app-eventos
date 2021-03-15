<template>
  <div class="charla">
      <h1>Charla</h1>
      <img :src="ficha.fields.Avatar[0].url" class="section media"/>
      <div class="section">
        <h3>{{ ficha.fields.Tema }} </h3>
        <h4>{{ ficha.fields.Nombre }}</h4>

      </div>
    <section class="contenido">
      {{ ficha.fields.Descripcion }}
    </section>
    <p>
      <router-link class="button" to="/"> Ver todas</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Charla',
  components: {
  },
  computed: {
    ficha: function (){
      return this.$store.state.oradores.filter((orador) => {
        return orador.id === this.$route.params.oradorId
      })[0]
    }
  }
}
</script>
