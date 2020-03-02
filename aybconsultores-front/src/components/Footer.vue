<template>
  <footer class="footer-area">
      <!-- Main Footer Area -->
      <div class="main-footer-area">
          <div class="container">
              <div class="row">

                  <!-- Footer Widget Area -->
                  <div class="col-12 col-sm-6 col-lg-4">
                      <div class="footer-widget-area mt-80">
                          <!-- Footer Logo -->
                          <div class="footer-logo">
                              <!-- <a href="index.html"><img src="img/core-img/logo.png" alt=""></a> -->
                              <b class="logo">A&B Consultores Corporativos</b>
                          </div>
                          <!-- List -->
                          <ul class="list">
                              <li>
                                  <a href="https://www.google.com/maps/place/Calle+Schell+644,+Miraflores+15047/@-12.1237653,-77.0273789,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c81b9b76c8fb:0x1b75514ce50209c9!8m2!3d-12.1237653!4d-77.0251902">Calle Schell 644 Int. 122, Miraflores, Lima, Perú.</a>
                              </li>
                              <li><a href="mailto:informes@aybconsultores.pe" target="_blank">informes@aybconsultores.pe </a></li>
                              <li><a href="tel:+51016048147">+51 (01) 604-8147 </a></li>
                              <li><a href="tel:+51016048168">+51 (01) 604-8168 </a></li>
                              <li><a href="https://aybconsultores.github.io/web/">www.aybconsultores.pe</a></li>
                          </ul>
                      </div>
                  </div>

                  <!-- Footer Widget Area -->
                  <div class="col-12 col-sm-6 col-lg-6">
                      <div class="footer-widget-area mt-80">
                          <!-- Title -->
                          <h4 class="widget-title">Enlaces de interés</h4>
                          <!-- List -->
                          <ul class="list">
                              <li><a href="https://www.gob.pe/mef" target="_blank">Ministerio de Economía</a></li>
                              <li><a href="http://www.sunat.gob.pe/" target="_blank">Sunat</a></li>
                              <li><a href="https://www.sbs.gob.pe/" target="_blank">Superintendencia de Banca y Seguros</a></li>
                          </ul>
                      </div>
                  </div>

                  <!--
                  <div class="col-12 col-sm-4 col-lg-2">
                      <div class="footer-widget-area mt-80">
                      </div>
                  </div>
                  <div class="col-12 col-sm-4 col-lg-2">
                      <div class="footer-widget-area mt-80">
                      </div>
                  </div>
                  -->

                  <!-- Footer Widget Area -->
                  <div class="col-12 col-sm-4 col-lg-2">
                    <div class="footer-widget-area mt-80">
                      <!-- Title -->
                      <h4 class="widget-title">Encuentranos en las redes</h4>
                      <!-- List -->

                      <a href="https://www.facebook.com/aybconsultorescorporativos/"><i class="fa fa-3x fa-facebook pr-3" /></a>
                      <a href="https://www.instagram.com/aybconsultorescorporativos/?hl=es"><i class="fa fa-3x fa-instagram pr-3" /></a>
                      <a href="https://www.linkedin.com/company/aybconsultorescorporativos/"><i class="fa fa-3x fa-linkedin" /></a>

                    </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Bottom Footer Area -->
      <div class="bottom-footer-area">
          <div class="container h-100">
              <div class="row h-100 align-items-center">
                  <div class="col-12">
                      <!-- Copywrite -->
                      <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright <b>A & B Consultores</b> &copy; {{ year }} Todos los derechos reservados | Diseño de <i class="fa fa-heart-o" aria-hidden="true"></i> <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                  </div>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    year: new Date().getFullYear()
  })
};
</script>
