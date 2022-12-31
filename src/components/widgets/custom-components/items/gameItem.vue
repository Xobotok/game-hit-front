<template>
  <div class="item" :style="{'background-image': 'url(\'' + item.poster_image + '\')'}">
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-description">{{item.short_description}}</div>
      <div class="buttons">
        <linkButton :item-width="'190px'" :link="item.link" :text="'PLAY'" style="padding-right: 20px;"></linkButton>
        <linkButton :class="'transparent'" :item-width="'190px'" :link="item.link" :text="'MORE_INFO'"></linkButton>
      </div>
    </div>
  </div>
</template>

<script>
import linkButton from "../../simple-components/linkButton.vue";
export default {
  name: "gameItem",
  components: {linkButton},
  props: {
    item: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>
.item {
  background-color: rgb(1 1 1 / 21%);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  padding: 40px;
  width: 520px;
  position: relative;
  height: 420px;
  border-radius: 10px;
}
.item-info {
  position: absolute;
  top: 30%;
}
.item-title {
  font-size: 22px;
  color: white;
  padding-bottom: 20px;
}
.item-description {
  font-size: 16px;
  height: 140px;
  color: white;
  padding-bottom: 40px;
}
.buttons {
  display: flex;
}

</style>