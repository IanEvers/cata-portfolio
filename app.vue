<template>

  <div>

    <Header />

    <div>
    
      <section id="home">
        
        <div class="nombreYFoto">
          <div>
            <h1> Catalina Rohde </h1>
            <h2> Hace cine</h2>
          </div>
          <div class="flex-center">
            <img src="/cata.jpeg" alt="" class="imagenCata">
          </div>
        </div>

        <p>
          En el transcurso de los dos años de carrera tuve la
          oportunidad de realizar el montaje de un corto, tomar
          el rol de cámara durante la pandemia desde mi casa en
          otro y recientemente realice la producción de un corto
          de cinco minutos como trabajo final de la materia
          Proyecto Audiovisual I. Aparte de la facultad edito reels
          para actores y videos de quince. 
        </p>
      </section>

      <section id="proyectos">
        <h1 class="titulo"> Proyectos </h1>
      </section>

      <section id="fotos">
        <h1 class="titulo"> Fotos </h1>
      </section>

      <section id="contacto">
        <h1 class="titulo"> Contacto </h1>
      </section>

    </div>

    <a href="#home" class="backTop"> Inicio </a>

  </div>
</template>

<script>

import Header from "./components/Header.vue";
export default {
  name: "IndexPage",
  components: { Header },
}
</script>

<style>

/* html,body,div,span,applet,object,iframe,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,label,legend,p,blockquote,table,caption,tbody,tfoot,thead,tr,th,td{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;}body{line-height:1;color:black;background:white;}:focus{outline:0;}table{border-collapse:collapse;border-spacing:0;}caption,th,td{text-align:left;font-weight:normal;}fieldset,img{border:0;}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal;}ol,ul{list-style:none;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}blockquote:before,blockquote:after,q:before,q:after{content:"";}blockquote,q{quotes:"" "";}abbr,acronym{border:0;} */

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('assets/fonts/Montserrat-VariableFont_wght.ttf') format('truetype');
}

html {
  scroll-behavior:smooth
}

body {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.2;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.backTop {
  position: sticky;
  bottom: 20px;      
  margin-right:30px; 
  left: 85vw;
  margin-top: calc(100vh + 100px);
  
  /* visual styling */
  text-decoration: none;
  padding: 15px;
  font-family: sans-serif;
  color: #fff;
  background: #000;
  border-radius: 100px;
  white-space: nowrap;
}

section {
  min-height: 100vh;
  padding: 1rem;
  max-width: 1024px;
  margin: auto;
}

.titulo {
  text-align: center;
}

.imagenCata {  
  margin: 1rem;
  max-width: 100vw;
}

p {
  font-size: 1rem;
  line-height: 1.4;
}

h1 {
  font-size: 2rem;
  margin: 0;
  padding: 0.3rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 200;
  margin: 0;
  padding: 0.3rem;
}

@media (min-width: 640px) {
  .nombreYFoto {
    display: flex;
    justify-content: space-between;
  }

  .imagenCata {  
    max-width: 256px;
    margin: 0.5rem;
  }

  section {
    padding: 2rem;
  }

}


</style>
