<template>
  <div class="crumbs">
    <template v-for="(crumb, key) in crumbs" :key="crumb.link">
      <template v-if="key < crumbs.length - 1">
        <router-link :to="crumb.url" class="crumb">{{ crumb.text }}/ </router-link>
      </template>
      <div class="crumb final-crumb" v-if="key === crumbs.length - 1">{{ crumb.text }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "breadCrumbs",
  props: {
    crumbs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.crumbs {
  display: flex;
}
.crumb {
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: white;
}
.final-crumb {
  opacity: 0.5;
}
</style>
