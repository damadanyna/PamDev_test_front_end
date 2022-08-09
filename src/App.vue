<template>
    <login_vue  v-if="!this.$store.state.loged" ></login_vue>
    <div v-else >
      <header_comp  v-if="!this.$store.state.show_menu"></header_comp>
      <menu_nav v-else />
      <div class="flex flex-col"> 
        <router-view  v-if="!this.$store.state.show_menu"></router-view>
        <fouter_nav  v-if="!this.$store.state.show_menu"/>
      </div>
    </div>
</template>

<script>
import menu_nav from './components/MenuViews.vue'
import header_comp from './components/HeaderView.vue'
import fouter_nav from './components/FooterView.vue'
import login_vue from  './views/auth_pages/loginPageView.vue'
export default {
  components:{
    menu_nav,
    header_comp,
    fouter_nav,
    login_vue
  }
}
</script>

<style>

</style>

<style>
.bg_1{
  background:#233000;
}
.bg_3{
  background:#5E6600;
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
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

 .bg_2{
  background: #EBF0E4;
 }
</style>
