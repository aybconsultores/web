<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Tercerizaci&oacute;n</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="System" right>
            <b-dropdown-item exact :to="{ name: 'ordenes-de-trabajo' }">Registrar WO</b-dropdown-item>
            <b-dropdown-item href="#">Dar Conformidad</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Fábrica" right>
            <b-dropdown-item exact :to="{ name: 'tareas' }">Registrar Tareas</b-dropdown-item>
            <b-dropdown-item href="#">Solicitar Conformidad</b-dropdown-item>
          </b-nav-item-dropdown>
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

    <slot name="body"/>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>
