<template>
  <div class="content">
    <div class="top-list">
      <div class="game-item" v-for="item in topList" :key="item.id">
        <gameItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import gameItem from "../items/gameItem.vue";
export default {
  name: "topList",
  components: {gameItem},
  props: {
    topList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.game-item {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
}
.top-list {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 100px;
  justify-content: center;
}
</style>