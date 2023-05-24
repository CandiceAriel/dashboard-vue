<template>
  <div class='page'>
    <div class='c-page__wrapper c-base__wrapper'> 
      <Sidebar />
      <div class='c-home__content c-base__content'>
        <Navbar />
        <div class='c-base__content-bottom'>
          <h1>All Tasks</h1>
          <div class='c-home__tasks-wrapper'>
            <div v-for="t in tasks" :key="t.id" class='c-home__task'>
              <span>{{t.title}}</span>
              <span>{{t.task_status}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
import axios from 'axios';

import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Navbar
  },
  data(){
    return{
      tasks: [],
    }
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks(){
      axios.get('http://localhost:3000/tasks')
      .then(response => {
        const data = response.data;
        this.tasks = data;
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
}
</script>