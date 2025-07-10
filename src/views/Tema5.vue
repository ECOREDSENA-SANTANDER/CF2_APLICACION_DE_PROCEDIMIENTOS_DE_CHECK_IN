<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tema 5

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right").mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 El sistema de información de alojamiento turístico es una herramienta tecnológica diseñada para registrar y gestionar la información de los huéspedes en los establecimientos de alojamiento.
        br
        br
        p El Ministerio de Comercio, Industria y Turismo (MINCIT) pone a disposición de los prestadores de servicios turísticos una plataforma denominada (SIAT) Sistema de Información de Alojamiento Turístico, que permite a los establecimientos registrar de forma organizada y segura a los huéspedes que se alojan en sus instalaciones.
          br
          br
        p Para poder instalar y utilizar esta herramienta, el establecimiento debe contar con el Registro Nacional de Turismo (RNT) activo.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade")
      .col-lg-9.col-md-12.col-12
        .row
          p.mb-5 El SIAT tiene como principales objetivos:
          .col-lg-5.col-md-6.col-12.p-0
            img(src='@/assets/curso/t5/img2.png', alt='')
          .col-lg-7.col-md-12.col-sm-12
            .row.bggrismateclaro
              ul.lista-ul--color.fa-al.px-5.py-4.mt-4
                li 
                  i.fas.fa-star
                  span.mb-0 Simplificar el proceso de registro de los huéspedes.
                li 
                  i.fas.fa-star
                  span.mb-0 Mejorar la atención al turista.
                li 
                  i.fas.fa-star
                  span.mb-0 Facilitar el relacionamiento con los turistas.
                li 
                  i.fas.fa-star
                  span.mb-0 Consolidar estadísticas del sector turístico.
                li 
                  i.fas.fa-star
                  span.mb-0 Proporcionar datos a la autoridad estadística nacional (DANE).
          p.mt-3.mb-0 Los establecimientos que cuenten con el Registro Nacional de Turismo (RNT) activo pueden hacer uso del sistema, de acuerdo con el grupo al que pertenezcan según sus condiciones y capacidades tecnológicas:         
      .col-lg-3.col-md-5.col-12
        img(src='@/assets/curso/t5/img3.png', alt='').mb-0

    .row(data-aos="fade-left")
      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.uno.p-4
          .row.justify-content-end.mb-4
            .col-auto
              img(src='@/assets/curso/t5/estrella2.png', alt='Texto que describa la imagen')
          .row.justify-content-center.mb-4
            .col-auto
              img.principal(src='@/assets/curso/t5/tar1blanco.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-auto
              h3.text-center.bgblanco.px-3 Alojamientos con PMS
          p.px-3.mb-4.mt-3.text-center Los #[em Property Management Systems] (PMS) son softwares especializados en gestión hotelera, que permiten administrar reservas, cancelaciones, registros de huéspedes y el control de habitaciones disponibles u ocupadas. Si el establecimiento cuenta con un PMS, hará parte de este grupo.

      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.dos.p-4
          .row.justify-content-end.mb-4
            .col-auto
              img(src='@/assets/curso/t5/estrella2.png', alt='Texto que describa la imagen')
          .row.justify-content-center.mb-4
            .col-auto
              img.principal(src='@/assets/curso/t5/tar2blanco.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-auto
              h3.text-center.bgblanco.px-3 Alojamientos con conexión a internet
          p.px-3.mb-4.mt-3.text-center Si el alojamiento dispone de conexión a internet permanente, pero no cuenta con un PMS, deberá utilizar directamente la plataforma SIAT en línea.
          br
          br

      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.tres.p-4
          .row.justify-content-end.mb-4
            .col-auto
              img(src='@/assets/curso/t5/estrella2.png', alt='Texto que describa la imagen')
          .row.justify-content-center.mb-4
            .col-auto
              img.principal(src='@/assets/curso/t5/tar3blanco.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center
            .col-auto
              h3.text-center.bgblanco.px-3 Alojamientos sin conexión a internet
          p.px-3.mb-4.mt-3.text-center En caso de no contar con acceso a internet, el establecimiento puede descargar e instalar la versión del SIAT diseñada para funcionar sin conexión.
          br
          br

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12
        .tarjeta.color-primario.p-3(data-aos="fade")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t3/sitio.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 SIAT Sistema de Información de Alojamiento Turístico
                  p.mb-0 Se invita a revisar el documento con el paso a paso para instalar el sistema SIAT del Ministerio de Comercio, Industria y Turismo (MINCIT), dirigido a establecimientos de alojamiento con RNT activo.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://tramincit.gov.co/tarjeta/media/docs/1-MANUAL-SIAT-21Abril2022.pdf" target="_blank")
                    span Enlace web
                    i.fas.fa-check-circle

    Separador  
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1  Técnicas de recolección de datos

    p.mb-2 En el proceso de check-in en establecimientos de alojamiento, la recolección de datos es fundamental para el registro de los huéspedes, así como para fines legales, operativos y la mejora de la experiencia del cliente.
    p.mb-4 Algunas técnicas utilizadas para la recolección de datos son las siguientes:

    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-5.col-12
        img(src='@/assets/curso/t5/img4.png', alt='')
      .col-lg-9.col-md-12.col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Registro presencial y manual")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
                p.mb-0 El huésped llega a la recepción y proporciona sus datos de forma directa al personal. Esta técnica tiene como ventaja el contacto directo con el huésped, lo que facilita la personalización de la experiencia. Como desventaja, puede requerir tiempo y generar filas debido a la transcripción manual de los datos.
          .row.col-xl-11.m-auto(titulo="Pre <i>check-in online</i>")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
                p.mb-0 Permite que los huéspedes diligencien sus datos de registro antes de su llegada al hotel, a través de una plataforma web o aplicación móvil. Su ventaja principal es la conveniencia para el huésped, ya que reduce filas. Como desventaja, el cliente necesita tener acceso a internet y realizar el proceso con anticipación.
          .row.col-xl-11.m-auto(titulo="Registro a través de un agente del departamento de reservas")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
                p.mb-0 El huésped informa los datos solicitados y asegura su reserva con anticipación. La desventaja es que debe presentar su documento de identificación al momento de llegar al establecimiento para hacer efectiva su reserva.

    Separador  
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2  Ley 1581 de 2012 - Ley de protección de datos personales

    p.mb-5 Esta ley establece principios que aplican a los establecimientos de alojamiento, así como a otras entidades públicas y privadas.

    .row.bgcolorprimario.align-items-center.p-4.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .tarjeta.tarjeta--blanca.p-4.py-3(data-aos="fade-down")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-lg-7.col-md-12.col-12                  
                  h3.mt-4.mb-4 Principios de la Ley 1581 de 2012
                  ul.lista-ul--color.fa-al
                    li 
                      i.fas.fa-star
                      span.mb-0 Los datos personales deben ser veraces, completos, exactos, actualizados, comprobables y comprensibles.
                    li 
                      i.fas.fa-star
                      span.mb-0 El tratamiento de datos personales debe ser legal, tener una finalidad legítima e informar al titular.
                    li 
                      i.fas.fa-star
                      span.mb-0 El tratamiento de datos personales solo puede hacerse con el consentimiento previo, expreso e informado del titular.
                    li 
                      i.fas.fa-star
                      span.mb-0 El titular tiene derecho a conocer, actualizar y rectificar los datos personales que se hayan recogido sobre él.
                .col-lg-4.col-md-6.col-12                  
                  img(src="@/assets/curso/t5/sly1-1.png")
              .row.justify-content-center.align-items-center
                .col-lg-7.col-md-12.col-12                  
                  h3.mt-4.mb-4 Obligaciones de los establecimientos de alojamiento
                  ul.lista-ul--color.fa-al
                    li 
                      i.fas.fa-star
                      span.mb-0 Adoptar procedimientos que permitan a los titulares conocer la información que será recolectada sobre ellos.
                    li 
                      i.fas.fa-star
                      span.mb-0 No utilizar medios engañosos o fraudulentos para recolectar y tratar datos personales.
                .col-lg-4.col-md-6.col-12                  
                  img(src="@/assets/curso/t5/sly1-2.png")
              .row.justify-content-center.align-items-center
                .col-lg-7.col-md-12.col-12                  
                  h3.mt-4.mb-4 Obligaciones de los establecimientos de alojamiento
                  ul.lista-ul--color.fa-al
                    li 
                      i.fas.fa-star
                      span.mb-0 Las multas podrán ser sucesivas mientras subsista el incumplimiento que las originó.
                    li 
                      i.fas.fa-star
                      span.mb-0 Se pueden suspender las actividades relacionadas con el tratamiento de datos personales hasta por un término de seis (6) meses.
                .col-lg-4.col-md-6.col-12                  
                  img(src="@/assets/curso/t5/sly1-3.png")

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12
        .tarjeta.color-primario.p-3(data-aos="fade")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t3/sitio.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Política de tratamiento y protección de datos personales
                  p.mb-0 Para ampliar la información, le invitamos a descargar y consultar el documento Ley 1581 de 2012: Política de Tratamiento y Protección de Datos Personales, disponible en el siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.minambiente.gov.co/wp-content/uploads/2024/09/DS-E-GET-01_V5-1R.pdf" target="_blank")
                    span Enlace web
                    i.fas.fa-check-circle


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
