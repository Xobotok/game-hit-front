<template>
  <div class="horizontal-nav">
    <div
      class="navigation-component"
      :key="item.id"
      v-for="item in navigationItems"
      :class="{ active: item.type === 'subNavButton' && opened === true }"
    >
      <div
        class="navigation-text pointer"
        v-if="item.type !== 'link'"
        @click.prevent.stop="openSubNav(item.text)"
      >
        <div
          class="more-icon pointer"
          :class="{ 'close-icon': opened === true }"
          v-if="item.type === 'subNavButton'"
        ></div>
        {{ item.text }}
      </div>
      <router-link class="navigation-text" :to="item.link" v-else
        >{{ item.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "horizontalNav",
  data() {
    return {
      opened: false,
    };
  },
  props: {
    navigationItems: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {},
  methods: {
    openSubNav() {
      this.opened = !this.opened;
      this.$emit("openSubNav", this.opened);
    },
  },
};
</script>

<style scoped>
.navigation-component {
  margin-left: 47px;
}

.dropdown-list {
  position: absolute;
  top: 30px;
  display: flex;
  left: 0;
}

.horizontal-nav {
  display: flex;
}
.navigation-component.active .navigation-text {
  background: #2e2e38;
}
.navigation-component:hover .more-icon {
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0.5H15M1 5.5H14M1 10.5H13' stroke='white' stroke-opacity='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}
.navigation-component:hover .close-icon {
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='11' viewBox='0 0 12 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0.5L11 10.5M1 10.5L11 0.5' stroke='white' stroke-opacity='1' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}
.navigation-component:hover .navigation-text {
  color: white;
}

.navigation-text {
  border-radius: 10px;
  padding: 15px;
  line-height: 1;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.55);
  font-size: 16px;
}

.navigation-component {
  position: relative;
  display: flex;
  align-items: center;
}

.more-icon {
  margin-right: 10px;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0.5H15M1 5.5H14M1 10.5H13' stroke='white' stroke-opacity='0.55' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  width: 14px;
  height: 11px;
  background-repeat: no-repeat;
}

.close-icon {
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='11' viewBox='0 0 12 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0.5L11 10.5M1 10.5L11 0.5' stroke='white' stroke-opacity='0.55' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}
</style>
