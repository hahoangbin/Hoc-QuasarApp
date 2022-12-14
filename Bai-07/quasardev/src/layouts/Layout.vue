<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
        v-for="nav in navs"
        :key="nav.lable"
        :to="nav.to"
        :icon="nav.icon" 
        :label="nav.label" />

      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      content-class="light-green-5"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <q-item 
            v-for="nav in navs"
            :key="nav.lable"
            :to="nav.to" 
            class="text-grey-10"
            exact
            clickable> 
            <q-item-section avatar>
              <q-icon :name="nav.icon"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ nav.label }}</q-item-label>
            </q-item-section>
          </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MyLayout',

  data () {

    return {
      
      leftDrawerOpen: this.$q.platform.is.desktop,

      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon:'settings',
          to: '/settings'
        },
        {
          label: 'About',
          icon:'info',
          to: '/about'
        }
      ]
    }
  },
  methods: {

  }
})
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: block;
    }
  }

  .q-drawer {
    .q-router-link--exact-active {
      color: #1976d2 !important;
    }
  }
</style>