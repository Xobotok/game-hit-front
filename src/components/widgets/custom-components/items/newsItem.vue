<template>
  <div class="new">
    <img :src="item.image" alt="" class="poster" />
    <div class="news-title">{{ item.title }}</div>
    <div class="news-details">
      <div class="news-text">{{ item.text }}</div>
      <div class="news-date">{{ item.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.new {
  padding-bottom: 40px;
}
.poster {
  margin-bottom: 10px;
  width: 380px;
  height: 260px;
  border-radius: 15px;
  overflow: hidden;
}
.news-details {
  color: #656565;
}
.news-text {
  font-weight: 700;
}
.news-title {
  padding-bottom: 10px;
  font-size: 16px;
  color: white;
}
</style>
