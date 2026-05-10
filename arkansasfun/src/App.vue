<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(false);
</script>

<template>
  <v-app>
    <!-- Top bar -->
    <v-app-bar color="orange" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <img
        src="./assets/images/company.png"
        alt="Logo"
        height="60"
        width="60"
        class="mr-0"
      />

      <v-toolbar-title>Arkansas' Fun</v-toolbar-title>

      <!-- Quick links in top bar -->
      <v-spacer />
      <v-btn to="/" variant="text">Home</v-btn>
      <v-btn to="/about" variant="text" prepend-icon="mdi-compass-outline">
        About
      </v-btn>
      <v-btn to="/contact" variant="text" prepend-icon="mdi-email-outline">
        Contact
      </v-btn>
      <v-btn to="/license" variant="text">License</v-btn>
      <v-btn to="/info" variant="text">Info</v-btn>
    </v-app-bar>

    <!-- Side drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item to="/" title="Home" prepend-icon="mdi-home" />
        <v-list-item
          to="/about"
          title="About"
          prepend-icon="mdi-compass-outline"
        />
        <v-list-item
          to="/contact"
          title="Contact"
          prepend-icon="mdi-email-outline"
        />
        <v-list-item
          to="/license"
          title="License"
          prepend-icon="mdi-file-document"
        />
        <v-list-item
          to="/info"
          title="Info"
          prepend-icon="mdi-information-outline"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Page content -->
    <v-main>
      <router-view />
    </v-main>

    <v-footer class="app-footer px-4 py-2" color="orange">
      <div class="footer-row w-100">
        <div class="footer-left">
          <img
            src="./assets/images/company.png"
            alt="Arkansas' Fun logo"
            height="24"
            width="24"
            class="footer-logo mr-2"
          />
        </div>

        <div class="footer-copy text-body-2 text-center">
          &copy; 2026 Arkansas Fun. All rights reserved.
        </div>

        <div class="footer-contact text-body-2 text-right">
          <div>Little Rock, Arkansas</div>
          <div>(501) 297-8756</div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped>
.app-footer {
  color: #000000;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  width: 100%;
  height: auto; /* Remove fixed min-height */
  padding: 8px 0; /* Add padding for consistent spacing */
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  white-space: normal;
}

.footer-left,
.footer-copy,
.footer-contact {
  display: flex;
  align-items: center;
  color: #000000;
  line-height: 1;
}

.footer-left {
  flex: 0 0 auto;
}

.footer-copy {
  flex: 1 1 auto;
  justify-content: center;
  text-align: center;
  min-width: 0;
}

.footer-contact {
  flex: 0 0 auto;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  font-size: 0.72rem;
}

.footer-logo {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

@media (max-width: 1366px) {
  .footer-row {
    gap: 10px;
  }

  .footer-copy {
    font-size: 0.78rem;
  }
}

@media (max-width: 1024px) {
  .app-footer {
    height: auto; /* Ensure footer height adjusts dynamically */
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .footer-row {
    min-height: auto;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-copy {
    order: 3;
    flex: 1 0 100%;
    justify-content: center;
    font-size: 0.72rem;
  }

  .footer-contact {
    order: 2;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-size: 0.68rem;
    text-align: center;
  }

  .footer-left {
    order: 1;
  }
}

@media (max-width: 900px) {
  .app-footer {
    min-height: auto;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .footer-row {
    min-height: auto;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-copy {
    font-size: 0.72rem;
    order: 3;
    flex: 1 0 100%;
    justify-content: center;
  }

  .footer-contact {
    order: 2;
    flex: 0 1 auto;
    font-size: 0.68rem;
    text-align: center;
    align-items: center;
    flex-direction: row;
    gap: 8px;
  }

  .footer-left {
    order: 1;
  }
}

@media (max-width: 600px) {
  .footer-row {
    justify-content: center;
  }

  .footer-copy {
    font-size: 0.68rem;
  }

  .footer-contact {
    font-size: 0.64rem;
    flex-direction: column;
    gap: 2px;
  }
}
</style>
