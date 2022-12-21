<template>
  <div class="main-layout">
    <headerWidget />
    <router-view />
    <footerWidget />
  </div>
</template>

<script>
import headerWidget from "../../src/components/widgets/custom-components/header/headerWidget.vue";
import footerWidget from "../../src/components/widgets/custom-components/footer/footerWidget.vue";
export default {
  name: "main_layout",
  components: {
    headerWidget,
    footerWidget,
  },
};
</script>

<style scoped>
.main-layout {
  background: #1b1b23;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
}
</style>
