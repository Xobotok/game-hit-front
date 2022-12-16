<template>
  <div class="page" v-if="game != false">
    <div
      class="game-head"
      :style="{ 'background-image': 'url(' + game.poster + ')' }"
    >
      <bigGameItem :game="game" />
    </div>
    <div class="content">
      <div
        class="gameplay-poster"
        :style="{ 'background-image': 'url(' + game.gameplayPoster + ')' }"
      ></div>
      <div class="game-description" v-html="game.description"></div>
      <div class="buttons">
        <linkButton
          :item-width="'382px'"
          :link="'/play/' + game.id"
          :text="'PLAY'"
          :icon="'gamepad-icon'"
        />
      </div>
    </div>
    <div class="content">
      <div class="info-main">Additional Information</div>
      <div class="info-list">
        <div class="info-item">
          <div class="info-header">Developer</div>
          <div class="info-text">{{ game.developer }}</div>
        </div>
        <div class="info-item">
          <div class="info-header">Publisher</div>
          <div class="info-text">{{ game.publisher }}</div>
        </div>
        <div class="info-item">
          <div class="info-header">Platform</div>
          <div class="info-text">
           {{game.platform}}
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-title">Gameplay</div>
      <div class="video">
        <iframe
          width="1080"
          height="630"
          :src="game.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="content">
      <div class="content-title">Recommended Games</div>
      <div class="recommended-list">
        <div class="recommended-item" v-for="item in recommended" :key="item.id" >
          <newsItem :type="'game'" :title="item.title" :id="item.id" :text="item.short_description"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bigGameItem from "../components/widgets/custom-components/items/bigGameItem.vue";
import linkButton from "../components/widgets/simple-components/linkButton.vue";
import newsItem from "../components/widgets/custom-components/items/newsItem.vue";
export default {
  name: "GamePage",
  components: { bigGameItem, linkButton, newsItem },
  data() {
    return {
      game: false,
      recommended: [
        {
          id: 1,
          image: "",
          title: "The Witcher 3: Wild Hunt",
          short_description: "Best game of 2015",
          date: "",
          author: "",
        },
        {
          id: 2,
          image: "",
          title: "Watch Dogs 2",
          short_description: "Best game of 2016",
          date: "",
          author: "",
        },
        {
          id: 3,
          image: "",
          title: "Warcraft 3: Reforged",
          short_description: "Worst game of 2019",
          date: "",
          author: "",
        },
        {
          id: 4,
          image: "",
          title: "Hogwarts Legacy",
          short_description: "Most anticipated game of 2020",
          date: "",
          author: "",
        },
        /*{
          id: 5,
          image: "",
          title: "Vampire: The Masquerade - Bloodlines 2",
          text: "Super game",
          date: "",
          author: "",
        },*/
      ],
    };
  },
  beforeMount() {

  },
  mounted() {
    this.$store.axios(this.$store.BASE_URL + 'game/get-game?id=' + this.$route.params.id).then((response) => {
      this.game = response.data.data;
      console.log(this.game);
    });
   /* this.game = {
      id: 2,
      title: "Cyberpunk 2077",
      poster:
        "https://www.cyberpunk.net/wp-content/uploads/2020/09/cyberpunk-2077-og-image.jpg",
      gameplayText:
        "<span style='color: white'>Возглавьте отряд бойцов в невероятно масштабных и реалистичных битвах, повторяющих самые известные сражения Второй мировой войны </br> </br></span>" +
        "Just as the introduction of modern techniques speaks about the possibilities of progress of the professional community. Clearly, independent states are gaining popularity among certain segments of the population, which means they should be functionally separated into independent elements. Preliminary conclusions are disappointing: long-term planning plays an important role in shaping the withdrawal of current assets. Just as the introduction of modern techniques involves independent ways of implementing experiments that are striking in their scale and grandiosity! </br> </br>" +
        "Preliminary conclusions are disappointing: synthetic testing assumes independent ways of implementing forms of influence. And there is no doubt that the actively developing countries of the third world can be anathema to the socio-democratic. Within the framework of the specification of modern standards, actively developing countries of the third world are calling us to new achievements, which, in turn, should be considered exclusively in the context of marketing and financial prerequisites. We are forced to start from the fact that constant quantitative growth and the scope of our activity plays an important role in shaping the timely completion of a super task.",
      description:
        "Cyberpunk is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
      rating: 4.5,
      releaseDate: "10 December 2020",
      gameplayPoster: "",
      genres: ["Action", "RPG", "Adventure"],
      platforms: ["PC", "PS4", "Xbox One"],
      developer: "CD Projekt Red",
      publisher: "CD Projekt Red",
      website: "https://www.cyberpunk.net/",
      trailer: "https://www.youtube.com/watch?v=QwievZ1Tx-8",
    };*/
  },
  methods: {},
};
</script>

<style scoped>
.recommended-item {
  margin-right: 10px;
  margin-left: 10px;
}
.recommended-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.video {
  padding-bottom: 60px;
}
.content-title {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 20px;
}
.info-text {
  color: white;
  font-size: 16px;
}
.info-main {
  padding-bottom: 40px;
  color: white;
  font-size: 18px;
  font-weight: 600;
}
.info-header {
  padding-bottom: 10px;
  font-size: 18px;
  color: #ffffff;
  opacity: 0.5;
}
.info-item {
  padding-right: 20px;
}
.info-list {
  display: flex;
  padding-bottom: 60px;
}
.buttons {
  padding-bottom: 60px;
}
.page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  width: 100%;
  max-width: 1640px;
  padding-left: 20px;
  padding-right: 20px;
}
.gameplay-poster {
  border-radius: 15px;
  width: 100%;
  height: 520px;
  margin-bottom: 60px;
}
.game-description {
  color: rgba(255, 255, 255, 0.75);
  padding-bottom: 30px;
}
.game-head {
  width: 100vw;
  padding-bottom: 60px;
  min-height: 620px;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
