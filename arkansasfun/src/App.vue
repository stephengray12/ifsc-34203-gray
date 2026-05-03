<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>

<template>
  <v-app>
    <!-- Top bar -->
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Arkansas' Fun</v-toolbar-title>

      <!-- Quick links in top bar -->
      <v-spacer />
      <v-btn to="/" variant="text">Home</v-btn>
      <v-btn to="/about" variant="text">About</v-btn>
      <v-btn to="/contact" variant="text">Contact</v-btn>
      <v-btn to="/license" variant="text">License</v-btn>
      <v-btn to ="/info" variant="text">Info</v-btn>
    </v-app-bar>

    <!-- Side drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item to="/" title="Home" prepend-icon="mdi-home" />
        <v-list-item to="/about" title="About" prepend-icon="mdi-information" />
        <v-list-item to="/contact" title="Contact" prepend-icon="mdi-contact-mail" />
        <v-list-item to="/license" title="License" prepend-icon="mdi-file-document" />
        <v-list-item to="/info" title="Info" prepend-icon="mdi-information-outline" />
      </v-list>
    </v-navigation-drawer>

    <!-- Page content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>