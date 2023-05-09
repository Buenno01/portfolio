<template>
  <div class="navbar-start">
    <dropdownItem/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import dropdownItem from './dropdownItem.vue';

export default defineComponent({
  name: 'NavStart',
  components: {
    dropdownItem
  },
  data() {
    return {}
  },

})

</script>