<template>
  <NavBar/>
  <tabsBody/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import tabsBody from './components/Tabs.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    tabsBody,
  }
});
</script>

<style>
</style>
<!-- 222831
393E46
00ADB5
EEEEEE -->