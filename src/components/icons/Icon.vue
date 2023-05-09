<template>
    <span class="icon is-medium mr-1">
        <font-awesome-icon :icon="iconCode" :style="styles" />
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IconConstructor',
    props:{
        iconCode:{
            type: Array,
            required: true
        },
        styles:{
            type: Object,
            required: true
        }
    }
})

</script>