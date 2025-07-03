<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Protocolo de presentación personal

      p El protocolo interno relacionado con el uso del uniforme y la presentación personal en el área de recepción de un establecimiento de alojamiento suele ser más riguroso y detallado que en otras áreas. Esto se debe a que el personal de recepción representa el primer y último punto de contacto directo con los huéspedes, proyectando la imagen, el profesionalismo y los estándares del hotel desde el momento de su llegada hasta su partida.

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
