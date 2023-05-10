<template>
  <div class='c-kanban__board'>
    <KanbanColumn v-for="item in taskStatus"
      :key="item.id"
      :title="item.status"
    />

  </div>
</template>
<script>
import axios from 'axios';

import KanbanColumn from './Kanban/Column.vue'

export default {
  name: 'KanbanBoard',
  components: {
    KanbanColumn,
  },
  data(){
    return{
      taskStatus: [],
      tasks: [],
    }
  },
  mounted() {
    this.fetchStatus();
    this.fetchTasks();
  },
  computed: {
  },
  methods: {
    fetchStatus(){
      axios.get('http://localhost:3000/status')
      .then(response => {
        const data = response.data;
        this.taskStatus = data;
      })
      .catch(error => {
        console.log(error);
      });
    },
    fetchTasks(){
      axios.get('http://localhost:3000/tasks')
      .then(response => {
        const data = response.data;
        this.tasks = data;
        console.log(this.tasks)
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>