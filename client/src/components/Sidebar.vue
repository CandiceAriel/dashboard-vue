<template>
  <div class="c-sidebar">
    <div class='c-sidebar__menu-wrapper' :class="{ 'c-sidebar__menu-wrapper_active': activePage === 'Home' }" @click="goTo('home')">
      <img src='../assets/images/dashboard.svg' class='c-sidebar__menu-icon'/>
    </div>
    <div class='c-sidebar__menu-wrapper' :class="{ 'c-sidebar__menu-wrapper_active': this.currRoute === 'Kanban' }"  @click="goTo('kanban')">
      <img src='../assets/images/kanban-outlined.svg' class='c-sidebar__menu-icon' :class="{ 'c-sidebar__menu-icon_active': this.currRoute === 'Kanban' }"/>
    </div>
  </div>
</template>
<script>
import router from '../router/index';

export default {
  name: 'Sidebar',
  props: {
  },
  data(){
    return{
      currRoute: '',
      destRoute: '',
    }
  },
  mounted() {
    this.checkRoute();
  },
  computed: {
  },
  methods: {
    checkRoute(){
      this.currRoute = this.$route.name
      console.log(this.currRoute )
    },
    goTo(rt){
      this.destRoute = rt;
      router.push('/' + this.destRoute);
      console.log(this.destRoute)
    }
  }
}
</script>
