<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Líneas de vida

    
    .row.container.justify-content-around.align-items-center 

        p Las líneas de vida son sistemas que protegen contra la caída, deben contar con certificación y ser homologadas según el uso final, pueden ser permanentes o temporales.
        
        p Se deberán emplear a partir de los 2 metros de altura del suelo. Deben proteger accesos, puentes grúa, cargaderos, silos, cubiertos y demás.
        
        .bg--img_03
          .row.justify-content-center.mb-4
               
            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
                .row(titulo="Cables y eslingas")
                  .col-12
                    p.txt-acord-tema3.mb-0 El uso de líneas de vida cables y eslingas minimizan los riesgos de caídas cuando se realizan trabajos en altura, pero dependerá de cada persona su correcto uso. Recuerde que su vida dependerá en cierta medida del uso adecuado de los sistemas de protección.  

                .row(titulo="Líneas de vida")
                  .col-12
                    p.txt-acord-tema3.mb-0 Las líneas de vida garantizan que el trabajador pueda desplazarse con seguridad al realizar su trabajo. Deben contar con absorbedores de energía para reducir el impacto en caso de caída. Cada trabajo en alturas requiere de un equipo adecuado para tal fin, el empleador deberá garantizar que entrega a su trabajador el equipo correcto de acuerdo con las tareas que vaya a desarrollar. 

                .row(titulo="Instalación de las líneas de vida")
                  .col-12
                    p.txt-acord-tema3.mb-0 Las líneas de vida solo deben ser instaladas por personal capacitado que garantice su correcto funcionamiento después de su inspección, de esta manera, se garantiza el cumplimiento de la normativa y las especificaciones dadas por los fabricantes; además, a los equipos de protección y, en especial, a las líneas de vida se les debe hacer revisión y mantenimiento periódico (mínimo una vez al año) para garantizar su óptimo estado y funcionamiento.


            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/img-acord-tema3.png", alt="alt").img400.m-auto


    .row.container.justify-content-around.align-items-center

        .row(data-aos="fade-left").tarjeta-color2-anexo-tema1.tarjeta.p-4
          .col-lg-2
              img(src="@/assets/template/icono-pdf.svg").img-pdf-tema1

          .col-lg-8
            h4.text-white Tipos de líneas de vida
            p.text-white Para ampliar la información, lo invitamos a ver el Anexo 1. Tipos de líneas de vida, en el cual se detallan los diferentes tipos de líneas que existen para trabajos en altura, además, se describen los diferentes tipos de sistemas para trabajo confinado.


          .col-lg-2.boton-anexo-tema1
              a.boton.boton--b(:href="obtenerLink('/downloads/anexo1 Tipos de líneas de vida.pdf')" target="_blank")
                span Descargar
                i.fas.fa-puzzle-piece 

           



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
