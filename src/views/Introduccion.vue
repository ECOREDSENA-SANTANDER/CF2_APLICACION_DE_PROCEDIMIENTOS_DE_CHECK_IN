<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-lg-8.col-md-12.col-sm-12
        .row.bgamarillomate.borde-redondo.px-4.py-3
          p.mt-3.mb-3 El registro y la acomodación del huésped en un establecimiento de alojamiento son elementos clave para garantizar una experiencia positiva. En este proceso, el personal de recepción desempeña un papel fundamental, aplicando carisma, atención y técnicas de servicio para generar una excelente primera impresión. La calidad del trato, la eficiencia en los procedimientos, la amabilidad y la prontitud en la entrega de la habitación contribuyen a que el huésped se sienta como en casa, poniendo a su disposición todos los servicios del establecimiento y explicando, de forma sutil y respetuosa, las políticas internas.
      .col-lg-4.col-md-6.col-sm-12
        img.mt-2(src='@/assets/curso/portada/img1_intro.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right")
      .col-auto
        img(src='@/assets/curso/portada/img2_intro.png', alt='').d-none.d-lg-block
      .col.mb-0
        p El servicio de check-in refleja el profesionalismo del personal de recepción, quien debe llevar a cabo correctamente todos los pasos del registro, manteniendo en todo momento una actitud de escucha activa, calidez y agradecimiento por la preferencia del cliente. Esta atención, brindada con amabilidad, fomenta la fidelización y aumenta las posibilidades de que el huésped vuelva a elegirnos en el futuro.
        p Por ello, se presenta esta guía, que expone de manera estructurada los procedimientos adecuados para la realización del check-in.

    .row.justify-content-center.align-items-center(data-aos="fade")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
