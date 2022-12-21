<template>
  <div class="item" :style="{'background-url': 'url(' + item.image + ')'}">
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-description">{{item.description}}</div>
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
  padding: 40px;
  width: 520px;
  position: relative;
  height: 420px;
  background: linear-gradient(359.28deg, #1B1B23 -9.61%, rgba(27, 27, 35, 0) 129.72%);
  background-color: white;
  border-radius: 10px;
}
.item-info {
  position: absolute;
  top: 30%;
}
.item-title {
  font-size: 22px;
  padding-bottom: 20px;
}
.item-description {
  font-size: 16px;
  padding-bottom: 40px;
}
.buttons {
  display: flex;
}

</style>