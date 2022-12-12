<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

      
    .row.container.justify-content-around.align-items-align-items-center

        .row.color-tarj-introd
          .col-lg-12
              p.txt-tarj-introd.p-4 Bienvenido, aprendiz, al recurso educativo sobre cómo utilizar elementos de protección personal según normativas vigentes, donde se describe la importancia de la identificación de los riesgos, amenazas y normatividad vigentes que regulan la actividad laboral y cómo utilizar los elementos de protección personal y colectiva para minimizar dichos riesgos. Igualmente, se mencionan los elementos de protección, su importancia, forma de uso, el cuidado que se debe tener con ellos, además se revisarán los diferentes subsistemas de protección que existen como los arneses y sus diferentes usos en los trabajos en alturas y se detallan los diferentes tipos de líneas de vida y la importancia de su correcto uso.


    br
    br
    br

    .row.container.justify-content-around.align-items-align-items-center

        .row
          .col-lg-7.txt-tarj2-introd
              p En el siguiente video podrá conocer estos contenidos de forma detallada y, adicionalmente, se explicará el tema de la señalización y demarcación del área de trabajo como las líneas de advertencia que se debe usar en los trabajos a realizar.
              p ¡Muchos éxitos en este proceso de aprendizaje! 

          .col-lg-5
              figure
                img(data-aos="fade-left")(src='@/assets/curso/temas/img-introd.png', alt='Texto que describa la imagen').img-introd
    
    br
    br
    br

    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
