<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Tarjeta de Registro de Alojamiento - TRA

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right").mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t6/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-4 La tarjeta de registro de alojamiento aplica para todos los prestadores de servicios de alojamiento turístico definidos en la Ley general de turismo y sus modificaciones, así como en el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, Decreto 1074 de 2015.
        br
        br
        p La Ley 2068 de 2020 modificó la antigua tarjeta de registro hotelero por la tarjeta de registro de alojamiento, y en su artículo 22 dispuso que “los prestadores de servicios de alojamiento turístico deberán llevar el registro de los huéspedes, a través del diligenciamiento de la tarjeta de registro de alojamiento en el sistema que, para todos los efectos, disponga el Gobierno Nacional”.
          br
          br

    .row.justify-content-center.align-items-center
      .col-lg-9.col-md-12.col-12
        p.mb-4 El Ministerio de Comercio, Industria y Turismo tiene la facultad para reglamentar los términos y condiciones de la información contenida en la tarjeta de registro de alojamiento, la cual será remitida al DANE con el fin de elaborar información estadística del sector turístico respecto a los alojamientos, la tasa de ocupación, la cantidad de visitantes, entre otras variables.
        p.mb-4 El artículo 3 de la Resolución 700 de 2021, “Por la cual se implementa la tarjeta de registro de alojamiento”, establece los tres grupos de prestadores de servicios de alojamiento turístico que se identifican, atendiendo a su capacidad técnica y operativa, así:
        .row.bggrismate.borde-redondo
          p.px-5.mt-4 #[b Grupos]
          ul.lista-ul--color.fa-al.px-5.mt-2.mb-2
            li 
              i.fas.fa-star
              span.mb-0 Prestadores de servicios de alojamiento turístico que cuenten con infraestructura tecnológica o en la nube, a través de un sistema de gestión desarrollado para alojamiento, denominado #[em Property Management System] (PMS), con conexión a internet y que hayan autorizado al administrador del PMS para la transmisión de datos al SIAT.
            li 
              i.fas.fa-star
              span.mb-0 Prestadores de servicios de alojamiento turístico que cuenten con conexión a internet, pero sin infraestructura tecnológica.
            li 
              i.fas.fa-star
              span.mb-4 Prestadores de servicios de alojamiento turístico que no cuenten con infraestructura tecnológica ni conexión a internet.
      .col-lg-3.col-md-5.col-12
        img(src='@/assets/curso/t6/img2.png', alt='')

    Separador  
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.1  Diligenciamiento de la tarjeta de registro de alojamiento

    p.mb-4 Para el diligenciamiento de la tarjeta de registro de alojamiento (TRA), se requiere la información tanto del prestador del servicio como del huésped, incluyendo datos de identificación, fechas de estancia y detalles del alojamiento, entre otros. A continuación, se detallan los campos necesarios:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-5.col-12
        img(src='@/assets/curso/t6/img3.png', alt='')
      .col-lg-9.col-md-12.col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Información del prestador")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-star
                  span.mb-0 #[b Número RNT:] es necesario contar con un número de registro nacional de turismo activo para acceder a la TRA.
                li 
                  i.fas.fa-star
                  span.mb-0 #[b Datos de contacto:] nombre del prestador, ubicación del alojamiento y datos del contacto.
                li 
                  i.fas.fa-star
                  span.mb-0 #[b Información del establecimiento:] nombre comercial, razón social, ubicación y características del alojamiento.
          .row.col-xl-11.m-auto(titulo="Información del huésped")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              ul.lista-ul--color.fa-al
                li 
                  i.fas.fa-star
                  span.mb-0 #[b Datos de identificación:] nombre completo, tipo y número de identificación, y nacionalidad.
                li 
                  i.fas.fa-star
                  span.mb-0 #[b Fechas de estancia:] fecha de llegada y fecha de salida.
                li 
                  i.fas.fa-star
                  span.mb-0 #[b Detalles de la reserva:] Detalles de la reserva: número de habitación, número de huéspedes y datos adicionales.
          .row.col-xl-11.m-auto(titulo="Para diligenciar la TRA")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              ol.lista-ol--cuadro.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  span.mb-0 #[b Acceder a la plataforma:] si el establecimiento cuenta con un #[em software] o conexión a internet, debe ingresar a la plataforma de la TRA.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  span.mb-0 #[b Ingresar los datos:] se debe completar la información del prestador y del huésped.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  span.mb-0 #[b Confirmar y guardar:] una vez ingresada la información, se confirma y guarda el registro.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  span.mb-0 #[b Reportar mensualmente:] si el establecimiento no tiene acceso a internet, debe descargar la plantilla en Excel, diligenciarla y remitirla mensualmente.

    p.mb-4 El diligenciamiento de la TRA es obligatorio para todos los prestadores de servicios turísticos de alojamiento.

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12
        .tarjeta.color-primario.p-3(data-aos="fade")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t3/sitio.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Tarjeta de Registro de Alojamiento - TRA
                  p.mb-0 Se invita a consultar “El manual para prestadores de servicios de alojamiento turístico (paso a paso en la tarjeta de registro de alojamiento)”.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://tramincit.gov.co/tarjeta/media/docs/Manual-Grupo-2-Usuarios-Directos-Conectados.pdf" target="_blank")
                    span Enlace web
                    i.fas.fa-check-circle

    Separador  
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.2  Tipos de documentos de identidad

    p.mb-4 Los documentos legales que deben portar las personas en Colombia son los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-md-2.col-12
        .row.bggrismate
          ul.lista-ul--color.fa-al.px-5.py-4.mt-4
            li 
              i.fas.fa-star
              span.mb-4 #[b Personas de nacionalidad colombiana:] deben presentar la cédula de ciudadanía si son mayores de 18 años. En el caso de menores de edad, se requiere la tarjeta de identidad o el registro civil de nacimiento.
            li 
              i.fas.fa-star
              span.mb-0 #[b Personas extranjeras en territorio colombiano:] deben portar el pasaporte o la cédula de extranjería.
            p.px-5.mt-5 La #[b cédula de extranjería] es un documento expedido por Migración Colombia a los extranjeros que residen en el país. Su vigencia corresponde a la duración de la visa otorgada. Si la visa es indefinida, la cédula debe renovarse cada cinco años. En caso de que la visa tenga una fecha de vencimiento específica, la cédula también tendrá esa misma fecha de expiración.
          ul.lista-ul--color.fa-al.px-5
            li 
              i.fas.fa-star
              span.mb-3 #[b Permiso de ingreso y permanencia (PIP):] Migración Colombia también otorga este permiso a ciudadanos de ciertas nacionalidades que no requieren visa de turismo. El PIP, en la mayoría de los casos, tiene una vigencia de 90 días calendario. Los establecimientos de alojamiento y hospedaje, de acuerdo con las normas migratorias, deben realizar el respectivo registro del hotel, hostal o vivienda turística en la plataforma SIRE de Migración Colombia, la cual lleva el registro oficial de extranjeros en el país.        
      .col-lg-3.col-md-5.col-12
        img(src="@/assets/curso/t6/img4.png")

    .row.justify-content-center.align-items-end(data-aos="fade")
      .col-lg-4.col-md-6.col-sm-12 
        img.p-0(src='@/assets/curso/t6/img5.png', alt='')
      .col-lg-8.col-md-12.col-sm-12.p-0.mt-1
        .row.bggrismateclaro.p-0
          .col-auto.px-5.mt-5
            p.bgacentocontenido.text-white.p-1.mb-4 #[b ¡Pilas al alojar!]
          p.px-5.mb-4.mt-2 Los errores más frecuentes al registrar a un huésped extranjero en la plataforma SIRE son los siguientes:
          ul.lista-ul--color.fa-al.px-5
            li.mb-0 
              i.fas.fa-star
              span.mb-0 No realizar el registro dentro de la primera hora de su llegada.
            li.mb-0
              i.fas.fa-star
              span.mb-0 No verificar la nacionalidad del cliente en la plataforma.
            li.mb-0 
              i.fas.fa-star
              span.mb-0 No diligenciar todos los campos requeridos.
            li.mb-0 
              i.fas.fa-star
              span.mb-0 No preguntar ni registrar la procedencia y el destino del huésped.
            li.mb-0 
              i.fas.fa-star
              span.mb-0 Registrar únicamente la entrada al establecimiento y omitir la salida.
            li.mb-4
              i.fas.fa-star
              span.mb-4 Incluir solo a la persona que hizo la reservación o realizó el pago, y no al resto de los huéspedes.

    Separador  
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.3  Equivalencias de documentos  

    p.mb-2 El documento principal requerido para el check-in es un documento de identificación oficial, vigente y con fotografía. Su propósito es verificar la identidad de la persona que se registra y se aloja en el establecimiento, en cumplimiento de la normativa legal y por razones de seguridad, tanto para el establecimiento como para los demás huéspedes.

    p.mb-4 A continuación, se presentan consideraciones importantes sobre la equivalencia de los documentos:

    .row.bgespecial1.align-items-center.p-2.mb-0(data-aos="fade-down")

      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
    
        .row.justify-content-center.align-items-center.mb-5

          .col-lg-12.col-md-12.col-sm-12
            SlyderF.circl-arrow.mb-4(columnas="col-lg-5 col-xl-4")
              .tarjeta.amarillomate.p-4
                .row.justify-content-center
                  .col-auto
                    img.img-a.img-t.mt-2.mb-2(src='@/assets/curso/t1/estrella.png' alt='')
                .row.justify-content-center
                  .col-auto
                    img.img-a.img-t.mb-4(src='@/assets/curso/t6/ico1.png' alt='')
                .row.align-items-center.justify-content-center
                  .col-auto.bgacentocontenido
                p.text-center.mt-3 La validez y vigencia del documento son fundamentales. Un documento vencido, por lo general, no será aceptado.
              .tarjeta.amarillomate.p-4
                .row.justify-content-center
                  .col-auto
                    img.img-a.img-t.mt-2.mb-2(src='@/assets/curso/t1/estrella.png' alt='')
                .row.justify-content-center
                  .col-auto
                    img.img-a.img-t.mb-4(src='@/assets/curso/t6/ico2.png' alt='')
                .row.align-items-center.justify-content-center
                  .col-auto.bgacentocontenido
                p.text-center.mt-3 La fotografía debe ser clara y permitir la plena identificación del portador.
              .tarjeta.amarillomate.p-4
                .row.justify-content-center
                  .col-auto
                    img.img-a.img-t.mt-2.mb-2(src='@/assets/curso/t1/estrella.png' alt='')
                .row.justify-content-center
                  .col-auto
                    img.img-a.img-t.mb-4(src='@/assets/curso/t6/ico3.png' alt='')
                .row.align-items-center.justify-content-center
                  .col-auto.bgacentocontenido
                p.text-center.mt-3 En el caso de extranjeros, es esencial que el documento permita verificar su estatus migratorio en Colombia, si aplica.
              .tarjeta.amarillomate.p-4
                .row.justify-content-center
                  .col-auto
                    img.img-a.img-t.mt-2.mb-2(src='@/assets/curso/t1/estrella.png' alt='')
                .row.justify-content-center
                  .col-auto
                    img.img-a.img-t.mb-4(src='@/assets/curso/t6/ico4.png' alt='')
                .row.align-items-center.justify-content-center
                  .col-auto.bgacentocontenido
                p.text-center.mt-3 Algunos establecimientos de alojamiento pueden tener políticas internas específicas sobre los documentos aceptados. En caso de dudas, se recomienda consultar directamente con el supervisor del área.
              .tarjeta.amarillomate.p-4
                .row.justify-content-center
                  .col-auto
                    img.img-a.img-t.mt-2.mb-2(src='@/assets/curso/t1/estrella.png' alt='')
                .row.justify-content-center
                  .col-auto
                    img.img-a.img-t.mb-4(src='@/assets/curso/t6/ico5.png' alt='')
                .row.align-items-center.justify-content-center
                  .col-auto.bgacentocontenido
                p.text-center.mt-3 La normativa colombiana exige a los establecimientos de alojamiento registrar la información de los huéspedes y reportarla a las autoridades competentes. Este proceso se debe realizar con base en los documentos de identificación presentados.

    Separador  
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.4  Permisos especiales para el registro en la TRA

    Separador  
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.5  Tipos de fraude en el registro de #[em check-in]

    Separador  
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.6  Condiciones del servicio

    Separador  
    #t_6_7.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 6.7  Prevención de la Explotación Sexual Comercial de Niñas, Niños y Adolescentes (ESCCNA)

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-lg-12.col-md-12.col-12
        .tarjeta.color-primario.p-3(data-aos="fade")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t3/sitio.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Manual de Buenas Prácticas de Turismo Responsable
                  p.mb-0 Se invita a consultar el manual de buenas prácticas de turismo responsable para conocer las recomendaciones clave del Ministerio de Comercio, Industria y Turismo (MINCIT).
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://tramincit.gov.co/tarjeta/media/docs/Manual-Grupo-2-Usuarios-Directos-Conectados.pdf" target="_blank")
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
