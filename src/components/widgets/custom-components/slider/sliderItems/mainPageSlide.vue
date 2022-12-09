<template>
  <div
    class="slide-item"
    :style="{ 'background-image': 'url(' + item.image + ')' }">
    <div class="content">
      <div class="title">{{ item.title }}</div>
      <div class="description">{{item.description}}</div>
      <div class="buttons">
        <div class="button">
          <linkButton
            :itemWidth="'385px'"
            :text="'PLAY'"
            :link="item.link"
            :icon="'game'"
          ></linkButton>
        </div>
        <div class="button">
          <linkButton
            :link="item.link"
            :class="'transparent'"
            text="MORE INFO"
          ></linkButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import linkButton from "../../../simple-components/linkButton.vue";
export default {
  name: "mainPageSlide",
  components: { linkButton },
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          image: "",
          link: "",
          active: false,
        };
      },
    },
  },
};
</script>

<style scoped>
.buttons {
  display: flex;
}
.title {
  font-size: 44px;
  line-height: 53px;
  padding-bottom: 20px;
  color: #ffffff;
  max-width: 700px;
}
.button {
  margin-right: 20px;
}
.slide-item {
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.description {
  padding-bottom: 60px;
  max-width: 640px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: white;
}
.content {
  position: absolute;
  bottom: 150px;
  max-width: 1640px;
  width: 100%;
}
</style>
