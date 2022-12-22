<template>
    <q-banner 
        dense
        inline-actions 
        :class="pgColor"
        class=" list-header text-white text-center">
        <span class="text-bold text-subtitle1"><slot></slot></span>
    </q-banner>

    <hr class="ass">
</template>

<script>
    export default {
        props: ['pgColor']

    }

</script>

<style>
.list-header {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.ass {
    margin-top: 26px;
}
</style>