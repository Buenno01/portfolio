<template>
<div class="tabs is-centered mt-6">
    <tabsMenu/>
</div>
<tabsContent/>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import tabsMenu from './tabs/tabsMenu.vue';
import tabsContent from './tabs/tabsContent.vue';

export default defineComponent({
    name: 'tabsBody',
    components:{
        tabsMenu,
        tabsContent,
    },
})

</script>