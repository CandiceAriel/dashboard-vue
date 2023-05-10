<template>
  <div class='c-kanban__column'>
    <p class='c-kanban__column-status'>{{title}}</p>
    <div v-for="item in tasks" :key="item.id">
      <KanbanCard :title="item.title" :taskStatus="item.task_status" />
    </div>
  </div>
</template>
<script>
import KanbanCard from './Card.vue';

export default {
  name:'KanbanColumn',
  components: {
    KanbanCard
  },
  props: {
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
  }
}
</script>