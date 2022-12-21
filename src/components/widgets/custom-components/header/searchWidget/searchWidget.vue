<template>
  <div class="search-widget">
    <div class="search-icon"></div>
    <input type="text" placeholder="search" class="search-input" />
  </div>
</template>

<script>
export default {
  name: "searchWidget",
};
</script>

<style scoped>
.search-icon {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_331_193)'%3E%3Cpath d='M9.25189 16.0038C12.9809 16.0038 16.0038 12.9809 16.0038 9.25189C16.0038 5.52293 12.9809 2.5 9.25189 2.5C5.52293 2.5 2.5 5.52293 2.5 9.25189C2.5 12.9809 5.52293 16.0038 9.25189 16.0038Z' stroke='%23A5A5A5' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.5 17.5L14.0967 14.0967' stroke='%23A5A5A5' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_331_193'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  width: 20px;
  height: 20px;
  margin-right: 14px;
}
.search-widget {
  display: flex;
  padding: 18px;
  background: #2e2e38;
  border-radius: 10px;
  width: 300px;
  margin-left: 80px;
}
.search-input {
  border: none;
  color: white;
  font-size: 14px;
  width: 100%;
  background-color: transparent;
  box-shadow: none;
  height: 100%;
}
</style>
