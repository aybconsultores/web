<template>
  <div>
    <menu-bar />
    <slot name="body"/>
  </div>
</template>

<script>
import MenuBar from "./MenuBar";
export default {
  name: 'Layout',
  components: { MenuBar }
}
</script>
