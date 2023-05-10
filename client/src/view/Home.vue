<template>
  <div class='page'>
    <div class='c-page__wrapper c-base__wrapper'> 
      <Sidebar />
      <div class='c-home__content c-base__content'>
        <span>Home</span>
      </div>
    </div>   
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'HomeView',
  components: {
    Sidebar
  }
}
</script>