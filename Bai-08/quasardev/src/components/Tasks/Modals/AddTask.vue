<template>
  <q-card>
    <q-card-section class="row">
        <div class="text-h6">Add Task</div>
        <q-space />
        <q-btn 
            flat 
            round 
            dense 
            icon="close" />
    </q-card-section>

    <form @submit.prevent="submitForm">
        <q-card-section>
            <div class="row q-mb-sm" >
                <q-input 
                    outlined 
                    v-model="taskToSubmit.name" 
                    :rules="[val => !!val || 'Field is required']"
                    label="Task Name"
                    ref="name"
                    class="col" >

                    <template v-slot:append>
                        <q-icon 
                            v-if="taskToSubmit.name"
                            name="close" 
                            class="cursor-pointer" 
                            @click="taskToSubmit.name = ''" />
                    </template>
                </q-input>
            </div>

            <div class="row q-mb-sm">
                <q-input 
                    outlined 
                    label="Due Date"
                    v-model="taskToSubmit.dueDate" >
                    <template v-slot:append>
                        <q-icon 
                            v-if="taskToSubmit.dueDate"
                            name="close" 
                            class="cursor-pointer" 
                            @click="clearDueDate" />
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy>
                                <q-date v-model="taskToSubmit.dueDate"/>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>

            <div class="row q-mb-sm">
                <q-input 
                    outlined
                    label="Due Time"
                    v-model="taskToSubmit.dueTime" >
                    <template v-slot:append>
                        <q-icon 
                            v-if="taskToSubmit.dueTime"
                            name="close" 
                            class="cursor-pointer" 
                            @click="taskToSubmit.dueTime = ''" />
                        <q-icon name="access_time" class="">
                            <q-popup-proxy>
                            <q-time v-model="taskToSubmit.dueTime" />
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
        </q-card-section>
        
        <q-card-actions align="right">
            <q-btn 
            label="Save" 
            color="primary" 
            type="submit" />
        </q-card-actions>
    </form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            taskToSubmit: {
                name: "",
                dueDate: "",
                dueTime: "",
                completed: false
            },
        };
    },
    methods: {
        ...mapActions('tasks', []),
        submitForm() {
            this.$refs.name.validate()
            if (!this.$refs.name.hasError) {
                this.submitTask()
            }
        },
        submitTask() {
            this.addTask(this.taskToSubmit)
            this.$emit('close')
        },
        clearDueDate() {
            this.taskToSubmit.dueDate = ''
            this.taskToSubmit.dueTime = ''
        }
    }

}
</script>


<style>
</style>
