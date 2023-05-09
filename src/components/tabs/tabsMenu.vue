<template>
    <ul>
        <tabsMenuItem
        class="is-active"
        :styles="styles"
        :iconCode="['fas', 'user']"
        title="About me"
        />
        <tabsMenuItem
        :styles="styles"
        :iconCode="['fas', 'bars-progress']"
        title="Projects"
        />
        <tabsMenuItem
        :styles="styles"
        :iconCode="['fas', 'book']"
        title="Studies"
        />
        <tabsMenuItem
        :styles="styles"
        :iconCode="['fas', 'file']"
        title="Resume"
        />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import tabsMenuItem from './tabsMenuItem.vue';

export default defineComponent({
    name: 'tabsMenu',
    components:{
        tabsMenuItem,
    },
    data(){
        return{
            styles:{
                color: '#00ADB5',
                fontSize: '1rem'
            }
        }
    },
    methods:{
    }
})

</script>

<style scoped>
</style>