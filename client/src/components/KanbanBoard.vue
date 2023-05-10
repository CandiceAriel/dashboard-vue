<template>
  <div class='c-kanban-board'>
    <h1>Kanban</h1>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'KanbanBoard',
  components: {
  },
  data(){
    return{
      status: [],
    }
  },
  mounted() {
   this.getStatus();
  },
  computed: {
  },
  methods: {
    getStatus(){
      axios.get("http://localhost/3001/task-status")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
          } else {
              this.errorStatus = error.response.data.message;
          }
        }
      ); 
    }
  }
}
</script>