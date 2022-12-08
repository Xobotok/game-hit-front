<template>
  <div class="content">
    <div class="filter-list">
      <div class="filter" v-for="item in items" :key="item.text">
        <filterButton :text="item.text" />
      </div>
    </div>
  </div>
</template>

<script>
import filterButton from "../../simple-components/filterButton.vue";
export default {
  name: "filterList",
  components: { filterButton },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.filter-list {
  display: flex;
  justify-content: space-between;
}
</style>
