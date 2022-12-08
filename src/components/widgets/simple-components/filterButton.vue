<template>
  <div
    class="simple-button transparent" :class="{active: active}"
    @click="clickHandler"
    :style="{ width: itemWidth }"
  >
    <div class="button-text">{{ text }}</div>
    <div class="icon" :class="icon" v-if="icon !== ''"></div>
  </div>
</template>

<script>
export default {
  name: "filterButton",
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
      this.active = !this.active;
      this.$emit("clickHandler", this.active);
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
.transparent.simple-button.active {
  background: #555560;
}
.transparent.simple-button {
  background: #27272F;
  backdrop-filter: blur(5px);
}
.transparent.simple-button:hover {
  background: #5a5a6b;
  color: white;
}
.simple-button:hover {
  border-radius: 5px;
}
.simple-button {
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 73px;
  color: rgba(255, 255, 255, 0.55);
  border-radius: 5px;
}
</style>
