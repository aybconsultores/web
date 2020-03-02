<template>
  <div>
    <header-panel />
    <slot name="body"/>
    <footer-panel />
    <div v-if="false">
      <menu-bar />
    </div>
  </div>
</template>

<script>
import MenuBar from "./MenuBar";
import HeaderPanel from "./Header";
import FooterPanel from "./Footer";
export default {
  name: 'Layout',
  components: { MenuBar, HeaderPanel, FooterPanel }
}
</script>
