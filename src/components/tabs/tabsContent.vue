<template>
    <div class="container is-max-desktop">
    <aboutMe class=""
    />
    <projectsContent/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import aboutMe from './aboutMe.vue';
import projectsContent from './projects.vue';

export default defineComponent({
    name: 'tabsContent',
    components:{
        aboutMe,
        projectsContent,
    }
})

</script>

<style scoped>
.container.is-max-desktop{
    max-width: 50%;
}
</style>