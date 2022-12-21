<template>
  <div class="page">
    <div class="playframe" :class="{fullscreen: fullscreen}" v-if="game != false" :key="fullscreen">
      <iframe class="frame"
              :src="game.frameUrl"
              frameborder="0"
      ></iframe>
      <div class="game-info">
        <div class="game-item">
          <div class="game-icon" v-if="game.small_icon_image" :style="{'background-image': 'url(\'' + game.small_icon_image + '\')'}"></div>
          <div class="game-desc">
            <div class="game-title">{{game.title}}</div>
            <div class="game-categories">
              <div class="category" v-for="category in game.categories" :key="category.id">
                {{ category.title }}
              </div>
            </div>
          </div>
        </div>
        <div class="controls-item">
          <div class="like-icon icon control"></div>
          <div class="dislike-icon icon control"></div>
          <div class="full-screen-icon icon control" @click="fullscreenToggle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayFrame",
  data() {
    return {
      game: false,
      fullscreen: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    fullscreenToggle() {
      this.fullscreen = !this.fullscreen;
    },
    init() {
      this.$store.action('game/get-game?id=' + this.$route.params.id).then(res =>{
        this.game = res.data.data;
      });
     /* this.game = {
        title: "Вот такая игра",
        frameUrl: "https://www.youtube.com/embed/FsRvEIADvwg",
        categories: ["Shooter", "Action", "FPS"],
        gameIcon: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1622542020",
      };*/
    },
  },
};
</script>

<style scoped>
.frame {
  width: 100%;
  height: calc(100% - 80px);
}
.game-info {
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;
}
.icon {
  cursor: pointer;
  width: 14px;
  height: 14px;
}
.full-screen-icon {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.33301 4.66659V2.99992C1.33301 2.55789 1.5086 2.13397 1.82116 1.82141C2.13372 1.50885 2.55765 1.33325 2.99967 1.33325H4.66634' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1.33301 11.3333V12.9999C1.33301 13.4419 1.5086 13.8659 1.82116 14.1784C2.13372 14.491 2.55765 14.6666 2.99967 14.6666H4.66634' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.333 1.33325H12.9997C13.4417 1.33325 13.8656 1.50885 14.1782 1.82141C14.4907 2.13397 14.6663 2.55789 14.6663 2.99992V4.66659' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.333 14.6666H12.9997C13.4417 14.6666 13.8656 14.491 14.1782 14.1784C14.4907 13.8659 14.6663 13.4419 14.6663 12.9999V11.3333' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}
.dislike-icon {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.83333 8.83336V2.16669C3.83333 1.94568 3.74554 1.73372 3.58926 1.57744C3.43298 1.42116 3.22101 1.33336 3 1.33336H1.33333C1.11232 1.33336 0.900358 1.42116 0.744078 1.57744C0.587797 1.73372 0.5 1.94568 0.5 2.16669V8.00002C0.5 8.22104 0.587797 8.433 0.744078 8.58928C0.900358 8.74556 1.11232 8.83336 1.33333 8.83336H3.83333ZM3.83333 8.83336C4.71739 8.83336 5.56523 9.18455 6.19036 9.80967C6.81548 10.4348 7.16667 11.2826 7.16667 12.1667V13C7.16667 13.4421 7.34226 13.866 7.65482 14.1785C7.96738 14.4911 8.39131 14.6667 8.83333 14.6667C9.27536 14.6667 9.69928 14.4911 10.0118 14.1785C10.3244 13.866 10.5 13.4421 10.5 13V8.83336H13C13.442 8.83336 13.866 8.65776 14.1785 8.3452C14.4911 8.03264 14.6667 7.60872 14.6667 7.16669L13.8333 3.00003C13.7135 2.4888 13.4861 2.04982 13.1855 1.74922C12.8849 1.44862 12.5274 1.30267 12.1667 1.33336H6.33333C5.67029 1.33336 5.03441 1.59675 4.56557 2.06559C4.09673 2.53443 3.83333 3.17032 3.83333 3.83336' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}
.like-icon {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.83333 7.16659V13.8333C3.83333 14.0543 3.74554 14.2662 3.58926 14.4225C3.43298 14.5788 3.22101 14.6666 3 14.6666H1.33333C1.11232 14.6666 0.900358 14.5788 0.744078 14.4225C0.587797 14.2662 0.5 14.0543 0.5 13.8333V7.99992C0.5 7.7789 0.587797 7.56694 0.744078 7.41066C0.900358 7.25438 1.11232 7.16659 1.33333 7.16659H3.83333ZM3.83333 7.16659C4.71739 7.16659 5.56523 6.8154 6.19036 6.19027C6.81548 5.56515 7.16667 4.71731 7.16667 3.83325V2.99992C7.16667 2.55789 7.34226 2.13397 7.65482 1.82141C7.96738 1.50885 8.39131 1.33325 8.83333 1.33325C9.27536 1.33325 9.69928 1.50885 10.0118 1.82141C10.3244 2.13397 10.5 2.55789 10.5 2.99992V7.16659H13C13.442 7.16659 13.866 7.34218 14.1785 7.65474C14.4911 7.9673 14.6667 8.39122 14.6667 8.83325L13.8333 12.9999C13.7135 13.5111 13.4861 13.9501 13.1855 14.2507C12.8849 14.5513 12.5274 14.6973 12.1667 14.6666H6.33333C5.67029 14.6666 5.03441 14.4032 4.56557 13.9344C4.09673 13.4655 3.83333 12.8296 3.83333 12.1666' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}
.control {
  margin-right: 10px;
}
.controls-item {
  display: flex;
}
.category {
  margin-right: 10px;
  padding: 10px 30px;
  background: #27272F;
  border-radius: 25px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 14px;
}
.game-categories {
  display: flex;
}
.game-title {
  color: white;
  font-size: 16px;
  padding-bottom: 10px;
}
.game-item {
  display: flex;
}
.game-icon {
  width: 66px;
  height: 66px;
  margin-right: 15px;
  border-radius: 5px;
  background-size: cover;
}
.playframe {
  width: 90vw;
  height: 80vh;
  min-height: 500px;
  padding-bottom: 30px;
}
.fullscreen .game-info {
  padding-left: 140px;
}
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
</style>
