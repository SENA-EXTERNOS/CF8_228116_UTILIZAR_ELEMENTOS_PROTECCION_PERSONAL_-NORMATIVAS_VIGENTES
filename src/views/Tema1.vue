<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Utilizar los elementos de protección personal y colectiva

      
    .row.container.justify-content-around.align-items-center
      
        p Los elementos de protección se deben usar de forma correcta en cada uno de los trabajos para los cuales fueron contratados ya que de lo contrario se pone en riesgo la vida del empleado.

        #elementos-de-proteccion
        .titulo-segundo.color-primario
          h2 1.1 Elementos de protección
        
        .row.container
          .col-lg-7
              .cuadro-color-tarj1-tema1
              p.txt-cuadro-color-tarj1-tema1 A través de la utilización de los Elementos de Protección Personal (EPP), se busca proteger la integridad física del trabajador en su actividad laboral, su utilización es obligatoria y el empleador los deberá suministrar a su empleado para evitar accidentes, lesiones, enfermedades laborales, etc.; así, también se garantiza cumplir con los protocolos establecidos en el programa de seguridad y salud en el trabajo.

              
          .col-lg-5
              figure
                img(data-aos="fade-left")(src="@/assets/curso/temas/img1-tema1.png").imagen1-sistemas-distribuidos

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        p En la siguiente información se indica la importancia del uso de los EPP y la forma de reportar un accidente si llega a pasar por la falta del uso de ellos.
        p Cada trabajador requiere unos EPP diferentes de acuerdo con su cargo o trabajo en la empresa; además, se deben cumplir la Resolución 2400 de 1979 y la Ley 9 de 1979. 


        .tarjeta(data-aos="flip-up").tarjeta--azul.p-4
          SlyderA(tipo="b")

            .row.justify-content-center.align-items-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                p Pongamos un ejemplo, Andrés hoy no decidió utilizar su equipo de protección personal, sufrió una caída y ha tenido una lesión en su brazo derecho.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img1-slider-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

            .row.justify-content-center.align-items-center.my-lg-4
              
              .col-md-6.mb-4.mb-md-0
                p De inmediato, se comunica con su jefe directo y hacen el reporte a la ARL (Administradora de Riesgos Laborales) para su atención. Andrés va al médico, su situación es delicada y, al parecer, va a quedar con daños permanentes en su brazo.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img2-slider-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

            
            .row.justify-content-center.align-items-center.my-lg-4
              
              .col-md-6.mb-4.mb-md-0
                p La ARL investiga todo incidente y, en los vídeos de las cámaras de seguridad, se percatan que el trabajador no llevaba consigo los elementos de protección personal y se exoneran de toda responsabilidad pues es obligación del empleador exigir la utilización de los EPP. 

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img3-slider-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen


            .row.justify-content-center.align-items-center.my-lg-4
              
              .col-md-6.mb-4.mb-md-0
                p En el ejemplo anterior podemos concluir que aunque sea una exigencia la utilización de los EPP, también está en nosotros la responsabilidad civil de utilizarlos adecuadamente por protección y prevención ante cualquier eventualidad. 

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img4-slider-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

            .row.justify-content-center.align-items-center.my-lg-4
              
              .col-md-6.mb-4.mb-md-0
                p Comprendemos, entonces, la importancia de utilizar los elementos de protección personal y la responsabilidad empresarial de exigirlos y suministrar los EPP a sus trabajadores; también a los contratistas y visitantes que se encuentren en las instalaciones. 

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img5-slider-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

    br      
    br      
    br

    .row.container.justify-content-around.align-items-center

        #consideraciones-de-los-epp
        .titulo-segundo.color-primario
          h2 1.2 Consideraciones de los EPP
        
        p Se deben tener en cuenta varios aspectos a la hora de la entrega de los elementos personales: un acta de entrega, la talla correcta, el buen estado y que cumpla con los estándares de calidad.

        .row.fila1-tarjetas-tema1
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario.tarjetas-tema1.p-4
              .row.justify-content-center.mb-3
                .titulo-sexto.color-secundario.mb-3
                    h5 Figura 1.
                    span <em>Elementos de protección personal</em>
                .col-7
                  
                  figure
                    img(src='@/assets/curso/temas/img1-tarj-tema1.png', alt='Texto que describa la imagen')

              h3.text-center Elementos de protección personal
              //p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario.tarjetas-tema1.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img2-tarj-tema1.png', alt='Texto que describa la imagen')

              h3.text-center Acta de entrega
              p.text-small El empleador debe realizar entrega de los EPP personalmente a su trabajador y, en la medida de lo posible, realizar un acta como constancia. 

          .col-sm-6.col-lg-4.mb-4.mb-sm-0
            .tarjeta--boton.color-secundario.tarjetas-tema1.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img3-tarj-tema1.png', alt='Texto que describa la imagen')

              h3.text-center Talla correcta
              p.text-small Los EPP deben ajustarse a cada trabajador, por ejemplo, en la talla.

        .row.fila2-tarjetas-tema1
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario.tarjetas-tema1.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img4-tarj-tema1.png', alt='Texto que describa la imagen')

              h3.text-center Reporta mal estado de EPP
              p.text-small El empleado deberá reportar el mal estado de un EPP y el empleador deberá reemplazarlo. 

          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario.tarjetas-tema1.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img5-tarj-tema1.png', alt='Texto que describa la imagen')

              h3.text-center Estándares de calidad
              p.text-small Los EPP deberán cumplir los estándares de calidad y las especificaciones técnicas que sean del caso. 

          .col-sm-6.col-lg-4.mb-4.mb-sm-0
            .tarjeta--boton.color-secundario.tarjetas-tema1.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img6-tarj-tema1.png', alt='Texto que describa la imagen')

              h3.text-center Buen uso EPP
              p.text-small El empleado deberá cuidar sus EPP y darles buen uso

        .row.fila3-tarjetas-tema1
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color-secundario.tarjetas-tema1.p-4
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/temas/img7-tarj-tema1.png', alt='Texto que describa la imagen')

              h3.text-center Uso en jornada laboral
              p.text-small El empleado deberá utilizar los EPP durante toda la jornada laboral.
    br
    br
    br
    br
    separador
    
    
    .row.container.justify-content-around.align-items-center
        
        #principales-elementos-de-proteccion-personal
        .titulo-segundo.color-primario
          h2 1.3 Principales Elementos de Protección Personal

        p A continuación, se mencionan los principales Elementos de Protección Personal que se deben tener en cuenta.

        
        TabsC.color-primario
          .py-3.py-md-4(titulo="Calzado correcto")
            
            .row    

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-calzado-correcto-tema1.png', alt='Texto que describa la imagen').img-pestanas1-tema1
                  //figcaption Leyenda de la imagen
              
              .col-md-6.mb-4.mb-md-0.txt-pestanas1-tema1
                h4 Calzado correcto
                p El calzado deberá garantizar la protección y su finalidad depende de la actividad a desempeñar por el trabajador; por ejemplo, existen botas con punta de acero para proteger los dedos ante la posible caída de objetos, botas dieléctricas que aíslan la energía eléctrica, etc. 

                
          .py-3.py-md-4(titulo="Guantes y cubre brazos")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-guantes-tema1.png', alt='Texto que describa la imagen').img-pestanas1-tema1
                  //figcaption Leyenda de la imagen
              .col-md-6.txt-pestanas1-tema1
                h4 Guantes y cubre brazos
                p Los guantes y cubre brazos previenen el contacto de las manos y brazos de sustancias nocivas para la piel o que puedan generar quemaduras; existen varios tipos, entre ellos tenemos guantes para manipulación de químicos, manejo de residuos, equipos eléctricos, etc.

          
          .py-3.py-md-4(titulo="Cascos")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-casco-tema1.png', alt='Texto que describa la imagen').img-pestanas1-tema1
                  //figcaption Leyenda de la imagen
              .col-md-6.txt-pestanas1-tema1
                h4 Cascos
                p Los cascos son indispensables siempre que el trabajador se encuentre ante la posibilidad de caída de objetos, contacto con elementos químicos, riesgo de caída o toda situación que involucre la cabeza.

          
          .py-3.py-md-4(titulo="Gafas o caretas")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-gafas-tema1.png', alt='Texto que describa la imagen').img-pestanas1-tema1
                  //figcaption Leyenda de la imagen
              .col-md-6.txt-pestanas1-tema1
                h4 Gafas o caretas
                p Gafas o caretas para proteger los ojos en el caso de que el trabajador se encuentre expuesto al uso de sustancias químicas, partículas que puedan caer en los ojos, radiaciones, riesgos biológicos, etc. Cada tipo de riesgo exige un elemento de protección adecuado. 

          
          .py-3.py-md-4(titulo="Protección respiratoria")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-prot-respi-tema1.png', alt='Texto que describa la imagen').img-pestanas1-tema1
                  //figcaption Leyenda de la imagen
              .col-md-6.txt-pestanas1-tema1
                h4 Protección respiratoria
                p Protección respiratoria a través de mascarillas, con el fin de evitar vapores, humos, químicos volátiles, residuos biológicos, etc. Se requieren tapabocas o mascarillas que cubran las vías respiratorias con filtros de acuerdo con el riesgo de exposición al que será sometido el trabajador

          .py-3.py-md-4(titulo="Protección cuerpo")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-prot-cuerpo-tema1.png', alt='Texto que describa la imagen').img-pestanas1-tema1
                  //figcaption Leyenda de la imagen
              .col-md-6.txt-pestanas1-tema1
                h4 Protección cuerpo
                p La ropa de protección cubre el cuerpo y las extremidades de los trabajadores, está diseñada con el fin de evitar riesgos que puedan afectar al trabajador. Es importante reconocer que de acuerdo con la finalidad de la prenda se deberán verificar los riesgos, pues un cordón podrá afectar al trabajador si se atora en un lugar no adecuado. 

    
          .py-3.py-md-4(titulo="Protección auditiva")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-prot-audit-tema1.svg', alt='Texto que describa la imagen').imgfinal-pestanas1-tema1
                  //figcaption Leyenda de la imagen
              .col-md-6.txt-pestanas1-tema1
                h4 Protección auditiva
                p Se deben usar elementos de protección auditiva si se encuentra expuesto a ruidos, dependiendo del nivel de exposición se podrá usar un tapón o un protector completo de orejas.


          .py-3.py-md-4(titulo="Arnés ")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-arnes-tema1.svg', alt='Texto que describa la imagen').imgfinal-pestanas1-tema1
                  //figcaption Leyenda de la imagen
              .col-md-6.txt-pestanas1-tema1
                h4 Arnés 
                p El arnés es un elemento fundamental cuando se requiere que el trabajador realice operaciones en alturas o profundidades.

    br
    br
    br

    .row.container.justify-content-around.align-items-center.tarjeta.fondo-tipos-erp.p-4

        .titulo-segundo.color-primario
          h2 Tipos de EPP

        .row

          .col-lg-5
              figure
                img(data-aos="fade-left")(src='@/assets/curso/temas/img-tipos-erp.png', alt='Texto que describa la imagen').img-tipos-erp
        
          .col-lg-7.txt-tipos-erp
              p Para aprender más sobre los tipos de EPP, lo invitamos a revisar el siguiente blog. 
              p Tipos de EPP (Equipos de Protección Personal). (2022, abril 18). Grupo Casa Lima. 
              
              a.boton.boton--b(href="https://grupocasalima.com/es-ec/blog/tipos-de-equipos-de-proteccion-personal-epp/" target="_blank")
                  span Descargar 
                  i.fas.fa-puzzle-piece

    br
    br
    br

    .row.container.justify-content-around.align-items-center
        
        .row(data-aos="fade-left").cuadro-color-inf-tipos-erp.p-4
          .col-lg-12
              p Después de revisar el tema de los elementos de protección personal lo invitamos a revisar la siguiente información donde se identifica la diferencia de los EPP y la dotación que se le entrega a los empleados.

    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .tarjeta.fondo-linea-tiempo-tema1.p-4

          p Es muy importante poder reconocer los EPP y la dotación, a continuación se les indicará cómo poder diferenciarlos.

          LineaTiempoC.color-acento-contenido(text-small)

            .row(titulo="Estándares EPP")
              
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img1-line-tiempo-tema1.png', alt='Texto que describa la imagen').img-linea-tiempo-tema1
                  //figcaption Leyenda de la imagen
              
              .col-md-6.mb-4.mb-md-0.txt-linea-tiempo-tema1
                p El empleador deberá garantizar que los EPP entregados a sus trabajadores cumplan con los estándares de calidad y técnicos según el perfil que desempeñe en la organización cada trabajador.
            

            .row(titulo="Verificar funcionalidad")
              
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img2-line-tiempo-tema1.png', alt='Texto que describa la imagen').img-linea-tiempo-tema1
                  //figcaption Leyenda de la imagen
              
              .col-md-6.mb-4.mb-md-0.txt-linea-tiempo-tema1
                p El trabajador, a su vez, deberá verificar su funcionalidad, reconocer las fallas y anomalías que se presenten en los EPP con el fin de reportarlos y solicitar su reemplazo. 
            

            .row(titulo="Dotación - EPP")
            
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img3-line-tiempo-tema1.png', alt='Texto que describa la imagen').img-linea-tiempo-tema1
                  //figcaption Leyenda de la imagen
              
              .col-md-6.mb-4.mb-md-0.txt-linea-tiempo-tema1
                p Es importante reconocer la diferencia entre la dotación y los EPP.
           

            .row(titulo="Dotación")
              
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img4-line-tiempo-tema1.png', alt='Texto que describa la imagen').img-linea-tiempo-tema1
                  //figcaption Leyenda de la imagen
              .col-md-6.mb-4.mb-md-0.txt-linea-tiempo-tema1
                p La dotación no corresponde a los EPP. La ley indica que la dotación corresponde a calzado y ropa de trabajo, lo cual puede coincidir con los EPP, pero de manera parcial.
            
            .row(titulo="Uso de los EPP")
              
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img5-line-tiempo-tema1.png', alt='Texto que describa la imagen').img-linea-tiempo-tema1
                  //figcaption Leyenda de la imagen

              .col-md-6.mb-4.mb-md-0.txt-linea-tiempo-tema1
                p También se debe recalcar la importancia del correcto uso de los EPP, pues, una vez el empleador entregue a su trabajador los EPP, este deberá utilizarlos sin falta.
            
            .row(titulo="Llamado de atención")
              
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img6-line-tiempo-tema1.png', alt='Texto que describa la imagen').img-linea-tiempo-tema1
                  //figcaption Leyenda de la imagen

              .col-md-6.mb-4.mb-md-0.txt-linea-tiempo-tema1
                p El empleador tendrá el derecho de exigir su uso y si es el caso generar llamados de atención por no cumplir con el reglamento interno de trabajo, recuerde que el no uso de los EPP podrá considerarse como una falta grave.
    br        
    br        
    br

    .row.container.justify-content-around.align-items-center

        .row(data-aos="fade-left").tarjeta-color-anexo-tema1.tarjeta.p-4
          .col-lg-2
              img(src="@/assets/template/icono-pdf.svg").img-pdf-tema1

          .col-lg-8
            h4.text-white Manual sobre las especificaciones técnicas de los EPP y su gestión integral 
            p.text-white Le invitamos a consultar el siguiente enlace del Ministerio de Salud para conocer el manual en mención:
            p.text-white Ministerio de Salud y Protección social. (2021). Gestión integral de los Elementos de Protección Personal (EPP). [Documento Soporte] 

          .col-lg-2.boton-anexo-tema1
              a.boton.boton--b(href="https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf" target="_blank")
                span Descargar
                i.fas.fa-puzzle-piece
    br
    br
    br

    .row.container.justify-content-around.align-items-center

      .row(data-aos="fade-right").tarjeta-color-anexo-tema1.tarjeta.p-4
        .col-lg-2
            img(src="@/assets/template/icono-pdf.svg").img-pdf-tema1

        .col-lg-8
          h4.text-white Estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST
          p.text-white Para conocer sobre dichos estándares consulte la Resolución 0312 de febrero de 2019, en el siguiente enlace del Ministerio del Trabajo. 

        .col-lg-2.boton-anexo-tema1
            a.boton.boton--b(href="https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf" target="_blank")
              span Descargar
              i.fas.fa-puzzle-piece
    br
    br
    br

    .row.container.justify-content-around.align-items-center
        
        .row.cajon-final-dot-tema1.p-4
          .col-lg-12
              p Después de revisar la diferencia que hay entre la dotación y los elementos de protección personal, lo invitamos a revisar el siguiente tema sobre la prevención, evaluación y objetivos del sistema de riesgos laborales.


    br
    br
    br

    .row.container.justify-content-around.align-items-center

      p A continuación se describe la prevención, evaluación y objetivos del sistema de riesgos laborales.

      .bg--img_03
          .row.justify-content-center.mb-4
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/img-acordeon-tema1.png", alt="alt").img400.m-auto
            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo-acord-tema1")

                .row(titulo="Marco legal para el SG-SST")
                  .col-12.txt-acord-tema1
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | Decreto 1607/2002
                      li 
                        i.lista-ul__vineta
                        | Decreto 1072/2015
                      li 
                        i.lista-ul__vineta
                        | Resolución 4502/2012
                      li 
                        i.lista-ul__vineta
                        | Decreto 1295/1994
                      li 
                        i.lista-ul__vineta
                        | Decreto 2090/2003
                      li 
                        i.lista-ul__vineta
                        | Ley 1150/2007
                      li 
                        i.lista-ul__vineta
                        | Decreto 2090 de 2003
                      li 
                        i.lista-ul__vineta
                        | Resolución 2013/1986 

                .row(titulo="Matriz legal")
                  .col-12
                    p.txt-acord-tema1.mb-0 Dichas normas permiten a las empresas crear su matriz legal conforme a los parámetros establecidos para cada fin, se debe recordar que, por la finalidad de cada empresa, no todas las normas aplican, así que se deben realizar ajustes según corresponda.

                .row(titulo="Prevención de los Riesgos Laborales")
                  .col-12
                    p.txt-acord-tema1.mb-0 La prevención de los Riesgos Laborales en Colombia permite tener un conjunto de medidas que permiten minimizar los accidentes, lesiones, enfermedades o patologías en los trabajadores como consecuencia al trabajo que desempeñan. 

                .row(titulo="Evaluación de riesgo")
                  .col-12
                    p.txt-acord-tema1.mb-0 La prevención de riesgos laborales en las compañías deberá realizar una evaluación de riesgos según el puesto de trabajo, para Colombia, la legislación que regula todo lo referentes a los riesgos laborales está establecido en la Ley 1562 de 2012, donde se define el Sistema General de Riesgos Laborales.
                
                .row(titulo="Objetivos del Sistema General de Riesgos Laborales")
                  .col-12
              
                    ul.lista-ul.txt-acord-tema1
                      li 
                        i.lista-ul__vineta
                        | Determinar las actividades encaminadas a lograr mejoras en las condiciones de trabajo y salud de los trabajadores, protegiéndose de riesgos físicos, químicos, biológicos, biomecánicos, psicosociales, etc.
                      li 
                        i.lista-ul__vineta
                        | Establecer las prestaciones de atención de la salud y económicas derivadas frente a accidentes y enfermedades laborales.
                      li 
                        i.lista-ul__vineta
                        | Identificar y costear las prestaciones económicas a los afiliados.
                      li 
                        i.lista-ul__vineta
                        | Reforzar las acciones encaminadas a determinar el origen de los accidentes y enfermedades laborales.
                     
    br             
    br             
    br
    .row.container.justify-content-around.align-items-center

      .row(data-aos="fade-left").tarjeta-color2-anexo-tema1.tarjeta.p-4
        .col-lg-2
            img(src="@/assets/template/icono-pdf.svg").img-pdf-tema1

        .col-lg-8
          h4.text-white Marco Legal
          p.text-white Para conocer la Ley 1562 de 2012, por favor, revise el siguiente anexo. 
            br
            | Ministerio de Salud y Protección Social (2012). Ley 1562 de 2012, “Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional”. 

        .col-lg-2.boton-anexo-tema1
            a.boton.boton--b(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf" target="_blank")
              span Descargar
              i.fas.fa-puzzle-piece 
    br              
    br              
    br

    .row.container.justify-content-around.align-items-center
        .cajon.color-primario.p-4
          .row
            .col-lg-7
              .txt-cajon-color-tema1
                p Así, todo plan de prevención deberá contener:
                ul.lista-ol
                  li 
                    span.text-bold 1. 
                    | Estructura Organizacional. 
                  li 
                    span.text-bold 2.
                    | Responsabilidades
                  li 
                    span.text-bold 3.
                    | Funciones
                  li 
                    span.text-bold 4.
                    | Prácticas
                    li 
                    span.text-bold 5.
                    | Procedimientos
                    li 
                    span.text-bold 6.
                    | Procesos
                    li 
                    span.text-bold 7.
                    | Recursos necesarios
                
                p Todo lo anterior con el fin de realizar acciones preventivas en el lugar de trabajo. 
          
            .col-lg-5
                figure
                  img(src='@/assets/curso/temas/img-cajon-color-tema1.png', alt='Texto que describa la imagen').img-cajon-color-tema1
           
    br                
    br

    .row.container.justify-content-around.align-items-center

        p Indiferente al tamaño de la empresa, todas están obligadas por la ley a diseñar e implementar un plan de prevención y se debe tener en cuenta:
        
        .row 
          .col-lg-12
            l.lista-ul
              li 
                i.lista-ul__vineta
                | Naturaleza de la actividad productiva
              li 
                i.lista-ul__vineta
                | Factores de riesgo recurrentes
              li 
                i.lista-ul__vineta
                | Estructura Organizacional
    br    
    br    
    br

    .row.container.justify-content-around.align-items-center
          
        .row 
          .col-lg-12
              .titulo-sexto.color-secundario.mb-3
                h5 Figura 2.
                span <em>Factores clave a la hora de realizar un plan de prevención</em>
          
          

              figure
                img(src='@/assets/curso/temas/img-factores-prevencion-tema1.png', alt='Texto que describa la imagen').img-factores-prevencion-tema1
           
    br                
    br
    br

    
    .row.container.justify-content-around.align-items-center

      .row.container 
        .col-lg-7
            .cuadro-color-plan-accion
            p.txt-plan-acc La anterior imagen indica que cada organización deberá diseñar su plan de acción “a medida”, dado que se deben tener en cuenta todos los parámetros que afectan las actividades laborales en cada cargo, es decir, no existirá un plan de acción general que permita ser utilizado por empresas con fines similares; se deben contemplar todos los parámetros que se ven involucrados en cada puesto de trabajo para generar un plan de acción que permita cubrir las necesidades de la empresa y, por tanto, no servirán plantillas ni prototipos.

        .col-lg-5
            
            figure
                img(src='@/assets/curso/temas/img-plan-acc.png', alt='Texto que describa la imagen').img-plan-acc
           

    br
    br
    br

    .row.container.justify-content-around.align-items-center
        
        h3 Elementos del plan de prevención

        p Los elementos que debe contener el plan de prevención y protección son:

        .row.bloque-pto-caliente-tema1

          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/img-pto-caliente-tema1.png', alt='Texto que describa la imagen')
                //figcaption Leyenda de la imagen

            .tarjeta.tarj-pto-caliente-tema1.p-3(x="7%" y="80%" numero="1")
              .h5.mb-2 Identificación de la organización
              p Se debe enfocar en el conocimiento general de la organización, sedes, trabajadores, etc., todo enfocado en la prevención de riesgos laborales. 

            .tarjeta.tarj-pto-caliente-tema1.p-3(x="28%" y="15%" numero="2")
              .h5.mb-2 Estructura organizacional
              p En relación con la prevención de riesgos laborales, se debe tener presente toda la estructura jerárquica organizacional y su conducto regular. 

            .tarjeta.tarj-pto-caliente-tema1.p-3(x="50%" y="80%" numero="3")
              .h5.mb-2 Organización de la producción
              p Se identifican todos los procesos organizacionales apuntando a la prevención de riesgos laborales.
          
            .tarjeta.tarj-pto-caliente-tema1.p-3(x="71%" y="15%" numero="4")
              .h5.mb-2 Organizar la Prevención
              p Se especifica la “modalidad preventiva” que se seleccionó por parte de la empresa y, a su vez, los órganos de representación. 
      
            .tarjeta.tarj-pto-caliente-tema1.p-3(x="92%" y="80%" numero="5")
              .h5.mb-2 Política organizacional
              p Políticas y metas trazadas en función del cumplimiento de la prevención de riesgos laborales, se deben incluir los recursos humanos, técnicos y materiales y económicos que se tendrán a disposición en el programa de prevención de riesgos.            

    br
    br
    br

    .row.container.justify-content-around.align-items-center
        
        h3  EVALUACIÓN DE RIESGOS
        
        p La aplicación del plan de acción requiere de dos instrumentos fundamentales que son: la Evaluación de Riesgos Laborales y la Planificación de la Actividad Preventiva, ambos permitirán poner en marcha el plan de acción y garantizar su funcionamiento dentro de la organización. 

        .row 
            .col-lg-10
            
                .titulo-sexto.color-secundario.mb-3
                  h5 Figura 3.
                  span <em>Aplicación del Plan de Prevención</em>
                figure
                  img(src='@/assets/curso/temas/img-aplic-pnal-tema1.png', alt='Texto que describa la imagen').img-aplic-pnal-tema1
          

    br            
    br            
    br

    .row.container.justify-content-around.align-items-center 
        
        .row 
          .col-lg-10
              .cuadro-color-final-tema1
              p.txt-final-tema1 Es necesario recordar que, a pesar de todas las medidas de prevención y protección que la empresa pueda implementar, si usted no hace uso adecuado de los EPP y no cumple con las políticas establecidas en el Plan de Prevención, podrá sufrir accidentes graves que pueden lesionarlo físicamente y causarle graves consecuencias. Se debe tener empatía organizacional: si obtengo un puesto de trabajo y se requiere cumplir con su normativa, debo estar en la condición física y mental de llevarlas a cabo, pues, como se ha mencionado en varias ocasiones en este componente formativo, las lesiones caerán directamente sobre usted como trabajador, dado que es quien está desempeñando las actividades para las cuales fue contratado, no le resta nada usar correctamente los EPP y cumplir con el plan de Prevención con el fin de garantizar la minimización de riesgos laborales. 


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
