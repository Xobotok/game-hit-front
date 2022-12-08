<template>
  <div class="footer">
    <div class="content">
      <div class="content-side">
        <div class="logo-item">
          <logo />
        </div>
        <div class="search-item"></div>
      </div>
      <div class="content-side">
        <div class="navigation-part">
          <horizontalNav
              :navigation-items="navigationItems"
          />
        </div>
        <div class="social-part">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import horizontalNav from "../header/horizontalNav/horizontalNav.vue";
import logo from "../../simple-components/logo.vue";
export default {
  name: "footerWidget",
  components: { horizontalNav, logo },
  data() {
    return {
      navigationItems: [
        {
          id: 1,
          text: "Help",
          type: "link",
          link: "/help",
        },
        {
          id: 2,
          text: "Terms of Use",
          link: "/terms",
          type: "link",
        },
        {
          id: 3,
          text: "Contact",
          link: "/contacts",
          type: "link",
        },
        {
          id: 4,
          text: "Privacy",
          link: "/privacy",
          type: "link",
        },
      ],
    }
  }
};
</script>

<style scoped>
.content {
  max-width: 1190px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.footer {
  position: relative;
  background: #27272f;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 27px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
