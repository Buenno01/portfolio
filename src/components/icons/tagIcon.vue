<template>
    <span class="content is-flex">
        <IconConstructor
        :iconCode="['fab', 'vuejs']"
        :styles="styles"
        />
        <IconConstructor
        :iconCode="['fab', 'square-js']"
        :styles="styles"
        />
        <IconConstructor
        :iconCode="['fab', 'css3-alt']"
        :styles="styles"
        />
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconConstructor from './Icon.vue'

export default defineComponent({
    name: 'tagsIcon',
    data(){
        return{
            styles:{
                fontSize: '1.5rem',
                color:'inherit'
            }
        }
    },
    components:{
        IconConstructor
    },
    props:{
        displayVue: Boolean,
        displayJs: Boolean,
        displayCss: Boolean,
        displayHtml: Boolean
    },

})

</script>