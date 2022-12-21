<template>
  <div class="page">
    <div class="content">
      <div class="bread-crumbs">
        <breadCrumbs :crumbs="crumbs"></breadCrumbs>
      </div>
      <div class="page-header">
        NEWS
      </div>
      <div class="news-list">
        <newsItem :type="'news'" v-for="item in news" :key="item.id" :item="item"></newsItem>
      </div>
      <div class="more-button">
        <linkButton link="" item-width="350px" text="LOAD MORE" @clickHandler="LoadMore"></linkButton>
      </div>
    </div>

  </div>
</template>

<script>
import breadCrumbs from "../components/widgets/simple-components/breadCrumbs.vue";
import newsItem from "../components/widgets/custom-components/items/newsItem.vue";
import linkButton from "../components/widgets/simple-components/linkButton.vue";
export default {
  name: "NewsPage",
  components: {breadCrumbs, newsItem, linkButton},
  data() {
    return {
      news: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          date: "12.12.2019",
          text: "John Doe",
        },
        {
          id: 2,
          title: "Computer games make you smarter",
          date: "01.12.2019",
        },
        {
          id: 3,
          title: "Developers are working on the next game",
          date: '02.12.2018'
        },
        {id: 4, title: "The Witcher 3: Wild Hunt", date: '01.12.2018'},
        {id: 5, title: "The Witcher 4 anounce come true", date: '01.12.2018'},
      ],
      crumbs: [
        {text: 'Main', url: '/'},
        {text: 'News', url: '/news'},
      ]
    }
  },
  methods: {
    LoadMore() {
      console.log('loadMore');
    }
  }
}
</script>

<style scoped>
.more-button {
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
}
.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.page {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.bread-crumbs {
  padding-top: 40px;
  padding-bottom: 35px;
}
.page-header {
  font-weight: 400;
  font-size: 44px;
  line-height: 53px;
  color: #FFFFFF;
  padding-bottom: 35px;
}
.content {
  width: 100%;
  max-width: 1640px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>