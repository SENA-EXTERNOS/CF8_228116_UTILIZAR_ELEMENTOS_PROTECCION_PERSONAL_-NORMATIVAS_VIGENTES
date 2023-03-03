<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Señalización y demarcación del área

      
    .row.container.justify-content-around.align-items-center.mb-5
        
        p La señalización y demarcación del área de trabajo es una herramienta de seguridad que permite, a través de la utilización de estímulos visuales o auditivos, condicionar un espacio de trabajo para advertir al trabajador de un posible riesgo. 

        .row(data-aos="fade-left").mb-5 
            .col-lg-10.anex-tarj1-tema4
                a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=UK_EuRWVlAQ" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                  h4 NTC
                  p Para conocer un poco más sobre la NTC 1641, lo invitamos a revisar el siguiente video.                   
                  p VisualGraf, S. A. S. (2020, febrero 16). Normas de Señalización en Colombia NTC 1461, Parte 1. YouTube. 



    .row.container.justify-content-around.align-items-center.mb-5

        .row.container.bloque-tarj2-tema4.mb-5
            .col-lg-5
              .cuadro-tarj1-color-tema4
              p.txt-cuadro-tarj1-color-tema4 La norma técnica Colombiana NTC 1641 indica cómo se deben realizar las marcaciones de los espacios según la finalidad. Andamios, tablones, accesorios, entre otros, deberán cumplirla. Además, indica cómo se deben generar los diseños en las señales implementado colores y formas, todo con el fin de prevenir los accidentes y riesgos.
              p A continuación se tiene como base la Señalización Según NTC 1461.

            .col-lg-3
                figure
                  img(src='@/assets/curso/temas/img1-tema4.png', alt='Texto que describa la imagen').img1-tema4


    .row.container.justify-content-around.align-items-center.mb-5

        TabsC.color-primario
          .py-3.py-md-4(titulo="Condición de seguridad")
            .row
              .col-md-6.mb-4.mb-md-0
              
                figure
                  img(src='@/assets/curso/temas/img-senales-segur-tema4.png', alt='Texto que describa la imagen').img-pestanas-tema4
                  //figcaption Leyenda de la imagen
              
              .col-md-6
                h4 Señales de condición de seguridad
                p Forma: rectangular
                p Color: verde
                p El color verde cubrirá por lo menos el 50% del área de la señal.
                p Proporciona información que garantice la seguridad de las personas, indicando salidas de emergencia en caso de requerirse. 
            
        

          .py-3.py-md-4(titulo="Fuego y prohibición")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-fuego-tema4.png', alt='Texto que describa la imagen').img2-pestanas-tema4
                  
              .col-md-6
                h4 Señales de fuego y prohibición
                p Forma: circular - rectangular
                p Color: rojo
                p El color rojo cubrirá por lo menos el 35% del área de la señal. 
                p Prohíbe un comportamiento que puede generar una situación de peligro. 
                
          .py-3.py-md-4(titulo="Mando u obligación")

            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-senal-mando-tema4.png', alt='Texto que describa la imagen').img-pestanas-tema4

              .col-md-6
                h4 Señales de mando u obligación
                p Forma: circular
                p Color: azul
                p El color azul cubrirá por lo menos el 50% del área de la señal. 
                p Señal que indica (obliga) un comportamiento determinado. 
          
          .py-3.py-md-4(titulo="Precaución y riesgo de peligro")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-senal-precau-tema4.png', alt='Texto que describa la imagen').img-pestanas-tema4

              .col-md-6
                h4 Señales de precaución y riesgo de peligro
                p Forma: triangular
                p Color: amarillo
                p El color amarillo cubrirá por lo menos el 50% del área de la señal.

    .row.container.justify-content-around.align-items-center.mb-5

        p Por seguridad, planificación, cuidado, almacenamiento y distribución de los espacios, todas las máquinas, equipos, zonas de circulación, etc., deberán ser demarcados. 

        .row.container.mb-5
            
            .col-lg-6

              figure
                img(src='@/assets/curso/temas/img-esp-demarc-tema4.png', alt='Texto que describa la imagen').img-esp-demarc-tema4
            
            .col-lg-6
              .cuadro-color-esp-demarc-tema4
              p.texto-cuadro-color-esp-demarc-tema4 Se debe demarcar cuando:

              ul.lista-ul.texto-cuadro-color-esp-demarc-tema4
                li 
                  i.lista-ul__vineta
                  | No se puede eliminar el riesgo. 
                li 
                  i.lista-ul__vineta
                  | No se pueden implementar sistemas de protección. 
                li 
                  i.lista-ul__vineta
                  | Complemento para otro sistema de seguridad implementado.
            .hr



    .row.container.justify-content-around.align-items-center

        .row 
          .col-lg-11.bloque-cita-tema4
            .bloque-texto-f.pt-4.px-5.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              h4.text-regular.bloque-texto-f__texto La Ley dice: 
                br
                |
                p Todos los establecimientos de trabajo donde se lleven a cabo operaciones y/o procesos que integren aparatos, máquinas, equipos, ductos, tuberías etc. y demás instalaciones locativas necesarias para su funcionamiento” (Resolución 2400 de 1979) deberán “delimitar o demarcar las áreas de trabajo, zonas de almacenamiento, vías de circulación y salidas de emergencia, resguardos y zonas peligrosas de las máquinas e instalaciones de acuerdo a las disposiciones legales vigentes. (Resolución 1016 de 1989, Articulo 11, numeral 17)
  
    .row.container.justify-content-around.align-items-center.mb-5

        .row 
          .col-lg-12
            .titulo-sexto.titulo-figuras.mb-3
                h5 Tabla 1. 
                span <em>Medidas de demarcación según normativa</em>  
            
            figure
                img(src='@/assets/curso/temas/img-tabla-medid-demarcacion-tema4.png', alt='Texto que describa la imagen').img-tabla-medid-demarcacion-tema4
           
          p A continuación, se nombran las zonas que son de peligro y las zonas que indican prohibido parar con su respectivo color que las identifica.               



    .row.container.justify-content-around.align-items-center.mb-5

        h2 Colores de marcación según normativa

        TabsC.color-primario
          .py-3.py-md-4(titulo="Precaución, zona de peligro (amarillo)")
            .row
              
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-precau-tema4.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

              .col-md-6.mb-4.mb-md-0
                h4 Precaución, zona de peligro (amarillo)

                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Zonas Peligrosas con color de fondo en avisos que indiquen precaución. 
                  li 
                    i.lista-ul__vineta
                    p Equipos de construcción como <em>bulldozers</em>, tractores, etc., esquinas de lugares de almacenamiento, bordes expuestos y sin guardas, de plataformas, aberturas en el piso y muros, aditamentos suspendidos del techo o de los muros que sobresalgan del espacio normal de operación; pasamanos, barandas y partes superiores e inferiores de escaleras fijas peligrosas, bloques de poleas y diferencias, proyecciones, puertas bajas, vigas, tuberías que cruzan a bajo nivel en los sitios bajos, armazones bajos o puertas de levadores, grúas de taller y equipos utilizados para transporte y movilización de materiales como mulas (montacargas), remolques, carretillas de todo tipo, transporte de todo tipo, etc.; pilares, postes o columnas que puedan ser golpeados, demarcación de áreas de trabajo y almacenamiento (franjas de cinco centímetros de ancho), demarcación de áreas libres frente a equipos contra incendios (semicírculo de cincuenta centímetros de radio y franja de cinco centímetros de ancho).


          
          .py-3.py-md-4(titulo="Prohibido, parada (rojo)")
            .row

              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-liq-inflama-tema4.png', alt='Texto que describa la imagen').img2-colores-marca
                  //figcaption Leyenda de la imagen

              .col-md-6
                h4 Prohibido, parada (rojo)
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Elementos y equipos de protección contra el fuego como extinguidores, hidrantes y tuberías de alimentación, cajas para mangueras, baldes, recipientes que contengan arena, agua, alarma y cajas accionadoras de las mismas, puertas y escaleras de escape. 
                  li 
                    i.lista-ul__vineta
                    | Recipientes comunes y de seguridad para almacenar toda clase de líquidos inflamables con indicación de su contenido. 
                  li 
                    i.lista-ul__vineta
                    | Barras o dispositivos que accionan mecanismos de parada de máquinas peligrosas y botones de paradas de controles eléctricos.



          .py-3.py-md-4(titulo="Obligación, información (Rojo)")
            .row
            
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-rojo-inf-tema4.png', alt='Texto que describa la imagen').img-colores-marca
                  //figcaption Leyenda de la imagen
              .col-md-6
                h4 Obligación, información (Rojo)
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Indica prevención. 
                  li 
                    i.lista-ul__vineta
                    | Color de fondo en avisos utilizados para señalar maquinaria y equipos sometidos a reparación, mantenimiento o que se encuentren fuera de servicio. 
                  li 
                    i.lista-ul__vineta
                    | Señalar controles o fuentes de poder de maquinaria o equipo (elevadores, hornos, tanques, calderas, digestores, controles eléctricos, secadores, válvulas,  bóvedas, escaleras, andamios, etc.) que no deba ser accionado u operado sin previa constatación de que se encuentra en perfectas condiciones de servicio a fin de no causar daño a algún elemento o lesión a un operario. 
                  li 
                    i.lista-ul__vineta
                    | Recipientes para lubricantes, motores que no formen parte integral de maquinaria y equipo; cajas de sistemas eléctricos.


          
          .py-3.py-md-4(titulo="Seguridad, primeros auxilios (verde esmeralda)")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-prim-esmer-tema4.png', alt='Texto que describa la imagen').img2-colores-marca
                  //figcaption Leyenda de la imagen
              .col-md-6
                h4 Seguridad, primeros auxilios (verde esmeralda)
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Seguridad, equipos de primeros auxilios, botiquines, camillas, máscaras contra gases, fondo de carteleras de seguridad e instrucciones de seguridad, etc. 
                  li 
                    i.lista-ul__vineta
                    | Contorno del botón de arranque en los controles eléctricos de las máquinas.


          .py-3.py-md-4(titulo="Seguridad, primeros auxilios. ( verde limonado)")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-prim-aux-tema4.png', alt='Texto que describa la imagen').img-colores-marca
                  //figcaption Leyenda de la imagen
              .col-md-6
                h4 Seguridad, primeros auxilios. ( verde limonado)
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Bancos de madera, exceptuando las tapas.

          
          .py-3.py-md-4(titulo="Seguridad, primeros auxilios. (Verde pálido)")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/img-segur-prim-tema4.png', alt='Texto que describa la imagen').img-colores-marca
                  //figcaption Leyenda de la imagen
              .col-md-6
                h4 Seguridad, primeros auxilios. (Verde pálido)
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | El cuerpo de maquinaria y equipo. 
                  li 
                    i.lista-ul__vineta
                    | Partes fijas de maquinaria y equipo, parte exterior de guardas y protecciones integrales y adicionales, bancos metálicos, partes metálicas, silletería de taller, prensas de banco y articuladas, gatos portátiles y de carretilla, motores eléctricos que formen parte integral de la maquinaria. 
                  li 
                    i.lista-ul__vineta
                    | Soportes para materiales (perfiles, platinas, tubería, etc.) Soportes para ejercicios, soportes para cilindros, mangueras de portaelectrodos.



    .row.container.justify-content-around.align-items-center.mb-5
        
        h2 Colores de los indicativos luminosos

        p A continuación se describen las señales de acuerdo con su clasificación de colores.

        .row
            .col-lg-12

                .titulo-sexto.color-secundario.mb-3
                  h5 #[strong  Figura 3:]
                  span <em>Señales y sus colores</em>
                figure
                  img(src='@/assets/curso/temas/img-col-normativos-tema4.png', alt='Texto que describa la imagen').img-col-normativos-tema4
        
        .row.carr-tarj-tema4.mb-5
            .col-lg-12   
        
                SlyderF(columnas="col-lg-6 col-xl-4").mb-5

                  .tarjeta.tarj-col-marca-tema4.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img-anomalia-amar-tema4.png' alt='AvatarTop')
                    h3.text-center Anomalía Advertencia (Amarillo)
                    p.text-center Presión / Temperatura excede límites de control. 
                      br
                      | Pérdida de características de los dispositivos de protección.

                  .tarjeta.tarj-col-marca-tema4.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img-emerge-rojo-tema4.png' alt='AvatarTop')
                    h3.text-center Emergencia (rojo)
                    p.text-center Avería.
                      br
                      | Caída de tensión. 
                      br
                      | Presión / Temperatura fuera de límite.

                  .tarjeta.tarj-col-marca-tema4.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img-mandato-azul-tema4.png' alt='AvatarTop')
                    h3.text-center Mandato (Azul)
                    p.text-center Instrucción para introducir valores preseleccionados. 

                  .tarjeta.tarj-col-marca-tema4.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img-normal-verde-tema4.png' alt='AvatarTop')
                    h3.text-center Normal (verde)
                    p.text-center Autorización para proceder. Presión / Temperatura dentro de los límites.



    .row.container.justify-content-around.align-items-center.mb-5
        
        h2 Identificación de tuberías según Norma ASA
        
        p Las tuberías también deberán ser marcadas según la norma establecida por ASA #[i (American Standards Association)] teniendo en cuenta la siguiente clasificación: 

        .tarjeta.tarjeta--azul.p-4.mb-5

            SlyderA(tipo="b")

              .row.justify-content-center.align-items-center.my-lg-4
                .col-md-6.mb-4.mb-md-0
                  .txt-slider-tema4
                    h4 Color: naranja
                    p Tuberías sin aislar que conduzcan vapor a cualquier temperatura, tuberías que conduzcan ACPM, #[I fueloil], gasolina, petróleo, combustible en general, tuberías de escape de gases de combustión, cilindros de tuberías de acetileno, tubería que conduzca gas carbónico. 
                
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img1-slider-tema4.png', alt='Texto que describa la imagen')
                    //figcaption Leyenda de la imagen

              .row.justify-content-center.align-items-center.my-lg-4
                
                .col-md-6.mb-4.mb-md-0
                  .txt-slider-tema4
                    h4 Color: amarillo
                    p Aire comprimido, tuberías que conduzcan amoniaco, soluciones alcalinas o ácidas. Estas tuberías tendrán distintivos para identificar fluidos.

                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img2-slider-tema4.png', alt='Texto que describa la imagen')
                    //figcaption Leyenda de la imagen

              
              .row.justify-content-center.align-items-center.my-lg-4
                
                .col-md-6.mb-4.mb-md-0
                  .txt-slider-tema4
                    h4 Color: blanco
                    p Tuberías que conduzcan refrigerantes y partes varias de los sistemas de refrigeración, tuberías de vacío y partes del sistema de vacío.

                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img3-blanco-slider.tema4.png', alt='Texto que describa la imagen')
                    //figcaption Leyenda de la imagen

              .row.justify-content-center.align-items-center.my-lg-4
                
                .col-md-6.mb-4.mb-md-0
                  .txt-slider-tema4
                    h4 Color: azul
                    p Tuberías de aceite y sistemas de lubricación, tuberías de oxígeno y cilindros de oxígeno, conductos y bajantes de agua lluvia, tuberías que conduzcan agua de pozos profundos.

                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img3-slider-tema4.png', alt='Texto que describa la imagen')
                    //figcaption Leyenda de la imagen

              .row.justify-content-center.align-items-center.my-lg-4
                
                .col-md-6.mb-4.mb-md-0
                  .txt-slider-tema4
                    h4 Color: verde
                    p Tuberías y ductos para materiales granulados, etc. Seguros y para las mangueras de oxígeno en los equipos de soldadura oxiacetilénica.

                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img4-slider-tema4.png', alt='Texto que describa la imagen')
                    //figcaption Leyenda de la imagen


              .row.justify-content-center.align-items-center.my-lg-4
                
                .col-md-6.mb-4.mb-md-0
                  .txt-slider-tema4
                    h4 Color: gris
                    p Tuberías de agua fría, tuberías de agua caliente con franjas de color naranja de dos pulgadas de ancho, espaciadas un metro entre sí, ductos y partes varias de sistemas de ventilación y extracción de gases, humos, neblinas, etc.

                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img5-slider-tema4.png', alt='Texto que describa la imagen')
                    //figcaption Leyenda de la imagen
              
              .row.justify-content-center.align-items-center.my-lg-4
                
                .col-md-6.mb-4.mb-md-0
                  .txt-slider-tema4
                    h4 Color: café
                    p Tuberías del condensado del vapor.

                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img6-slider-tema4.png', alt='Texto que describa la imagen')
                    //figcaption Leyenda de la imagen


    .row.container.justify-content-around.align-items-center.mb-5

        .row.cuadro-color-final-tema4.p-4    
          .col-lg-12
              p Es importante que la empresa demarque los recorridos o rutas de evacuación, siempre se deberá indicar las salidas que garanticen la puesta a salvo del trabajador, solamente no se tendrá en cuenta esta indicación si: 
              
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | El lugar es menor a 50 m2.
                li 
                  i.lista-ul__vineta
                  | Corresponde a una salida visible desde cualquier punto de vista en el lugar. 
                li 
                  i.lista-ul__vineta
                  | Todas las personas que se encuentran adentro están familiarizados con el edificio. 



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
