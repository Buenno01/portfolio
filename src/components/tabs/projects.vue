<template>
  <div class="tile is-ancient is-vertical">
    <div class="tile is-parent">
      <projectsCard />
      <projectsCard />
      <projectsCard />
    </div>
    <div class="tile is-parent">
      <projectsCard />
      <projectsCard />
      <projectsCard />
    </div>
  </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';
import projectsCard from './projectsCard.vue';

export default defineComponent({
  name: 'projectsContent',
  components: {
    projectsCard
  }
})
</script>