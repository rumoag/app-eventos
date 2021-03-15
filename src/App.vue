<template>
  <div id="app">
    <div id="nav">
      <header>
        <router-link class="logo" to="/">Home</router-link>
        <router-link class="button" to="/about/">About</router-link>
        <router-link class="button" to="/inscribirte/">Inscribirte</router-link>
      </header>
    </div>
    <router-view/>
    <footer>
      <p>Evento apps sin derechos reservados. (No copiar)</p>
    </footer>
  </div>
</template>

<script>
const URL_API= "https://api.airtable.com/v0/appLFavNvNZedqqAa/Comunicadores?view=Grid%20view"
export default {
  name: 'App',
  data: function (){
    return{

    }
  },
  mounted: function () {
    this.obtenerOradores();
  },
  methods: {
    obtenerOradores: function (){
      fetch(URL_API, {
        headers: {
          Authorization: 'Bearer keypFgW9ql6PGevJQ'
        }
      })
          .then((response) => response.json())
          .then((json) => this.$store.state.oradores = json.records);
    }
  }
}
</script>

<style>
footer p{
  text-align: center;
}
</style>