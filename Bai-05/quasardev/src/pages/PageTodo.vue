<template>
    <q-page class="q-pa-md" >
      <q-list 
      separator
      bordered>

      <q-item 
      v-for="task in tasks"
      :key="task.id"
      @click="task.completed = !task.completed"
      :class="!task.completed ? 'bg-orange-1' : 'bg-pink-4'"
      clickable 
      v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{ 'text-strikethrough' : task.completed }">
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon 
                name="event" 
                size="18px"
                class="q-mr-xs" />
            </div>
              <div class="column">
                <q-item-label 
                  class="row justify-end"
                  caption>
                  {{ task.dueDate }}
                </q-item-label>
      
                <q-item-label
                  class="row justify-end"
                  caption>
                  <smaill>{{ task.dueTime }}</smaill>
                </q-item-label>
              </div>
          </div>
        </q-item-section>

      </q-item>

    </q-list>
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
              completed: false,
              dueDate: '10/03/1999',
              dueTime: '18:30'
            },
            {
              id: 2,
              name: 'Get pananas',
              completed: false,
              dueDate: '20/10/2004',
              dueTime: '02:20'
            },
            {
              id: 3,
              name: 'Get apples',
              completed: false,
              dueDate: '12/12/2002',
              dueTime: '12:00'
            }
          ]
        }
      }
    }
  
  </script>
  
    <style>
      .text-strikethrough {
        text-decoration: line-through;
      }
    </style>