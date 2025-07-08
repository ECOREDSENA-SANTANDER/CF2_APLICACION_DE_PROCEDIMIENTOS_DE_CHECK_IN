<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Bitácora de turno

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        br
        br
        p.mb-0 La bitácora de turno en la recepción de un establecimiento de alojamiento es una herramienta fundamental para el buen funcionamiento operativo y el seguimiento adecuado de la información. En ella se registran de manera detallada los eventos relevantes ocurridos durante un turno específico, con el propósito de facilitar la comunicación y continuidad entre los diferentes turnos y departamentos del establecimiento.
          br
          br
          br
          br

    Separador  
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1  Procedimientos

    p.mb-5 Para el manejo de la bitácora se utiliza principalmente el libro florete de actas, 96 horas. En general, se trabajan tres tipos de bitácoras físicas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-12
        TabsB.color-acento-contenido.escala-grises
          .py-4.py-md-5(titulo="Bitácora física 1" :icono="require('@/assets/curso/t3/ico1.png')")
            .row.align-items-center.justify-content-center
              .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
                h3.mb-4 Bitácora diaria
                p.mb-4 Destinada al registro de los sucesos relevantes y de la información fija correspondiente a cada turno, así como a los avisos que la administración o el corporativo deban comunicar a recepción. También se incluyen acciones administrativas tomadas, entre otros aspectos importantes.
                ul.lista-ul--color.fa-al.px-4
                  li 
                    i.fas.fa-star
                    span.mb-0 Tanto el área de recepción como la administración deben revisar diariamente lo registrado en la bitácora.
                  li 
                    i.fas.fa-star
                    span.mb-0 La gerencia se entera de lo sucedido desde el momento de su salida el día anterior hasta su llegada al hotel al día siguiente; a partir de esta información, atiende solicitudes, requisiciones y pendientes, o bien los delega y firma.
                  li 
                    i.fas.fa-star
                    span.mb-0 El fondo de caja es fijo y rotativo, debe ser recibido y entregado completo sin excepción. en caso de presentarse un faltante, el recepcionista en turno debe estar en capacidad de responder por este, ya que firmó haberlo recibido.
              .col-sm-12.col-md-5.col-lg-3
                figure
                  img(src='@/assets/curso/t3/img2.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Bitácora física 2" :icono="require('@/assets/curso/t3/ico1.png')")
            .row.align-items-center.justify-content-center
              .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
                h3.mb-4 Objetos olvidados
                p.mb-4 Bitácora destinada al registro y control de los objetos olvidados por los huéspedes en habitaciones y/o áreas públicas. Estos objetos deben ser resguardados temporalmente durante el periodo establecido y, posteriormente, se definirá su destino final, ya sea la devolución al huésped o la donación a una institución o casa hogar.
                ul.lista-ul--color.fa-al.px-4
                  li 
                    i.fas.fa-star
                    span.mb-0 Todo el personal debe conocer el procedimiento relacionado con objetos olvidados.
                  li 
                    i.fas.fa-star
                    span.mb-0 La información sobre el proceso y el plazo máximo de resguardo debe comunicarse claramente al huésped, cuando sea necesario.
                  li 
                    i.fas.fa-star
                    span.mb-0 La planificación administrativa debe contemplar la entrega de objetos donados cada 15 días, garantizando el cumplimiento de este proceso.
              .col-sm-12.col-md-5.col-lg-3
                figure
                  img(src='@/assets/curso/t3/img3.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Bitácora física 2" :icono="require('@/assets/curso/t3/ico1.png')")
            .row.align-items-center.justify-content-center
              .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
                h3.mb-4 Registro vehicular
                p.mb-4 Bitácora destinada para que el personal de vigilancia registre las placas de todos los vehículos estacionados dentro y frente al hotel.
                ul.lista-ul--color.fa-al.px-4
                  li 
                    i.fas.fa-star
                    span.mb-0 Vigilancia, recepción y administración deben conocer el procedimiento de registro vehicular.
                  li 
                    i.fas.fa-star
                    span.mb-0 El recepcionista del turno nocturno debe verificar que las placas registradas en la bitácora coincidan con las ingresadas en el #[em software] de gestión hotelera. Todas deben concordar.
                  li 
                    i.fas.fa-star
                    span.mb-0 La bitácora se entrega al vigilante al comenzar el turno, junto con las demás herramientas de trabajo. Se recomienda que el vigilante realice una ronda al menos cada 90 minutos, intercalándola con otras actividades asignadas.
              .col-sm-12.col-md-5.col-lg-3
                figure
                  img(src='@/assets/curso/t3/img4.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
        .col-lg-8.col-md-12.col-12
          .tarjeta.color-primario.p-3(data-aos="fade")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/t3/sitio.png")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Bitácoras de Recepción
                    p.mb-0 Se invita a explorar los ejemplos de cada bitácora.
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://hiconecta.com/ra%C3%ADz/abi-recepci%C3%B3n" target="_blank")
                      span Enlace web
                      i.fas.fa-check-circle



</template>

<script>
export default {
  name: 'Tema3',
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
