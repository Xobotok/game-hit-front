<template>
  <div class="header">
    <div class="content">
      <div class="top-side">
        <div class="content-side">
          <div class="logo-item">
            <logo/>
          </div>
          <div class="search-item">
            <searchWidget/>
          </div>
        </div>
        <div class="content-side">
          <div class="navigation-part">
            <horizontalNav :navigation-items="navigationItems" @openSubNav="openSubNav"/>
          </div>
          <div class="social-part">
            <socialsList/>
          </div>
        </div>
      </div>
      <div class="subheader" v-if="subItemsOpened === true">
        <div class="subheader-content">
          <router-link v-for="item in subItems" :to="item.link" class="subitem" :key="item.id">{{ item.text }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchWidget from "./searchWidget/searchWidget.vue";
import horizontalNav from "./horizontalNav/horizontalNav.vue";
import logo from "../../simple-components/logo.vue";
import socialsList from "./socialsList/socialsList.vue";

export default {
  name: "headerWidget",
  components: {
    logo,
    searchWidget,
    horizontalNav,
    socialsList,
  },
  data() {
    return {
      subItemsOpened: false,
      navigationItems: [
        {
          id: 1,
          text: "Categories",
          type: "subNavButton",
        },
        {
          id: 2,
          text: "Help",
          link: "/help",
          type: "link",
        },
        {
          id: 3,
          text: "Videos",
          link: "/videos",
          type: "link",
        },
      ],
      subItems: [
        {
          id: 1,
          text: "online games",
          link: "/category/online games",
          type: "link",
        },
        {
          id: 2,
          text: "farming games",
          link: "/category/farming games",
          type: "link",
        },
        {
          id: 3,
          text: "strategy",
          link: "/category/strategy",
          type: "link",
        },
        {
          id: 4,
          text: "war games",
          link: "/category/war games",
          type: "link",
        },
        {
          id: 5,
          text: "action",
          link: "/category/action",
          type: "link",
        },
        {
          id: 6,
          text: "actions",
          link: "/category/actions",
          type: "link",
        },
        {
          id: 7,
          text: "simulation games",
          link: "/category/simulation games",
          type: "link",
        },
        {
          id: 8,
          text: "building",
          link: "/category/building",
          type: "link",
        },
      ],
    };
  },
  methods: {
    openSubNav(opened) {
      this.subItemsOpened = opened;
    },
  }
};
</script>

<style scoped>
.subitem:hover {
  color: white;
}

.subitem {
  color: rgba(255, 255, 255, 0.55);
  font-size: 16px;
}
.subheader {
  position: absolute;
  top: 81px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #27272f;
  z-index: 9;
}
.subheader-content {
  max-width: 1690px;
  width: 100%;
  display: flex;
  left: 0;
  padding-top: 24px;
  padding-bottom: 24px;
  align-items: center;
  justify-content: space-between;
}

.content-side {
  display: flex;
  align-items: center;
}
.top-side {
  width: 100%;
  max-width: 1690px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 24px;
}
.content {
  width: 100%;
  display: flex;
  justify-content: center;
}
.header {
  position: relative;
  width: 100%;
  background: #27272f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 27px;
}
</style>
