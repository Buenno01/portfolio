<template>
    <li>
        <a>
            <span class="icon is-small"><font-awesome-icon :icon="iconCode" :style="styles" /></span>
            <span>{{title}}</span>
        </a>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'tabsMenuItem',
    props:{
        styles: Object,
        iconCode: Array,
        title: String
    }
})

</script>