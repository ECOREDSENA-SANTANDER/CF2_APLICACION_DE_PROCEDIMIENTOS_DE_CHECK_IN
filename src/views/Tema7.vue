<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Sistema de control de llaves

    p.mb-5 Un sistema de control de llaves en hoteles hace referencia a las políticas y procedimientos que indican cómo se emiten, rastrean y almacenan las llaves dentro de la propiedad.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t7/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 El método más común de control de llaves consiste en el uso de cerraduras en las puertas con registro electrónico, que registra la entrada y salida de una habitación. De esta forma, los hoteles pueden supervisar la ocupación de la habitación en todo momento, garantizando que nadie exceda la estancia reservada.
        br
        br
        p Además, en lugar de llaves tradicionales, algunos hoteles utilizan tarjetas electrónicas con chip RFID. Estos chips son leídos por un sensor en el marco de la puerta y, al acercarse a la habitación, la puerta se desbloquea automáticamente si el sistema de gestión ha autorizado el acceso, agilizando el proceso de registro en comparación con esperar a que un miembro del personal abra la puerta con una llave tradicional.
          br
          br

    Separador  
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 7.1  Procedimiento

    p.mb-5 El procedimiento general para el control de llaves en la recepción de un establecimiento de alojamiento incluye los siguientes pasos:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-9.col-md-12.col-sm-12
        .row.bggrismateclaro
          ul.lista-ul--color.fa-al.px-5.py-3.mt-4
            li 
              i.fas.fa-star
              span.mb-0 Al momento del registro (#[em check-in]), el recepcionista asigna una habitación al huésped.
            li 
              i.fas.fa-star
              span.mb-0 Se entrega la llave de la habitación al huésped, verificando su identidad mediante la presentación de un documento de identificación.
            li 
              i.fas.fa-star
              span.mb-0 Se informa al huésped sobre las políticas del hotel respecto a las llaves (por ejemplo, no dejarlas en la puerta, devolverlas al hacer #[em check-out]).
            li 
              i.fas.fa-star
              span.mb-0 En algunos sistemas, se registra la entrega de la llave al huésped en un sistema informático o en un libro de registro.
            li 
              i.fas.fa-star
              span.mb-0 Las llaves de repuesto y las llaves maestras (que abren todas o varias habitaciones) deben mantenerse en un lugar seguro y de acceso restringido, generalmente bajo custodia directa del personal de recepción o de gerencia.
            li 
              i.fas.fa-star
              span.mb-0 Se lleva un registro estricto de quién tiene acceso a estas llaves maestras y cuándo se utilizan.
            li 
              i.fas.fa-star
              span.mb-0 Si un huésped solicita una llave adicional, se debe verificar la identidad de la persona que la solicita y registrar la entrega.
            li 
              i.fas.fa-star
              span.mb-0 En caso de pérdida de la llave por parte del huésped, se debe seguir un protocolo específico (por ejemplo, desactivar la llave perdida, entregar una nueva llave y, en algunos casos, cobrar una tarifa por la pérdida).
      .col-lg-3.col-md-5.col-12
        img(src="@/assets/curso/t7/img2.png")





</template>

<script>
export default {
  name: 'Tema5',
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
