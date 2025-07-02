export default {
  global: {
    Name: 'Guía práctica en el procedimiento de check-in',
    Description:
      'El eje central de este componente es brindar una guía clara sobre el procedimiento adecuado para el registro, la acomodación y la salida del huésped. Se destacan aspectos clave como la bienvenida, el protocolo de servicio, el diligenciamiento de la tarjeta hotelera, el control de llaves y los horarios establecidos para el uso de la habitación, entre otros. A través de esta guía estructurada, se aprenderán los pasos fundamentales del proceso de #[em check-in].',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Protocolo de presentación persona',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Porte del uniforme - recepción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Higiene - imagen profesional',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de atención',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Protocolos en el servicio al cliente',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'La ética del servicio',
            hash: 't_2_3',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Bitácora de turno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Procedimientos',
            hash: 't_3_1',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<em>Check-in</em> - registro y acomodación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistema de información de alojamiento turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Técnicas de recolección de datos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Ley 1581 de 2012 - Ley de protección de datos personales',
            hash: 't_5_2',
          },
        ],
      },

      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Diligenciamiento de la tarjeta de registro de alojamiento',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos de documentos de identidad',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Equivalencias de documentos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Permisos especiales para el registro en la TRA',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Tipos de fraude en el registro de <em>check-in</em>',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Condiciones del servicio',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo:
              'Prevención de la Explotación Sexual Comercial de Niñas, Niños y Adolescentes (ESCCNA)',
            hash: 't_6_7',
          },
        ],
      },

      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Sistema de control de llaves',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Procedimiento',
            hash: 't_7_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tarjeta de Registro de Alojamiento - TRA.',
      referencia:
        'Gómez Gutiérrez, D. F. (2023). Fraudes más recurrentes en la recepción de un hotel.',
      tipo: 'PDF',
      link:
        'https://repository.umng.edu.co/server/api/core/bitstreams/bec22cdb-ec49-4dd3-ab3e-34319f8bd6b6/content',
    },
    {
      tema:
        'Prevención de la Explotación Sexual Comercial de Niñas, Niños y Adolescentes (ESCCNA).',
      referencia: 'MinTrabajoCol. (2020, 14 julio). ¿Qué es ESCNNA?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BVr-efKdNk0',
    },
  ],
  glosario: [
    {
      termino: 'Bitácora',
      significado:
        'Libro o registro donde se consignan observaciones, hechos relevantes, novedades y solicitudes ocurridas durante una jornada laboral, especialmente en establecimientos de alojamiento.',
    },
    {
      termino: 'Bitácora de turno',
      significado:
        'Registro donde el personal anota observaciones, novedades y solicitudes ocurridas durante su jornada laboral, para asegurar la continuidad del servicio.',
    },
    {
      termino: '<em>Check-in</em>',
      significado:
        'Proceso mediante el cual un huésped se registra en un establecimiento de alojamiento. Incluye la verificación de identidad, entrega de documentación y asignación de habitación.',
    },
    {
      termino: 'Condiciones del servicio',
      significado:
        'Normas y políticas del establecimiento que regulan el uso de las instalaciones y servicios durante la estadía del huésped.',
    },
    {
      termino: '<em>Early check-in</em>',
      significado:
        'Ingreso anticipado de un cliente a un establecimiento de alojamiento, antes del horario oficial de entrada establecido.',
    },
    {
      termino: 'ESCNNA',
      significado:
        'Prevención de la Explotación Sexual Comercial de Niñas, Niños y Adolescentes en contextos turísticos. Implica protocolos para proteger a menores y denunciar situaciones sospechosas.',
    },
    {
      termino: 'Ética del servicio',
      significado:
        'Principios y valores que rigen la conducta del personal en la atención al cliente, incluyendo respeto, confidencialidad e integridad.',
    },
    {
      termino: '<em>Feedbacks</em>',
      significado:
        'Opiniones o valoraciones proporcionadas por los consumidores sobre productos, servicios o la experiencia en general, que ayudan a mejorar la calidad del servicio.',
    },
    {
      termino: 'Fraude en el <em>check-in</em>',
      significado:
        'Acciones ilegales como el uso de documentos falsos o suplantación de identidad durante el proceso de ingreso a un alojamiento.',
    },
    {
      termino: '<em>Planning</em> de habitaciones',
      significado:
        'Herramienta física o digital que representa todas las habitaciones de un establecimiento, permitiendo gestionar su estado (libre, ocupada, bloqueada, en limpieza, etc.).',
    },
    {
      termino: 'Protocolo de atención al cliente',
      significado:
        'Conjunto de normas y procedimientos que orientan la interacción del personal con los clientes, buscando brindar un servicio cordial, eficiente y respetuoso.',
    },
    {
      termino: 'Recolección de datos',
      significado:
        'Proceso de obtención de información personal del huésped, necesaria para su registro y que debe realizarse respetando la normativa de protección de datos.',
    },
    {
      termino: 'Reserva',
      significado:
        'Acción mediante la cual un cliente asegura previamente la disponibilidad de una habitación u otro servicio de alojamiento, indicando fechas, condiciones y datos personales.',
    },
    {
      termino: 'SIRE (Sistema de Información para el Registro de Extranjeros)',
      significado:
        'Plataforma digital de Migración Colombia donde se reporta la estadía de ciudadanos extranjeros en el país.',
    },
    {
      termino: 'TRA (Tarjeta de Registro de Alojamiento)',
      significado:
        'Sistema del Ministerio de Comercio, Industria y Turismo (MINCIT) mediante el cual los prestadores de servicios turísticos de alojamiento registran a sus huéspedes. Sirve como respaldo legal del contrato de hospedaje.',
    },
  ],
  referencias: [
    {
      referencia:
        'ABI - Recepción. (s. f.). Grupo Hi Intercity. Bitácoras de recepción.',
      link: 'https://hiconecta.com/ra%C3%ADz/abi-recepci%C3%B3n',
    },
    {
      referencia:
        'Ayala, A., Cortés, A., Cruz, A., Ramírez, D., Rodríguez, A., Rodríguez, C., & Soler, C. (2011). Código ético de los prestadores de servicios de alojamiento inscritos en el registro nacional de turismo, su texto y el proceso de construcción a través de actos de habla. Anuario Turismo y Sociedad, (12), 275–283.',
      link: '',
    },
    {
      referencia:
        'Calle Iñiguez, M., Lazo Serrano, A., & Grunauer Maguiño, M. (2018). Gestión del sector alojamiento-hotel.',
      link: '',
    },
    {
      referencia:
        'Del Turismo, O. M. (1999). Código ético mundial para el turismo.',
      link: 'https://www.unwto.org/es/codigo-etico-mundial-para-el-turismo',
    },
    {
      referencia:
        'Hotelinking. (s. f.). ¿Qué métodos dispone un hotel para recopilar datos de sus huéspedes? ',
      link:
        'https://www.hotelinking.com/tecnologia/metodos-recopilar-datos-huespedes/#:~:text=Una%20de%20las%20opciones%20m%C3%A1s,de%20fidelizaci%C3%B3n%20y%20ventas%20directas',
    },
    {
      referencia:
        'Jones, P., & Ninemeier, J. D. (2017). Hotel operations management (3rd ed.). SAGE Publications.',
      link: '',
    },
    {
      referencia:
        'Kasavana, M. L. (2017). Managing front office operations. American Hotel & Lodging Educational Institute.',
      link: '',
    },
    {
      referencia:
        'Knutson, B. J., Patton, M. E., & Beck, J. A. (2006). Hospitality and tourism: An introduction to the industry (5th ed.). Educational Institute of the American Hotel & Lodging Association.',
      link: '',
    },
    {
      referencia:
        'Ley 1581 de 2012. Política de tratamiento y protección de datos personales – Ministerio de Ambiente y Desarrollo Sostenible. Unidad Administrativa Especial Migración Colombia. Artículo 13. Tipos de permiso de ingreso y permanencia. ',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/resolucion_uaemc_3167_2019.htm',
    },
    {
      referencia:
        'Ley 2068 de 2020. Título III. De los prestadores de servicios turísticos y de la calidad turística.',
      link: '',
    },
    {
      referencia:
        'Manoharan, A., Madera, J. M., & Singal, M. (Eds.). (2024). Manual de Routledge sobre gestión de diversidad, equidad e inclusión en la industria hotelera. Routledge.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s. f.). Norma Técnica Sectorial Colombiana NTSH-006. ',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/calidad-turistica/normas-tecnicas-sectoriales/nts-alojamiento-y-hospedaje-1/norma-tecnica-sectorial-colombiana-ntsh-006-i-actu/norma-tecnica-sectorial-colombiana-ntsh-006-i.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s. f.). Tarjeta de Registro de Alojamiento – TRA.',
      link: 'https://tramincit.gov.co/',
    },
    {
      referencia:
        'Mews. (2025). Todo sobre el check-in móvil para hoteles | Guía.',
      link:
        'https://www.mews.com/es/blog/check-in-movil#:~:text=Mews%20es%20la%20opci%C3%B3n%20ideal,check%2Din%20de%20manera%20aut%C3%B3noma',
    },
    {
      referencia:
        'Olivar, J. S., & Molina, A. (2018). Gestión de alojamientos turísticos. Editorial Síntesis.',
      link: '',
    },
    {
      referencia:
        'TrustCloud. (2024). Cómo prevenir el fraude en el sector hotelero.',
      link:
        'https://trustcloud.tech/es/blog/como-prevenir-el-fraude-en-el-sector-hotelero/',
    },
    {
      referencia:
        'Ubergard. (2024). Enhancing security with key control system in hotels.',
      link: 'https://ubergard.com/key-control-system-in-hotels/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Aurora Milena Parada Ortega ',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
