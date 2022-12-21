<template>
  <div class="page">
    <sliderWidget :slides="slides" />
    <div class="center top-block">
      <topList :top-list="topList"></topList>
    </div>
    <div class="center games-block">
      <div class="content">
        <div class="header">GAMES</div>
        <div class="filters">
          <filterList :items="filters" />
        </div>
        <div class="games-list">
          <div class="game-item" v-for="item in gamesList" :key="item.id">
            <newsItem :image="item.poster_image" :id="item.id" :type="'game'" :title="item.title" :text="getCategory(item)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topList from "../components/widgets/custom-components/lists/topList.vue";
import filterList from "../components/widgets/custom-components/lists/filterList.vue";
import newsItem from "../components/widgets/custom-components/items/newsItem.vue";
import sliderWidget from "../components/widgets/custom-components/slider/sliderWidget.vue";

export default {
  name: "MainPage",
  components: { sliderWidget, topList, filterList, newsItem },
  data() {
    return {
      gamesList: [
        {
          id: 1,
          image: '',
          title: 'The Witcher 3: Wild Hunt',
          text: 'Best game of 2015',
          date: '',
          author: '',
        },
        {
          id: 2,
          image: '',
          title: 'Watch Dogs 2',
          text: 'Best game of 2016',
          date: '',
          author: '',
        },
        {
          id: 3,
          image: '',
          title: 'Warcraft 3: Reforged',
          text: 'Worst game of 2019',
          date: '',
          author: '',
        },
        {
          id: 4,
          image: '',
          title: 'Hogwarts Legacy',
          text: 'Most anticipated game of 2020',
          date: '',
          author: '',
        },
        {
          id: 5,
          image: '',
          title: 'Vampire: The Masquerade - Bloodlines 2',
          text: 'Super game',
          date: '',
          author: '',
        },
      ],
      filters: [
        {
          id: 1,
          text: 'ALL GAMES',
        },
        {
          id: 2,
          text: 'FARMING GAMES',
        },
        {
          id: 3,
          text: 'STRATEGY',
        },
        {
          id: 4,
          text: 'WAR GAMES',
        },
        {
          id: 5,
          text: 'ACTION',
        },
        {
          id: 6,
          text: 'SIMULATION GAMES',
        },
      ],
      topList: [
        {
          id: 1,
          image: '',
          title: "Game 1",
          link: "/game/1",
          description:
            "Возглавьте отряд бойцов в невероятно масштабных и реалистичных битвах, повторяющих самые известные сражения Второй мировой войны",
        },
        {
          id: 2,
          image: '',
          title: "Game 2",
          link: "/game/2",
          description:
              "Возглавьте отряд бойцов в невероятно масштабных и реалистичных битвах, повторяющих самые известные сражения Второй мировой войны",
        },
        {
          id: 3,
          image: '',
          title: "Game 3",
          link: "/game/3",
          description:
              "Возглавьте отряд бойцов в невероятно масштабных и реалистичных битвах, повторяющих самые известные сражения Второй мировой войны",
        },
      ],
      slides: [
        {
          title: "ENLISTED Battle for Moscow",
          description: "Возглавьте отряд бойцов в невероятно масштабных и реалистичных битвах, повторяющих самые известные сражения Второй мировой войны",
          image: "Изображение",
          link: "/game/1",
          id: 1,
        },
        {
          title: "Taonga: the island farm",
          description: "Получите возможность поселиться на острове, где вам предстоит развивать ферму, управлять ею и получать прибыль",
          image: "Изображение",
          link: "/game/2",
          id: 2,
        },
      ],
    };
  },
  methods: {
    getCategory(item) {
      let category = '';
      if(item.categories) {
        for(let i = 0; i < item.categories.length; i++) {
          if(i < item.categories.length - 1) {
            category += item.categories[i].title + ', ';
          } else {
            category += item.categories[i].title;
          }
        }
      }
      return category;
    }
  },
  mounted() {
    this.$store.action('game/get-games').then(res => {
      if(res.data.ok == 1) {
        this.gamesList = res.data.data.games;
      }
    })
  }
};
</script>

<style scoped>
.game-item {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
}
.games-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 80px;
}
.filters {
  padding-bottom: 20px;
}
.header {
  padding-bottom: 40px;
}
.content {
  max-width: 1640px;
  width: 100%;
}
.header {
  font-size: 22px;
  color: white;
}
.top-block {
  margin-top: -110px;
}
.center {
  display: flex;
  justify-content: center;
  width: 100%;
}
.page {
  width: 100%;
}
</style>
