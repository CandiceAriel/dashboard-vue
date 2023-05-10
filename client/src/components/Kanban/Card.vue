<template>
  <div class='c-kanban__card'>
    <p class='c-kanban__card'>{{title}}</p>
  </div>
</template>
<script>
export default {
  name:'KanbanCard',
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