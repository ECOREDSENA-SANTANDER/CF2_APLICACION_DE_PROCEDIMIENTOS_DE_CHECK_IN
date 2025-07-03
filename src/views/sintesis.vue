<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La guía práctica del procedimiento de check-in nos proporciona conocimientos importantes y prácticos, como el protocolo de presentación personal e imagen dentro de la recepción, el servicio al cliente durante la ejecución del turno, el procedimiento para el manejo de la bitácora, el paso a paso en el proceso de check-in, la información adecuada para el registro de los datos del huésped en el sistema de información de alojamiento turístico y en la tarjeta de registro de alojamiento, así como el conocimiento de la normativa de protección de datos y de la ESCCNNA. Además, ofrece información sobre el procedimiento en el sistema de control de llaves.
    

    .row.justify-content-center
      .col-lg-12
        figure
          img(src="@/assets/curso/sintesis.png", alt="Texto alternativo: La guía práctica del check-in aborda el protocolo de atención y presentación, el manejo de la bitácora, el registro correcto de huéspedes y el control de llaves, cumpliendo con la normativa de protección de datos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
