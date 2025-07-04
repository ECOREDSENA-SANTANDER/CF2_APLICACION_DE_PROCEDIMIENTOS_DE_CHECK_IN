<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Servicio al cliente

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/t2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 Comprende el conjunto de acciones, procesos y actividades adicionales al producto o servicio básico, que los clientes esperan recibir como parte del valor que perciben por el precio pagado y la imagen de la organización. Su propósito principal es satisfacer las necesidades, deseos y expectativas del cliente, lo que implica que el objetivo de una empresa no debe ser únicamente vender, sino también fidelizar y mantener clientes satisfechos a largo plazo.
          br
          br

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/t2/ico.svg', alt='')
      .col
        h2.mb-0.mx-3.text-white Diferencia entre servicio y atención al cliente

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-md-12.col-sm-12
        p Es importante diferenciar entre atención y servicio al cliente. La atención al cliente se refiere al trato directo que se le brinda al usuario en cada interacción, donde predominan la cortesía, rapidez, empatía, amabilidad y claridad en la información. Por su parte, el servicio al cliente involucra una estructura más amplia y organizada de procesos que tienen como fin garantizar la satisfacción del cliente de forma consistente y efectiva.
        .row.bggrismate.borde-redondo
          p.p-5.mb-0 El servicio implica no solo disposición para atender, sino también capacidad para resolver con calidad.
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/t2/img2.png', alt='')

    .row.align-items-center.mb-5.subt(data-aos="fade-right")
      .col-auto.ico
        img(src='@/assets/curso/t2/ico.svg', alt='')
      .col
        h2.mb-0.mx-3.text-white El papel del personal en el servicio al cliente

    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/t2/img3.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        p.mb-4 El personal que forma parte de una organización desempeña un rol fundamental. Es esencial que cada integrante comprenda los objetivos institucionales relacionados con el servicio, así como la importancia de alcanzarlos. Un equipo consciente de esto actuará de manera coherente para contribuir a la experiencia positiva del cliente.
        .row.bgverdemate.borde-redondo
          p.py-4.px-5.mb-0 Como lo expresó Peter Drucker, “La calidad en el servicio no es lo que tú das, sino lo que el cliente realmente recibe”. Esta frase recuerda que la percepción del cliente es el elemento más determinante en la evaluación del servicio.
        
    Separador  
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Técnicas de atención

    .row.justify-content-center.align-items-center.bggrismate.borde-redondo(data-aos="fade-down-right")
      .col
        ul.lista-ul--color.fa-al.px-4.py-2
          li
            i.fas.fa-star
            span.mb-0 #[b Conocer al cliente:] antes de ofrecer una solución, es fundamental identificar quién es el cliente y cuáles son sus necesidades. Escuchar con atención y recopilar información permite brindar un servicio más efectivo y personalizado. 
          li
            i.fas.fa-star
            span.mb-0 #[b Crear cercanía y confianza:] estar presente y demostrar interés genuino fortalece la relación con el cliente. Un trato amable y respetuoso genera un ambiente de confianza que influye positivamente en la experiencia del servicio.
          li
            i.fas.fa-star
            span.mb-0 #[b Orientación al cliente:] el cliente debe ser siempre la prioridad. Todas las acciones y decisiones de la empresa deben centrarse en satisfacer sus expectativas, ya que es el activo más valioso de cualquier organización.
          li
            i.fas.fa-star
            span.mb-0 #[b Evaluación de la experiencia del cliente:] es importante evaluar continuamente qué tan satisfecho está el cliente con el servicio recibido. Herramientas como encuestas, entrevistas o análisis de comentarios permiten identificar fortalezas y oportunidades de mejora.
          li
            i.fas.fa-star
            span.mb-0 #[b Gestión de reclamos:] los comentarios negativos son una fuente valiosa de aprendizaje. Atender los reclamos de forma oportuna y con actitud resolutiva no solo ayuda a corregir errores, sino que también mejora la imagen de la empresa y fortalece la fidelización.
      .col-auto
        img.mover(src='@/assets/curso/t2/img4.png', alt='').d-none.d-lg-block

    Separador  
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Protocolos en el servicio al cliente  

    Separador  
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 La ética del servicio 



</template>

<script>
export default {
  name: 'Tema2',
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
