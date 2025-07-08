<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 #[em Check-in] - registro y acomodación

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right").mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-4 Proceso por medio del cual se registra el ingreso de uno o varios huéspedes al flujo de información de un establecimiento de alojamiento y hospedaje. En él intervienen, por parte del establecimiento, un recepcionista y uno o varios huéspedes; se asigna la habitación y se concreta la forma de pago.
        br
        br
        p Sin importar que los sistemas de información utilizados por el establecimiento para este efecto sean o no sistematizados, este proceso siempre se llevará a cabo bajo procedimientos similares, que cambiarán únicamente en su forma. El objetivo será siempre mantener la información actualizada de los huéspedes alojados, incluso si se presentan cambios de habitación o de tarifas, ingresos o salidas de huéspedes registrados como acompañantes, o el manejo especial de esta información a petición de quien ocupa la habitación.
          br
          br

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-md-12.col-sm-12
        p.mb-4 El horario de #[em check-in] es determinado por cada establecimiento de manera individual, basándose en sus políticas operativas y en la necesidad de tiempo para la limpieza y preparación de las habitaciones después de la salida del huésped. En la mayoría de los hoteles en Colombia, así como en otros tipos de alojamiento turístico, el horario establecido para el #[em check-in] es a partir de las 3:00 p.m.  Esto no constituye una obligación legal, sino una práctica común en la industria, y puede variar entre diferentes tipos de hoteles o incluso dentro de la misma cadena hotelera.
        .row.bggrismate.borde-redondo
          p.p-5.mb-0 Algunos hoteles pueden ofrecer la posibilidad de realizar un #[em “early check-in”] (ingreso anticipado), si la habitación está disponible antes de la hora establecida. No obstante, este ingreso anticipado puede estar sujeto a un costo adicional.
      .col-lg-4.col-md-6.col-sm-12
        img.mt-2(src='@/assets/curso/t4/img2.png', alt='')


</template>

<script>
export default {
  name: 'Tema4',
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
