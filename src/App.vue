<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <Modal id="blog-modal">
    <template #title> {{activeBlog.title}} | {{activeBlog.creator.name}}</template>
    <template #body>{{activeBlog.body}}</template>
  </Modal>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      activeBlog: computed(() => AppState.activeBlog),
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
