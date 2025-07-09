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

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-8.col-md-12.col-sm-12
        p.mb-4 El horario de #[em check-in] es determinado por cada establecimiento de manera individual, basándose en sus políticas operativas y en la necesidad de tiempo para la limpieza y preparación de las habitaciones después de la salida del huésped. En la mayoría de los hoteles en Colombia, así como en otros tipos de alojamiento turístico, el horario establecido para el #[em check-in] es a partir de las 3:00 p.m.  Esto no constituye una obligación legal, sino una práctica común en la industria, y puede variar entre diferentes tipos de hoteles o incluso dentro de la misma cadena hotelera.
        .row.bggrismate.borde-redondo
          p.p-5.mb-0 Algunos hoteles pueden ofrecer la posibilidad de realizar un #[em “early check-in”] (ingreso anticipado), si la habitación está disponible antes de la hora establecida. No obstante, este ingreso anticipado puede estar sujeto a un costo adicional.
      .col-lg-4.col-md-6.col-sm-12
        img.mt-2(src='@/assets/curso/t4/img2.png', alt='')

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-3.col-md-5.col-sm-12
        img(src='@/assets/curso/t4/img3.png', alt='')
      .col-lg-9.col-md-12.col-sm-12
        p.mb-3.mt-4 Según Sánchez (2013), el proceso de #[em check-in] se realiza de la siguiente manera:
        p Este proceso comienza con la llegada del huésped al hotel. Debe tenerse en cuenta que, durante el check-in, el huésped se formará la primera impresión del hotel, por lo que el colaborador debe poner todo su empeño para evitar cualquier error que pueda generar una impresión negativa, y procurar, en cambio, causar una percepción positiva. Para lograr este objetivo, es necesario realizar los siguientes procesos con gran cautela:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-3.col-md-5.col-sm-12
        img(src='@/assets/curso/t4/img4.png', alt='')
      .col-lg-6.col-md-12.col-sm-12.mt-2
        .row.bgcolorprimario.align-items-center.p-4.py-5
          .col-lg-12.col-12.px-lg-5.px-4
            .row.justify-content-center
              .tarjeta.tarjeta--blanca.p-4.py-3(data-aos="fade-down")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    ul.lista-ul--color.fa-al.px-4
                      li 
                        i.fas.fa-star
                        span.mb-0 Actualizar el estado situacional de las habitaciones (sistema manual o computarizado).
                      li 
                        i.fas.fa-star
                        span.mb-0 Verificar la disponibilidad de habitaciones.
                      li 
                        i.fas.fa-star
                        span.mb-0 Dar la bienvenida al huésped.
                      li 
                        i.fas.fa-star
                        span.mb-0 Recibir al huésped con o sin reserva (siempre que exista la disponibilidad necesaria).
                  .row.justify-content-center.align-items-center
                    ul.lista-ul--color.fa-al.px-4
                      li 
                        i.fas.fa-star
                        span.mb-0 Atender tanto a huéspedes individuales como a grupos.
                      li 
                        i.fas.fa-star
                        span.mb-0 Manejar cupones o vales de alojamiento, si aplica.
                      li 
                        i.fas.fa-star
                        span.mb-0 Verificar los datos de la reservación.
                      li 
                        i.fas.fa-star
                        span.mb-0 Ofrecer opciones de habitaciones disponibles.
                      li 
                        i.fas.fa-star
                        span.mb-0 Aplicar descuentos especiales, cuando corresponda.
                  .row.justify-content-center.align-items-center
                    ul.lista-ul--color.fa-al.px-4
                      li 
                        i.fas.fa-star
                        span.mb-0 Informar sobre servicios adicionales ofrecidos por el hotel, como spa, gimnasio, piscina, entre otros.
                      li 
                        i.fas.fa-star
                        span.mb-0 Registrar al huésped en una ficha individual.
                      li 
                        i.fas.fa-star
                        span.mb-0 Verificar y controlar los documentos de identidad.
                      li 
                        i.fas.fa-star
                        span.mb-0 Garantizar la estancia según las políticas del establecimiento.
                  .row.justify-content-center.align-items-center
                    ul.lista-ul--color.fa-al.px-4
                      li 
                        i.fas.fa-star
                        span.mb-0 Asignar la habitación o habitaciones correspondientes.
                      li 
                        i.fas.fa-star
                        span.mb-0 Registrar al huésped en el libro de entradas y salidas.
                      li 
                        i.fas.fa-star
                        span.mb-0 Dar instrucciones al personal de botones y seguridad, si el caso lo requiere.
                      li 
                        i.fas.fa-star
                        span.mb-0 Acompañar o indicar la ubicación del huésped en su habitación.
                  .row.justify-content-center.align-items-center
                    ul.lista-ul--color.fa-al.px-4
                      li 
                        i.fas.fa-star
                        span.mb-0 Comunicar el #[em check-in] a todos los sectores involucrados y registrar la información en el sistema informático, si se cuenta con uno.
      .col-lg-3.col-md-12.col-sm-12.mt-2
        .tarjeta.color-primario.p-3(data-aos="fade")
          .row.justify-content-center.align-items-center
            .row
              img.img-t.img-a.mb-1(src="@/assets/curso/t3/sitio.png")
            .row.justify-content-center.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0.linea Se invita a consultar la Norma Técnica Sectorial Colombiana NTSH-003, correspondiente a la norma de competencia laboral para la prestación del servicio de recepción y reservas, conforme a los manuales establecidos. En particular, se recomienda revisar el numeral 4.1, que describe los requisitos para realizar los procesos de check-in y check-out de huéspedes, de acuerdo con los procedimientos previamente definidos.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://fontur.com.co/sites/default/files/2020-11/NTSH003.pdf" target="_blank").mt-1
                  span Enlace web
                  i.fas.fa-check-circle

    p.mb-4 A continuación, se describen los procedimientos básicos que debe seguir el personal de recepción para garantizar una atención eficiente y organizada al huésped:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-9.col-md-12.col-12
        .row.mt-4
          .col-auto.bgacentocontenido
            h3.text-white.mb-1 A
          .col
            h3.mb-1 #[b Bienvenida al huésped]
        .row
          p.mt-4 El recepcionista debe recibir al huésped con una actitud cordial, acompañado de una sonrisa amable, brindándole una cálida bienvenida al establecimiento.
        .row.mt-4
          .col-auto.bgacentocontenido
            h3.text-white.mb-1 B
          .col
            h3.mb-1 #[b Verificación de la reserva del día]
        .row
          p.mt-4 El recepcionista debe buscar la reserva del huésped utilizando el sistema o mecanismo implementado por el establecimiento, a partir del nombre, número de reserva u otro dato relevante proporcionado por el cliente.
        .row.mt-4
          .col-auto.bgacentocontenido
            h3.text-white.mb-1 C
          .col
            h3.mb-1 #[b Disponibilidad de la habitación]
        .row
          p.mt-4 El recepcionista verifica la disponibilidad de la habitación asignada al huésped, así como su estado actual. Además, debe revisar la disponibilidad de otras habitaciones, en caso de que el cliente requiera una adicional.
          p.mt-2 El sistema presenta las habitaciones disponibles, incluyendo aquellas que coinciden con el tipo de habitación reservada, si el establecimiento utiliza un mecanismo sistematizado. En caso de que el control se realice de forma manual, se requiere el reporte del área de ama de llaves o del personal de camareras, el cual contiene información detallada sobre el estado de cada habitación del hotel. Generalmente, este reporte se elabora y se envía a recepción tres veces al día.
      .col-lg-3.col-md-5.col-12
        img(src="@/assets/curso/t4/img5.png")

    p.mb-4 Este informe utiliza una serie de claves, que pueden variar según el hotel. Algunas de las más comunes son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-4.col-md-6.col-12.p-0
        img(src='@/assets/curso/t4/img6.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        .row.bgcolorsecundario.p-3
          .col-lg-4.col-md-4.col-sm-12
            ul.lista-ul--color.fa-al.px-4.mt-5.mb-4
              li.mt-1
                i.fas.fa-star
                span.mb-0 VL: vacío y limpio
              li 
                i.fas.fa-star
                span.mb-0 S: salida y sucio
              li 
                i.fas.fa-star
                span.mb-0 O: ocupado
          .col-lg-4.col-md-4.col-sm-12
            ul.lista-ul--color.fa-al.px-4.mt-5.mb-4
              li.mt-1
                i.fas.fa-star
                span.mb-0 P: preparada o lista para un nuevo cliente
              li 
                i.fas.fa-star
                span.mb-0 ND: no durmió
          .col-lg-4.col-md-4.col-sm-12.mt-5.mb-4
            ul.lista-ul--color.fa-al.px-4
              li.mt-1
                i.fas.fa-star
                span.mb-0 F: fuera de servicio
              li 
                i.fas.fa-star
                span.mb-0 CX: cama extra
              li 
                i.fas.fa-star
                span.mb-0 SE: sin equipaje

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
        .row.mt-4
          .col-auto.bgacentocontenido
            h3.text-white.mb-1 D
          .col
            h3.mb-1 #[b Informe de ocupación]
        .row
          p.mt-4 Es la información interna que detalla la disponibilidad y el estado de las habitaciones. El personal de recepción la consulta y actualiza, ya sea a través del sistema o de forma manual en el planning de habitaciones, con el fin de garantizar un proceso de check-in eficiente y mantener un control preciso sobre la ocupación del hotel.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
        .row.mt-4
          .col-auto.bgacentocontenido
            h3.text-white.mb-1 E
          .col
            h3.mb-1 #[b Política de solicitud de garantías]
        .row
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-4
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/t4/img7.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La mayoría de los establecimientos de alojamiento incluyen dentro de sus políticas una directriz sobre la solicitud de garantías. Esta consiste en preguntar al huésped cuál será el medio de pago con el que desea cubrir los gastos de su estadía durante los días de hospedaje en el establecimiento. Puede tratarse de pago en efectivo, tarjeta de crédito, débito u otro medio disponible por parte del huésped, con el objetivo de respaldar posibles imprevistos que puedan surgir durante su estancia.
                br
                br
                | Estas políticas deben estar claramente definidas y comunicadas al huésped durante el procedimiento de #[em check-in]. Esto incluye el monto de la pre autorización, la aceptación de distintos tipos de tarjetas y el procedimiento a seguir en caso de presentarse inconvenientes con el medio de pago. 

    p.mb-5 La solicitud del medio de pago debe hacerse de forma cortés, explicando brevemente el motivo. Por ejemplo:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-10
        .row.bggrismate.borde-redondo
          p.p-5.mb-0 “Señor/señora [apellido del huésped], para completar su registro, ¿sería tan amable de informarme cuál será el medio de pago que utilizará para garantizar su estadía y cualquier cargo adicional que pudiera surgir?”

    p.mb-4 Es fundamental informar al huésped, de manera clara, el propósito de dicha solicitud. Si el cliente elige como medio de pago una tarjeta, se le debe explicar que esta opción generalmente implica lo siguiente:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-5.col-12
        img(src='@/assets/curso/t4/img8.png', alt='')
      .col-lg-9.col-md-12.col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Garantía de pago")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
                p.mb-0 Asegura el pago de la tarifa de la habitación, impuestos y demás cargos previamente acordados.
          .row.col-xl-11.m-auto(titulo="Cargos incidentales")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
                p.mb-0 Cubre posibles gastos adicionales durante la estadía, como servicio a la habitación, consumo en restaurante o bar, daños a la propiedad, entre otros.
          .row.col-xl-11.m-auto(titulo="Pre autorización (o retención)")
            .row.justify-content-center.align-items-center(data-aos="fade-right")
                p.mb-0 El hotel puede realizar una pre autorización por un monto estimado que incluye el valor de la estadía más un adicional por cargos incidentales. Es importante aclarar al huésped que esto no es un cargo efectivo, sino una retención temporal de fondos que será liberada una vez se realice el check-out. El tiempo de liberación puede variar según el banco emisor.

    p En caso de que el huésped opte por pagar en efectivo, se puede solicitar un depósito como garantía. Al finalizar la estadía, se realiza el cruce correspondiente con el valor total de la factura.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .row.mt-4
        .col-auto.bgacentocontenido
          h3.text-white.mb-1 F
        .col
          h3.mb-1 #[b Norma Técnica Sectorial Colombiana - NTSH 006 (registro y acomodación / #[em check-in])]

    .row.justify-content-center.align-items-center.bggrismateclaro.borde-redondo.esquina(data-aos="fade-down-right")
      .col
        p.mb-4.px-4 El hotel debe, como mínimo, cumplir con los siguientes lineamientos:
        ul.lista-ul--color.fa-al.px-4.py-2
          li
            i.fas.fa-star
            span.mb-0 Informar al huésped sobre el horario establecido para el registro y acomodación.
          li
            i.fas.fa-star
            span.mb-0 Brindar indicaciones claras que permitan al cliente localizar fácilmente su alojamiento.
          li
            i.fas.fa-star
            span.mb-0 Realizar cambios de habitación conforme al protocolo de servicio definido.
          li
            i.fas.fa-star
            span.mb-0 Asegurar que el personal de servicio conozca adecuadamente el establecimiento, la ubicación de todas sus áreas, habitaciones y servicios.
          li
            i.fas.fa-star
            span.mb-0 Tener las habitaciones dispuestas y listas para ser entregadas a los clientes a partir de las 15:00 horas, o según lo definido por las políticas del hotel.
          li
            i.fas.fa-star
            span.mb-0 Ofrecer el servicio de custodia de equipaje hasta que el huésped pueda ser alojado.
          li
            i.fas.fa-star
            span.mb-0 Ofrecer al cliente una variedad de servicios o actividades gratuitas que compensen la imposibilidad de alojarlo de inmediato.
          li
            i.fas.fa-star
            span.mb-0 Contar con los medios técnicos necesarios para verificar la reserva y la habitación asignada.
      .col-auto
        img.mover(src='@/assets/curso/t4/img9.png', alt='').d-none.d-lg-block


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
