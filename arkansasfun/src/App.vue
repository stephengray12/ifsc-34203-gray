<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>

<template>
  <v-app>
    <!-- Top bar -->
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>My App</v-toolbar-title>

      <!-- Quick links in top bar -->
      <v-spacer />
      <v-btn to="/" variant="text">Home</v-btn>
      <v-btn to="/about" variant="text">About</v-btn>
    </v-app-bar>

    <!-- Side drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item to="/" title="Home" prepend-icon="mdi-home" />
        <v-list-item to="/about" title="About" prepend-icon="mdi-information" />
      </v-list>
    </v-navigation-drawer>

    <!-- Page content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>