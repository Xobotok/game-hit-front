<template>
  <div class="" :style="{ 'width': itemWidth}">
    <router-link  :to="link" class="simple-button" @click="clickHandler">
      <div class="button-text">{{ text }}</div>
      <div class="icon" :class="icon" v-if="icon !== ''"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "simpleButton",
  props: {
    itemWidth: {
      type: String,
      default: "auto",
    },
    link: {
      type: String,
      default: "/",
    },
    text: {
      type: String,
      default: "Button",
    },
    icon: {
      type: String,
      default: "",
    },
  },
  methods: {
    clickHandler() {
      this.$emit("clickHandler");
    },
  },
};
</script>

<style scoped>
.transparent .simple-button {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
}
.transparent .simple-button:hover {
  background: rgba(255, 255, 255, 0.1);
}
.simple-button:hover {
  background: #801dce;
  border-radius: 5px;
}
.icon {
  margin-left: 14px;
}
.simple-button {
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(274.63deg, #801dce 7.3%, #a736ff 100%), #801dce;
  padding: 24px 73px;
  border-radius: 5px;
}
</style>
