<template>
  <header class="header-area">
    <!-- Top Header Area -->
    <div class="top-header-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="top-header-content d-flex align-items-center justify-content-between"
            >
              <!-- Logo -->
              <div class="logo">
                <a href="index.html"
                  ><img src="../assets/logo-mini-blanco-122x83.png" alt=""
                /></a>
              </div>

              <!-- Login Search Area -->
              <div class="login-search-area d-flex align-items-center">
                <!-- Login -->
                <div class="login d-flex">
                  <a href="#">Ingresar</a>
                  <a href="#">Registrar</a>
                </div>
                <!-- Search Form -->
                <div class="search-form">
                  <form action="#" method="post">
                    <input
                      type="search"
                      name="search"
                      class="form-control"
                      placeholder="Buscar"
                    />
                    <button type="submit">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar Area -->
    <div class="newspaper-main-menu" id="stickyMenu">
      <div class="classy-nav-container breakpoint-off">
        <div class="container">
          <b-navbar toggleable="lg">
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
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    onScroll() {
      // Any code to be executed when the window is scrolled
      const e = document.querySelector("#stickyMenu");
      const y1 = e.getBoundingClientRect().top;
      const y2 = document.querySelector(".top-header-area").getBoundingClientRect().top;

      if(Math.abs(y2) <= 100) {
        e.classList.remove("app-fixed");
      } else if(y1 <= 0) {
        e.classList.add("app-fixed");
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  }
};
</script>
