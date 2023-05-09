<template>
    <div class="navbar-end is-align-items-center">
        <btnDarkMode style="background: rgba(red, green, blue, 0);" />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import btnDarkMode from './btnDarkMode.vue';

export default defineComponent({
    name: 'NavEnd',
    components: {
        btnDarkMode,
    },

})

</script>