<template>
    <a class="navbar-brand p-2" href="#">
        <span class="navbar-item">
            <font-awesome-icon :icon="['fas', 'cube']" :style="styles" />
        </span>
        <div role="button" class="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBrand',
    data(){
        return{
            styles:{
                color: '#00ADB5',
                fontSize: '1.5rem'
            }
        }
    },
    components:{},

})

</script>