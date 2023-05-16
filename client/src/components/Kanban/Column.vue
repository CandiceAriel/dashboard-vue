<template>
  <div class='c-kanban__column'>
    <div class='c-kanban__column-header' v-if="id === 1">
      <p class='c-kanban__column-status'>{{title}}</p>
      <img src='../../assets/images/plus-icon.svg' class='c-kanban__icon' @click="addTask(id)"/>
    </div>
    <div class='c-kanban__column-header' v-else>
      <p class='c-kanban__column-status'>{{title}}</p>
    </div>
    <div v-for="item in tasks" :key="item.id">
      <KanbanCard :title="item.title" :taskStatus="item.task_status" :taskId="item.id"/>
    </div>
  </div>
</template>
<script>
import KanbanCard from './Card.vue';

export default {
  name:'KanbanColumn',
  emits: ['change-status'] ,
  components: {
    KanbanCard
  },
  props: {
    id: Number,
    title: String,
    tasks: Array
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
    addTask(id){
      console.log(id)
    }
  }
}
</script>