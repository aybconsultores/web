<template>
  <div id="menu-bar" >
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Example</b-navbar-brand><!-- A&B Consultores Corporativos -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item exact :to="{ name: 'noticias' }">Noticias</b-nav-item>
          <b-nav-item href="#">Usuarios</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              juanquedena@gmail.com
            </template>
            <b-dropdown-item href="#">Perfil</b-dropdown-item>
            <b-dropdown-item href="#">Cerrar Sessión</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>
