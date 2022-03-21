<script>

</script>

<template>

<header>
  
  <nav>
    <a href="#inicio"> Inicio </a>
    <a href="#proyectos"> Proyectos </a>
    <a href="#fotos"> Fotos </a>
    <a href="#contacto"> Contacto </a>
  </nav>
  
</header>

</template>

<style scoped>

a {
  color: #120a1f;
  text-decoration: none;
}

header {
  border-bottom: #120a1f solid 1px;

}

nav {
  padding: 1rem;
  display: none;
}

@media (min-width: 640px) {
  nav {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    margin-right: 2rem;

  }
}

</style>
