<template>
  <div class="rating-stars">
    <div
      :class="star + '-icon'"
      class="star icon"
      v-for="star in stars"
      :key="star"
    ></div>
    <div class="rating-value">{{ rating }}/{{ maxRating }}</div>
  </div>
</template>

<script>
export default {
  name: "ratingStars",
  data() {
    return {
      stars: [],
    };
  },
  props: {
    maxRating: {
      type: Number,
      default: 5,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.getStars();
  },
  methods: {
    getStars() {
      let result = [];
      for (let i = 0; i < this.rating; i++) {
        if (this.rating - i > 1) {
          result.push("star");
        } else if (this.rating - i > 0) {
          result.push("substar");
        }
      }
      this.stars = result;
    },
  }
};
</script>

<style scoped>
.rating-stars {
  display: flex;
  align-items: center;
}
.rating-value {
  padding-left: 10px;
  font-size: 16px;
  color: white;
}
.star {
  margin-right: 5px;
}
.substar-icon {
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_293_2144' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='1' y='0' width='28' height='27'%3E%3Cpath d='M14.1359 1.48359C14.5216 0.821319 15.4784 0.821321 15.8641 1.48359L19.6274 7.94483C19.7687 8.18743 20.0055 8.35945 20.2799 8.41887L27.5878 10.0014C28.3369 10.1636 28.6326 11.0735 28.1219 11.645L23.1398 17.2208C22.9528 17.4301 22.8623 17.7085 22.8906 17.9878L23.6438 25.4271C23.721 26.1896 22.947 26.752 22.2457 26.4429L15.4032 23.4277C15.1463 23.3145 14.8537 23.3145 14.5968 23.4277L7.75433 26.4429C7.05299 26.752 6.27897 26.1896 6.35617 25.4271L7.10939 17.9878C7.13767 17.7085 7.04723 17.4301 6.86017 17.2208L1.8781 11.645C1.36745 11.0735 1.6631 10.1636 2.41215 10.0014L9.72009 8.41887C9.99448 8.35945 10.2313 8.18743 10.3726 7.94482L14.1359 1.48359Z' fill='%23801DCE'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_293_2144)'%3E%3Crect x='-12' y='-8' width='27' height='43' fill='%23801DCE'/%3E%3C/g%3E%3C/svg%3E%0A");
  width: 30px;
  height: 30px;
}
.star-icon {
  background-image: url("data:image/svg+xml,%3Csvg width='28' height='27' viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.1359 1.48359C13.5216 0.821319 14.4784 0.821321 14.8641 1.48359L18.6274 7.94483C18.7687 8.18743 19.0055 8.35945 19.2799 8.41887L26.5878 10.0014C27.3369 10.1636 27.6326 11.0735 27.1219 11.645L22.1398 17.2208C21.9528 17.4301 21.8623 17.7085 21.8906 17.9878L22.6438 25.4271C22.721 26.1896 21.947 26.752 21.2457 26.4429L14.4032 23.4277C14.1463 23.3145 13.8537 23.3145 13.5968 23.4277L6.75433 26.4429C6.05299 26.752 5.27897 26.1896 5.35617 25.4271L6.10939 17.9878C6.13767 17.7085 6.04723 17.4301 5.86017 17.2208L0.878102 11.645C0.367447 11.0735 0.663101 10.1636 1.41215 10.0014L8.72009 8.41887C8.99448 8.35945 9.23126 8.18743 9.37256 7.94482L13.1359 1.48359Z' fill='%23801DCE'/%3E%3C/svg%3E%0A");
  width: 30px;
  height: 30px;
}
</style>
