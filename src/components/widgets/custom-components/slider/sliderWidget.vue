<template>
  <div class="slider">
    <mainPageSlide :item="activeSlide" />
    <div class="control">
      <div
        class="control-item"
        v-for="item in slides"
        :key="item.id"
        :class="{ active: item === activeSlide }"
        @click="select(item)"
      />
    </div>
  </div>
</template>

<script>
import mainPageSlide from "./sliderItems/mainPageSlide.vue";

export default {
  name: "sliderWidget",
  components: { mainPageSlide },
  data() {
    return {
      activeSlide: {},
    };
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  beforeMount() {
    this.activeSlide = this.slides[0];
  },
  methods: {
    select(item) {
      this.activeSlide = item;
    },
  },
};
</script>

<style scoped>
.slider {
  padding-bottom: 171px;
  height: 800px;
}
.control {
  display: flex;
  width: 100%;
  justify-content: center;
}
.control-item.active {
  background: #ffffff;
  opacity: 0.55;
}

.control-item {
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}
</style>
