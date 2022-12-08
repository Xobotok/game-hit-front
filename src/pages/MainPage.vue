<template>
  <div class="page">
    <div class="slider">
      <template v-for="item in slides">
        <div
          class="slide-item"
          :style="{ 'background-image': 'url(' + item.image + ')' }"
          v-if="item.active"
        >
          <div class="content">
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
      <div class="control">
        <div
          class="control-item"
          v-for="item in slides"
          :class="{ active: item.active === true }"
          @click="select(item)"
        />
      </div>
    </div>
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
            <newsItem :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import linkButton from "../components/widgets/simple-components/linkButton.vue";
import topList from "../components/widgets/custom-components/lists/topList.vue";
import filterList from "../components/widgets/custom-components/lists/filterList.vue";
import newsItem from "../components/widgets/custom-components/items/newsItem.vue";

export default {
  name: "MainPage",
  components: { linkButton, topList, filterList, newsItem },
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
          header: 'Warcraft 3: Reforged',
          text: 'Worst game of 2019',
          date: '',
          author: '',
        },
        {
          id: 4,
          image: '',
          header: 'Hogwarts Legacy',
          text: 'Most anticipated game of 2020',
          date: '',
          author: '',
        },
        {
          id: 5,
          image: '',
          header: 'Vampire: The Masquerade - Bloodlines 2',
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
          name: "ENLISTED Battle for Moscow",
          text: "Возглавьте отряд бойцов в невероятно масштабных и реалистичных битвах, повторяющих самые известные сражения Второй мировой войны",
          image: "Изображение",
          link: "/game/1",
          active: true,
          id: 1,
        },
        {
          name: "Taonga: the island farm",
          text: "Возглавьте отряд бойцов в невероятно масштабных и реалистичных битвах, повторяющих самые известные сражения Второй мировой войны",
          image: "Изображение",
          link: "/game/2",
          active: false,
          id: 2,
        },
      ],
    };
  },
  methods: {
    select(item) {
      this.slides.forEach((element) => {
        element.active = false;
      });
      item.active = true;
    },
  },
};
</script>

<style scoped>
.games-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

.buttons {
  position: absolute;
  bottom: 150px;
}

.slider {
  padding-bottom: 171px;
  height: 800px;
}

.buttons {
  display: flex;
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
.games-list {
  padding-bottom: 80px;
}
.button {
  margin-right: 20px;
}

.control {
  display: flex;
  width: 100%;
  justify-content: center;
}
.page {
  width: 100%;
}

.slide-item {
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.control-item.active {
  background: #ffffff;
  opacity: 0.55;
}

.control-item {
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}
</style>
