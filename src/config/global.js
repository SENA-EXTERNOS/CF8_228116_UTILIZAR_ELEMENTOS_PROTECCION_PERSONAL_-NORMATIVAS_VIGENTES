export default {
  global: {
    componenteFormativo:
      'Utilizar elementos de protección personal según normativas vigentes',
    descripcionCurso:
      'A través de este componente formativo reconocerá la importancia de la identificación de los riesgos, amenazas y normatividad vigente que regula su actividad laboral para garantizar el trabajo seguro en su puesto de trabajo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/img-banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/img-decor1-banner.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/cuadrados-vert.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Utilizar los elementos de protección personal y colectiva',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Seleccionar subsistemas de protección ',
        desarrolloContenidos: true,
        //subMenu: [
        //  {
        //    icono: 'far fa-file-alt',
        //    numero: '2.1',
        //    titulo: 'Arneses',
        //    hash: 'arneses',
        //  },
        //  {
        //    icono: 'far fa-file-alt',
        //    numero: '1.2',
        //    titulo: 'Consideraciones de los EPP',
        //    hash: 'consideraciones-de-los-EPP',
        //  },
        //  {
        //    icono: 'far fa-file-alt',
        //    numero: '1.3',
        //    titulo: 'Principales Elementos de Protección Personal',
        //    hash: 'principales-elementos-de-proteccion-Personal',
        //  },
        //],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Líneas de vida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Señalización y demarcación del área',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Líneas de advertencia',
        desarrolloContenidos: true,
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
      tema:
        'Estándares y Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST',
      referencia:
        'Ministerio del Trabajo. (2019). <em>Estándares y mínimos del Sistema de Gestión de la Seguridad y la Salud en el Trabajo.</em>',
      tipo: 'Resolución',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
    {
      tema:
        'Manual sobre las especificaciones técnicas de los EPP y su gestión integral',
      referencia:
        'Ministerio de Salud y Protección social. (2021). <i>Gestión integral de los Elementos de Protección Personal (EPP).</i> [Documento Soporte] ',
      tipo: 'Manual',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
    },
    {
      tema:
        'Ley 1562 de 2012, “Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional”.',
      referencia:
        'Congreso de la República de Colombia (2012). <i>Ley 1562 de 2012, “Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional”.</i>',
      tipo: 'Ley',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      tema: 'NTC 1641. Señalización',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (2020). <em>NTC 1641. Higiene y Seguridad. Colores y señales de Seguridad. </em>',
      tipo: 'Norma',
      link:
        'https://www.clinicantioquia.com.co/wp-content/uploads/2020/08/NTC-1461-HIGIENE-Y-SEGURIDAD-COLORES-Y-SENALES-DE-SEGURIDAD1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'ARL',
      significado: 'Administradora de Riesgos Laborales.',
    },
    {
      termino: 'Arnés',
      significado:
        ' EPP utilizado en trabajo de altura, rescate que permite cuidar y proteger a la persona que realiza la labor.',
    },
    {
      termino: 'ANSI',
      significado:
        '<em>American National Standars Institute</em> (Instituto Nacional Estadounidense de Estándares).',
    },
    {
      termino: 'EPP',
      significado: 'elementos de Protección Personal.',
    },
    {
      termino: 'Línea de Vida',
      significado:
        'elemento que protege ante una caída a la persona evitando lesiones graves e incluso la muerte.',
    },
    {
      termino: 'Líneas de advertencia',
      significado:
        'demarcan el área de trabajo seguro y permiten reconocer de manera visual los espacios de riesgo para la persona. ',
    },
    {
      termino: 'NTC',
      significado: 'Norma Técnica Colombiana.',
    },
    {
      termino: 'OSHA',
      significado: '<em>Occupational Safety and Health Administration.</em>',
    },
    {
      termino: 'Riesgo biológico',
      significado:
        'exposición a microorganismos que puedan dar lugar a enfermedades.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abrego, M., Molinos, R. y Ruiz, P. (s.f.). <i>Equipos de Protección Personal.</i> Sigweb.Cl. ',
      link:
        'http://www.sigweb.cl/wp-content/uploads/biblioteca/ManualEPPAchs.pdf',
    },
    {
      referencia:
        'American National Standards Institute. (2021). <i>ANSI/ASSE Z359.11-2021.</i>',
      link: '',
    },
    {
      referencia:
        'Butrón Palacio, E. (2018). <i>Seguridad y salud en el trabajo: 7 pasos para la implementación práctica y efectiva en prevención de riesgos laborales en SG-SST.</i> Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Julio 11 de 2012.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      referencia:
        'Constructor Colombia. (2017). Arnés y eslinga: conozca todo lo que debe saber sobre seguridad industrial | Constructor (video). YouTube.',
      link: 'https://youtu.be/w9n0q5l3daU',
    },
    {
      referencia:
        'Frías, E. (2020). <i>Hoja de Vida de los Equipos de Protección Contra Caída</i> (video). YouTube. ',
      link: 'https://youtu.be/RqcHMYfhpoI',
    },
    {
      referencia:
        'Fundación Laboral de la Construcción. (2019). <i>Dispositivos de protección: trabajo en alturas. Prevención de riesgos en caídas a distinto nivel</i> (video). YouTube.',
      link: 'https://youtu.be/6Iitw5uajUE',
    },
    {
      referencia:
        'Gracia, J., Técnico, M., Marquínez Blanco De Cisa, J., Laboral, P., Moreno, J. & Miangolarra, N. (s.f.). <i>Seguridad en trabajos de altura.</i>',
      link:
        'https://www.osalan.euskadi.eus/contenidos/libro/seguridad_200735/es_200735/adjuntos/Trabajos%20en%20altura.pdf',
    },
    {
      referencia:
        'Gea-Izquierdo, E. (2017). <i>Seguridad y salud en el trabajo.</i>',
      link: '',
    },
    {
      referencia:
        'Grupo Casa Lima. (2022). <i>Tipos de EPP (Equipos de Protección Personal).</i>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2020).<i> NTC 1641. Higiene y Seguridad. Colores y señales de Seguridad.</i>',
      link:
        'https://www.clinicantioquia.com.co/wp-content/uploads/2020/08/NTC-1461-HIGIENE-Y-SEGURIDAD-COLORES-Y-SENALES-DE-SEGURIDAD1.pdf',
    },
    {
      referencia:
        'Resolución 0312 de 2019. (Ministerio del Trabajo). Por la cual se definen los estándares mínimos del Sistema de Gestión y Seguridad en el Trabajo SG-SST. Febrero 13 de 2019.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2021). <i>Gestión integral de los Elementos de Protección Personal (EPP).</i>',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
    },
    {
      referencia:
        'Protection, H. F. [HAWK Fall Protection]. (2021). <i>Aprende a identificar un punto de anclaje seguro</i> (video). YouTube. ',
      link: 'https://www.youtube.com/watch?v=4R4rW1Lr5cs',
    },
    {
      referencia:
        'Valora Prevención. (2019). <i>Correcta utilización de los sistemas anticaídas</i> (video). YouTube. ',
      link: 'https://youtu.be/dQxXkWUdb7s',
    },
    {
      referencia:
        'VisualGraf, S. A. S. (2020). <i>Normas de Señalización en Colombia NTC 1461, Parte 1</i> (video). YouTube.',
      link: 'https://www.youtube.com/watch?v=UK_EuRWVlAQ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
