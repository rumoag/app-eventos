<template>
  <div class="inscribirte">
    <h1>Inscribirte</h1>
    <form>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <label for="username">Nombre</label>
            <input style="text-transform: capitalize" v-model="username" type="text" id="Username" placeholder="Username"/>
          </div>
          <div class="col-sm-12 col-md-6">
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" placeholder="email@ejemplo.com"/>
          </div>
          <div>
            <button @click="crearUsuario"> Crear usuario</button>
          </div>
        </div>
    </form>
    <div v-if="modalActivo">
      <span class="toast">Bienvenido <span style="text-transform: capitalize">{{ nombre }}</span>, has vendido tu alma correctamente!!
      <button class="button" @click="modalActivo=false; nombre=''">Cerrar</button></span>

    </div>

  </div>
</template>

<script>
const URL_API_CREATED = "https://api.airtable.com/v0/appLFavNvNZedqqAa/Inscritos";

export default {
  name: 'Inscribirte',
  data(){
    return{
      username:'',
      email: '',
      modalActivo: false,
      nombre: '',
    }
  },
  components: {

  },
  methods: {
    crearUsuario: function (e) {
      e.preventDefault()
      fetch(URL_API_CREATED, {
        headers: {
          'Authorization': 'Bearer keypFgW9ql6PGevJQ',
          'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          "records": [
            {
              "fields": {
                "Nombre": this.username,
                "Email": this.email,
                "Fecha": new Date()
              }
            },
          ]
        })
      })
          .then(() => this.modalActivo = true)
          this.nombre = this.username
          this.username= ''
          this.email= ''



    }
  }
}
</script>
