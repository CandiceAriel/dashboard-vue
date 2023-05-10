<template>
  <div class='c-kanban__card'>
    <p class='c-kanban__column-status c-kanban__card-title'>{{title}}</p>
    <div>
      <span v-if="taskStatus === 1">To Do</span>
      <span v-if="taskStatus === 2">In Progress</span>
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