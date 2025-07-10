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

    p.mb-5 Un protocolo de servicio al cliente es un conjunto de pasos establecidos por la empresa que orienta la forma adecuada de atender al cliente. En el área de recepción, se ejecutan las siguientes etapas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-12.col-sm-12

        .row.bgcolorprimario.align-items-center.px-5.py-5

          .tarjeta.tarjeta--gris.p-4
            PasosB.color-primario
              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Mantener el área organizada
                  p.mt-4 El espacio debe estar limpio, ordenado y con el mostrador despejado. Es recomendable tener a la mano formularios, llaves, tarjetas de acceso, folletos informativos y material de bienvenida.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-1.png', alt='Texto que describa la imagen')

              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Preparación previa
                  p.mt-4 Se debe revisar anticipadamente las reservas del día y verificar toda la información antes de la llegada del huésped.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-2.png', alt='Texto que describa la imagen')
            
              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Dar la bienvenida al cliente
                  p.mt-4 Se debe establecer contacto visual, ofrecer una sonrisa genuina y saludar con un tono de voz amable y entusiasta. La presentación puede ser del siguiente modo:
                  p “Bienvenido/a a (nombre del hotel), mi nombre es (nombre del recepcionista). ¿En qué puedo ayudarle hoy?”
                  p Posteriormente, se consulta el nombre bajo el cual fue realizada la reserva.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-3.png', alt='Texto que describa la imagen')

              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Proceso de #[em check-in]
                  p.mt-4 Confirmar con el cliente los datos y detalles de la reserva: fechas, tipo de habitación, número de noches y el nombre de la persona a la que está registrada. Verificar si la información es correcta.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-4.png', alt='Texto que describa la imagen')

              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Solicitud de documentación
                  p.mt-4 Explicar brevemente el motivo por el cual se solicita la documentación y proceder a diligenciar la ficha de registro.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-5.png', alt='Texto que describa la imagen')

              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Garantía de pago
                  p.mt-4 Informar de manera clara y respetuosa sobre la política de solicitud de garantía de pago del establecimiento.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-6.png', alt='Texto que describa la imagen')

              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Asignación de habitación y entrega de llaves
                  p.mt-4 Entregar la llave o tarjeta de acceso, asegurándose de que funcione correctamente. Confirmar el número de la habitación asignada.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-7.png', alt='Texto que describa la imagen')

              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Información de servicios adicionales
                  p.mt-4 Brindar al huésped detalles sobre los servicios ofrecidos por el establecimiento, como horarios del desayuno, ubicación del restaurante, clave del wifi, entre otros.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-8.png', alt='Texto que describa la imagen')

              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Atención a solicitudes especiales
                  p.mt-4 Preguntar si el cliente tiene alguna solicitud adicional o dudas relacionadas con la reserva o los servicios disponibles.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-9.png', alt='Texto que describa la imagen')

              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Asistencia con equipaje y orientación
                  p.mt-4 Ofrecer ayuda con el equipaje, si el cliente lo considera necesario, y acompañarlo o indicarle claramente la ubicación de su habitación.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-10.png', alt='Texto que describa la imagen')

              .row.justify-content-center(titulo="")
                .col-md-6.mb-4.mb-md-0
                  h3.mt-4 Despedida cordial
                  p.mt-4 Finalizar el proceso deseando al huésped una feliz estancia, utilizando su nombre o apellido como muestra de atención personalizada.
                .col-md-4
                  img.mt-4(src='@/assets/curso/t2/sly1-11.png', alt='Texto que describa la imagen')

    .tarjeta.color-primario.p-3(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t2/icovideo.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Protocolos de atención y servicio al cliente/curso completo
              p.mb-0 Se invita explorar el siguiente video, donde podrá profundizar sus conocimientos.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=9o5sUuHmB-k" target="_blank")
                span Ir al sitio
                i.fas.fa-play-circle

    Separador  
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 La ética del servicio 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-3.col-md-5.col-12.p-0
        img(src='@/assets/curso/t2/img5.png', alt='')
      .col-lg-9.col-md-12.col-sm-12
        .row.bgverdemateclaro
          p.p-5.mt-3.mb-0 Dentro de un área de recepción hotelera se refiere al conjunto de principios y valores morales que guían el comportamiento de los profesionales encargados de recibir a los huéspedes y realizar los procedimientos del #[em check-in].  Implica actuar con integridad, honestidad, responsabilidad y respeto hacia los clientes, la empresa y compañeros.

    p.mb-5 La ética profesional es fundamental para construir y mantener la confianza de los clientes, mejorar la reputación del hotel y garantizar la satisfacción del cliente.

    .row.justify-content-center.align-items-center.mb-3
      .col-sm-12.col-md-12.col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Honestidad e integridad")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-9.col-md-12.col-col-sm-12
                p.mb-0 Actuar con transparencia en la información brindada sobre los servicios, tarifas y políticas del hotel. Cumplir con los compromisos adquiridos con los huéspedes. Manejar los activos del establecimiento de manera responsable y exclusivamente para fines laborales, evitando el uso personal y cualquier forma de fraude.
              .col-lg-3.col-md-5.col-12
                img(src='@/assets/curso/t2/ps1-1.png', alt='')
          .row.col-xl-11.m-auto(titulo="Respeto y cortesía con los huéspedes")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-9.col-md-12.col-col-sm-12
                p.mb-0 Brindar un trato respetuoso, evitando cualquier práctica discriminatoria por origen, raza, género, orientación sexual, religión o condición económica. Proteger la privacidad de los huéspedes y la información personal manejada en recepción. Escuchar activamente al huésped sin interrupciones y ofrecer soluciones efectivas.
              .col-lg-3.col-md-5.col-12
                img(src='@/assets/curso/t2/ps1-2.png', alt='')
          .row.col-xl-11.m-auto(titulo="Responsabilidad y profesionalismo")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-9.col-md-12.col-col-sm-12
                p.mb-0 Cumplir con los compromisos y tareas asignadas, manteniendo altos estándares de calidad en el servicio. Realizar los procesos de #[em check-in] de forma rápida y precisa para minimizar los tiempos de espera. Mantener una apariencia impecable, emplear un lenguaje adecuado y conservar un tono de voz profesional en todo momento.
              .col-lg-3.col-md-5.col-12
                img(src='@/assets/curso/t2/ps1-3.png', alt='')
          .row.col-xl-11.m-auto(titulo="Justicia y equidad")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-9.col-md-12.col-col-sm-12
                p.mb-0 Tratar a todos los huéspedes con imparcialidad, aplicando de manera uniforme las políticas y procedimientos del establecimiento.
              .col-lg-3.col-md-5.col-12
                img(src='@/assets/curso/t2/ps1-4.png', alt='')
          .row.col-xl-11.m-auto(titulo="Protección de datos personales")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
              .col-lg-9.col-md-12.col-col-sm-12
                p.mb-0 Asegurar que la información de los clientes se maneje conforme a las políticas de tratamiento de datos personales, en cumplimiento con la ley 1581 de 2012.
              .col-lg-3.col-md-5.col-12
                img(src='@/assets/curso/t2/ps1-5.png', alt='')


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
