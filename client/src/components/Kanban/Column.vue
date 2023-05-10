<template>
  <div class='c-kanban__column'>
    <p class='c-kanban__column-status'>{{title}}</p>
  </div>
</template>
<script>
export default {
  name:'KanbanColumn',
  props: {
    title: String
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