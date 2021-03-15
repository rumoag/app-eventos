<template>
  <router-link :to="{name: 'Charla', params: {oradorId: id}}" class="card col-sm-4" >
    <img :src="avatar" class="section media"/>
    <div class="section">
      <h3>{{ tema }} </h3>
      <p>{{ nombre }}</p>
    </div>
    <div class="section dark">
      <h4 style="text-transform: capitalize">{{ formatearFecha1(fecha) }}</h4>
    </div>

  </router-link>
</template>

<script>
import { formatRelative, subDays } from 'date-fns'
import { es } from 'date-fns/locale'

export default {
  name: 'Orador',
  props: {
    id: String,
  },
  computed: {
    obtenerOrador: function (){
      return this.$store.state.oradores.filter( (orador)=>{
        return orador.id === this.id
      })[0].fields
    },
    nombre: function () {
      return this.obtenerOrador.Nombre
    },
    avatar: function (){
      return this.obtenerOrador.Avatar[0].url}
    ,
    tema: function (){
      return this.obtenerOrador.Tema}
    ,
    fecha: function () {
      return this.obtenerOrador.Fecha}
    ,
  },
  methods: {
    formatearFecha1: function (fecha) {
      return formatRelative(subDays(new Date(fecha), 3), new Date(), {locale: es})
    },
  }
}
</script>