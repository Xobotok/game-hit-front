<template>
  <div class="content">
    <router-link to="/" class="back-button">{{
        "< Main page"
      }}</router-link>
    <div class="game-info">
      <div class="game-title">{{ game.title }}</div>
      <div class="game-description">{{ game.description }}</div>
      <div class="game-controls">
        <div class="game-buttons">
          <linkButton
              style="padding-right: 20px"
              :itemWidth="'385px'"
              :text="'PLAY'"
              :link="game.link"
              :icon="'game'"
          ></linkButton>
          <linkButton
              :link="game.link"
              :class="'transparent'"
              text="MORE INFO"
          ></linkButton>
        </div>
        <div class="game-rating">
          <div class="rating-title">RATING</div>
          <ratingStars :rating="game.rating" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import linkButton from "../../simple-components/linkButton.vue";
import ratingStars from "../../simple-components/ratingStars.vue";
export default {
  name: "bigGameItem",
  components: {linkButton, ratingStars},
  data() {
    return {
      stars: [],
    };
  },
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped>
.rating-title {
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #ffffff;
  padding-bottom: 10px;
}
.game-rating {
  padding-bottom: 40px;
}
.game-title {
  font-weight: 400;
  font-size: 44px;
  line-height: 53px;
  padding-bottom: 20px;
  color: #ffffff;
}
.game-description {
  font-weight: 400;
  max-width: 720px;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  padding-bottom: 60px;
}
.back-button {
  margin-top: 50px;
  display: inline-block;
}
.content {
  width: 100%;
  max-width: 1640px;
  padding-left: 20px;
  padding-right: 20px;
}
.game-info {
  position: absolute;
  bottom: 0;
}
.game-buttons {
  display: flex;
  padding-bottom: 40px;
}
</style>