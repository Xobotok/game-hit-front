<template>
  <div class="page">
    <div class="content">
      <div class="crumbs">
        <breadCrumbs :crumbs="crumbs"></breadCrumbs>
      </div>
      <div class="page-header">
        {{newItem.title}}
      </div>
      <div class="poster" :style="{'background-image': 'url(' + newItem.poster + ')'}"></div>
      <div class="text-container" v-html="newItem.text"></div>
      <div class="new-subheader">News</div>
      <div class="news-container">
        <div class="news-item" v-for="item in news" :key="item.id">
          <newsItem :type="'news'" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import breadCrumbs from "../components/widgets/simple-components/breadCrumbs.vue";
import newsItem from "../components/widgets/custom-components/items/newsItem.vue";
export default {
  name: "NewPage",
  components: {breadCrumbs, newsItem},
  data() {
    return {
      newItem: {
        id: 1,
        poster: "",
        title: "The Witcher 3: Wild Hunt",
        text: "The game of the year 2015",
        date: "November 19, 2022",
        author: "John Doe",
      },
      crumbs: [],
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
          text: "John Doe",
        },
        {
          id: 3,
          title: "Developers are working on the next game",
          date: '02.12.2018',
          text: "John Doe",
        },
        {id: 4, title: "The Witcher 3: Wild Hunt", date: '01.12.2018', text: "John Doe"},
        {id: 5, title: "The Witcher 4 anounce come true", date: '01.12.2018', text: "John Doe",},
      ],
    };
  },
  mounted() {
    this.crumbs = [
      {
        id: 1,
        text: "Home",
        url: "/",
      },
      {
        id: 2,
        text: "News",
        url: "/news",
      },
      {
        id: 3,
        text: this.newItem.title,
        url: '',
      },
    ];
  }
}
</script>

<style scoped>
.new-subheader {
  font-weight: 550;
  font-size: 20px;
  line-height: 20px;
  padding-bottom: 20px;
  color: #FFFFFF;
}
.news-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.poster {
  width: 100%;
  height: 60vh;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 15px;
}
.page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.crumbs {
  padding-top: 40px;
  padding-bottom: 20px;
}
.text-container {
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  color: #FFFFFF;
  padding-bottom: 60px;
}
.content {
  width: 100%;
  max-width: 1640px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>