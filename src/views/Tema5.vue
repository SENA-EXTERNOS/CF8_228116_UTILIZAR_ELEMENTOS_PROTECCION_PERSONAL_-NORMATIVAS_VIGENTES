<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Líneas de advertencia
    
    .row.container.justify-content-around.align-items-center

      p A continuación, se menciona la importancia de tener bien demarcada el área de trabajo con las líneas de advertencia:

      .row 

        .tarjeta.fondo-slider-tema5.p-4
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-md-6.mb-4.mb-md-0

                  h4.txt-slider-tema5 Líneas de Advertencia
                  p.txt-slider-tema5 Las líneas de advertencia marcan el área dentro de la cual el trabajador podrá realizar sus actividades con seguridad, a través del uso de cuerdas, alambres, cadenas y puntales de soporte para crear una barrera que advierte sobre espacio seguro de trabajo, así, el trabajador puede llevar a cabo sus actividades sin contratiempo. Advierten el acercamiento a un área sin protección al borde del techo, piso u otra superficie de trabajo con riesgo de caída. 

                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img1-slider-tema5.png', alt='Texto que describa la imagen').img-slider-tema5
                  p.txt-notas-slider-tema5 Nota:https://obraconseguridad.files.wordpress.com/2015/03/20141110_102231.jpg
                    //figcaption Leyenda de la imagen

              .row.justify-content-center.align-items-center.my-lg-4
                
                .col-md-6.mb-4.mb-md-0
                  h4.txt-slider-tema5 Área en peligro
                  p.txt-slider-tema5 Las líneas de advertencias deben ser utilizadas para indicar peligro a los trabajadores e informar que para ingresar, deberá utilizar un sistema de protección de trabajo en alturas. Estas deben ser utilizadas para eliminar riesgos como caídas. Los rótulos, banderines y elementos utilizados para demarcar deberán enfatizar el peligro inminente de caída.

                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img2-slider-tema5.png', alt='Texto que describa la imagen').img-slider-tema5
                    //figcaption Leyenda de la imagen

              .row.justify-content-center.align-items-center.my-lg-4
                
                .col-md-6.mb-4.mb-md-0
                  h4.txt-slider-tema5 Marcar zonas seguras
                  p.txt-slider-tema5 Las líneas de advertencia deben estar a 3.5 m  de distancia del borde sin protección, así, se elimina el riesgo de caer para los trabajadores. Se podrán emplear las líneas de advertencia a mayor distancia si se considera necesario, factores como el clima y hasta la inexperiencia del trabajador aumentan el nivel de riesgo, por tanto, deberá considerar todas las variables a la hora de marcar las zonas seguras para el trabajo.

                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/img3-slider-tema5.png', alt='Texto que describa la imagen').img-slider-tema5
                  p.txt-notas-slider-tema5 Nota:https://i.ytimg.com/vi/qJa5iy5sW_s/maxresdefault.jpg
                    //figcaption Leyenda de la imagen

    br             
    br             
    br

    .row.container.justify-content-around.align-items-center

      
      .row(data-aos="fade-right").tarjeta-color2-anexo-tema1.tarjeta.p-4
        .col-lg-2
            img(src="@/assets/template/icono-pdf.svg").img-pdf-tema1

        .col-lg-8
          h4.text-white Líneas de advertencia
          p.text-white Para conocer un ejemplo sobre la utilización de las líneas de advertencia en el sector de la construcción, revise el siguiente material. 
          a.mb-4.mb-lg-0(href="https://osha.oregon.gov/OSHAPubs/factsheets/fs26sp.pdf" target="_blank")
            p.text-white OSHA (2022, septiembre 26) OSHA. Osha.oregon.gov. 

        .col-lg-2.boton-anexo-tema1
            a.boton.boton--b(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf" target="_blank")
              span Descargar
              i.fas.fa-puzzle-piece 
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center 
        
        .row.fondo-clases-arnes-tema2.tarjeta.p-4

            .col-lg-5
                figure
                    img(data-aos="fade-left")(src='@/assets/curso/temas/img-final-tema5.png', alt='Texto que describa la imagen').img-final-tema5
                
            .col-lg-7
                .titulo-segundo.color-primario
                  h2 Líneas de advertencia

                p Para ampliar la información, lo invitamos a ver el Anexo 2. Líneas de advertencia, en el cual se detalla la importancia que se debe tener al implementar estas líneas con otros sistemas como los siguientes para proteger la vida de los trabajadores.
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Sistema de baranda.
                  li 
                    i.lista-ul__vineta
                    | Protección contra caídas. 
                  li 
                    i.lista-ul__vineta
                    | Monitoreo de seguridad.
                  
                  a.boton.boton--b(:href="obtenerLink('/downloads/Anexo 2. Lineas de advertencia.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-puzzle-piece

    br
    br
    br

    .row.container.justify-content-around.align-items-center 
      
      .row.cuadro-color-final-tema5.p-4 
        .col-lg-12
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, como son la síntesis, la actividad didáctica, material complementario, entre otros.






                
 
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
