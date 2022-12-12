<template>
  <div class="new">
    <img :src="item.image" alt="" class="poster" />
    <router-link :to="makeLink" class="news-title">{{ item.title }}</router-link>
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
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    makeLink() {
      if (this.type === 'game') {
        return `/game/${this.item.id}`;
      } else {
        return `/news/${this.item.id}`;
      }
    }
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
  display: flex;
  justify-content: space-between;
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
