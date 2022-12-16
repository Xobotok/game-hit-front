<template>
  <div class="new">
    <img :src="image" alt="" class="poster" />
    <router-link :to="makeLink()" class="news-title">{{ title }}</router-link>
    <div class="news-details">
      <div class="news-text">{{ text }}</div>
      <div class="news-date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsItem",
  props: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    makeLink() {
      return `/${this.type}/${this.id}`;
    }
  },
};
</script>

<style scoped>
.new {
  width: 380px;
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
  display: block;
  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 2; /* количество строк */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  height: 45px;
  font-size: 16px;
  color: white;
}
</style>
