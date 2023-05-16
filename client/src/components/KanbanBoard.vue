<template>
  <div class='c-kanban__board'>
    <!-- <KanbanColumn v-for="item in taskStatus"
      :key="item.id"
      :title="item.status"
      v-bind:tasks="item.id === 1 ? filterToDo : item.id === 2 ? filterInProgress : item.id === 3 ? filterOnReview : item.id === 4 ? filterDone : tasks "
    /> -->
    <KanbanColumn v-for="item in taskStatus"
      :key="item.id"
      :title="item.status"
      :id="item.id"
      v-bind:tasks="filterTask(item.id)"
      @change-status="fetchTasks"
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
    filterToDo() {
      let toDos = this.tasks;
      
      toDos = toDos.filter((item) => {
        return (item.task_status === 1)
      })
      
      return toDos;
    },
    filterInProgress() {
      let doing = this.tasks;
      
      doing = doing.filter((item) => {
        return (item.task_status === 2)
      })
      
      return doing;
    },
    filterOnReview() {
      let onReview = this.tasks;
      
      onReview = onReview.filter((item) => {
        return (item.task_status === 3)
      })
      
      return onReview;
    },
    filterDone() {
      let dones = this.tasks;
      
      dones = dones.filter((item) => {
        return (item.task_status === 4)
      })
      
      return dones;
    },
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
      })
      .catch(error => {
        console.log(error);
      });
    },
    filterTask(id){
      let filteredTask = this.tasks;

      filteredTask = filteredTask.filter((t) => {
        return (t.task_status === id);
      })

      return filteredTask;
    }
  },
}
</script>