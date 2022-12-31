<template>
  <component :is="layout"></component>
</template>
<script>
import main_layout from "@/layouts/main_layout.vue";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "_layout";
    },
  },
  async beforeMount() {

  },
  data() {
    return {};
  },
  beforeCreate() {},
  mounted() {},
  components: {
    main_layout,
  },
  methods: {
    heartBeat() {
      /* let userItem = localStorage.getItem('sber-user');
       if (userItem) {
         let accessToken = JSON.parse(userItem);
         accessToken = accessToken.accessToken;
         let refreshToken = JSON.parse(userItem).refreshToken;
         let user = parseJwt(accessToken);
         user.accessToken = accessToken;
         user.refreshToken = refreshToken;
         localStorage.setItem('sber-user', JSON.stringify(user));
         this.$store.dispatch('USER_ADD_CURRENT', user);
         this.$store.$axios.defaults.headers.common['Authorization'] = accessToken;
       } else {
         setTimeout(() => {
           this.heartBeat();
         }, 1000);
       }*/
    },
  },
};
</script>
