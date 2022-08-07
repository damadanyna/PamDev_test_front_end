<template>
  <div class="flex w-full h-full">
    <header_comp></header_comp>
    <menu_nav v-if="this.$store.state.show_menu" />
    <home  />
  </div>
</template>

<script>
import menu_nav from './components/MenuViews.vue'
import header_comp from './components/HeaderView.vue'
import home from './views/HomeView.vue'
export default {
  components:{
    menu_nav,
    home,
    header_comp
  }
}
</script>

<style>

</style>

<style>
.bg_1{
  background:#233000;
}

.font_rufin{
  font-family: 'Rufina';
}
.font_lato{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.font_inter{
  font-family: 'Inter';
}
#container_navigation{
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
