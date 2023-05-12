<template>
  <div class='c-kanban__card'>
    <p class='c-kanban__column-status c-kanban__card-title'>{{title}}</p>
    <div class='c-kanban__card-status' :class="{ 'c-kanban__card-status_todo' : taskStatus === 1, 'c-kanban__card-status_in-progress' : taskStatus === 2}">
      <span v-if="taskStatus === 1">To Do</span>
      <span v-if="taskStatus === 2">In Progress</span>
      <img src='../../assets/images/arrow-down-icon.svg' class='c-kanban__card-status-icon' />
    </div>
  </div>
</template>
<script>
export default {
  name:'KanbanCard',
  props: {
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
  }
}
</script>