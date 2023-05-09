<template>
    <nav class="navbar is-black" style="background-color:#393E46;">
        <NavBrand/>
        <div class="navbar-menu">
            <NavStart/>
            <NavEnd/>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBrand from './nav/NavBrand.vue';
import NavEnd from './nav/NavEnd.vue';
import NavStart from './nav/NavStart.vue';

export default defineComponent({
    name: 'NavBar',
    components:{
        NavBrand,
        NavEnd,
        NavStart
    },

})

</script>