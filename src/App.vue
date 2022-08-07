<template>
  <div class="flex w-full h-full">
    <menu_nav v-if="this.$store.state.show_menu" />
    <home/>
  </div>
</template>

<script>
import menu_nav from './components/MenuViews.vue'
import home from './views/HomeView.vue'
export default {
  components:{
    menu_nav,
    home,
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
  font-family: 'Lato';
}
#container_navigation{
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
