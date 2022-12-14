<template>
    <li>
        <div><slot></slot> {{( index )}}</div>
        <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
        <button @click="deleteTask">x</button>
    </li>
</template>
    
<script>
    export default {
        props: ['task', 'index', ]
    }

</script>

<style>

</style>
