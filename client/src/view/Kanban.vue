<template>
  <div class='page'>
    <div class='c-page__wrapper c-base__wrapper'> 
      <Sidebar />
      <div class='c-home__content c-base__content'>
        <Navbar />
        <div class='c-base__content-bottom'>
          <KanbanBoard />
        </div>
      </div>
    </div>   
  </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';
import Navbar from '../components/Navbar.vue';
import KanbanBoard from '../components/KanbanBoard.vue';

export default {
  name: 'KanbanView',
  components: {
    Sidebar,
    Navbar,
    KanbanBoard
  },
  data(){
    return{
    }
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  }
}
</script>