<template>
  <div class='c-kanban__card'>
    <p class='c-kanban__column-status c-kanban__card-title'>{{title}}</p>
    <div class='c-kanban__card-status' :class="{ 'c-kanban__card-status_todo' : taskStatus === 1, 'c-kanban__card-status_in-progress' : taskStatus === 2}" @click="updateStatus(taskId)">
      <span v-if="taskStatus === 1">To Do</span>
      <span v-if="taskStatus === 2">In Progress</span>
      <img src='../../assets/images/arrow-down-icon.svg' class='c-kanban__card-status-icon' />
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name:'KanbanCard',
  props: {
    taskId: Number,
    title: String,
    taskStatus: Number,
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
    updateStatus(taskId){
      axios.put("http://localhost:3000/update", { tId: taskId })
      .then(response => {
        console.log(response)
        this.$parent.$emit('change-status', taskId);
      })
      .catch(error => {
        console.log(error);
      });
    },
  }
}
</script>