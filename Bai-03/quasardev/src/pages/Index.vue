<template>
  <q-page padding >
    <ul>
      <task 
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :index="index">{{ task.name }}
      </task>
      <button @click="deleteTask">x</button>
    </ul>
  </q-page>
</template>


<script>

export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          dueDate: '10/03/1999',
          dueTime: '14:00'
        },
        {
          id: 2,
          name: 'Get bananas',
          dueDate: '10/03/1999',
          dueTime: '18:30'
        },
        {
          id: 3,
          name: 'Get apples',
          dueDate: '10/03/1999',
          dueTime: '08:40'
        }
      ]
    }
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  },
  components: {
    'task' : require('components/Task.vue').default
  }
}

</script>

  <style>

  </style>