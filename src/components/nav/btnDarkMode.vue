<template>
    <button type="button" class=" button is-ghost is-flex is-align-items-center">
        <span class="icon is-small">
            <font-awesome-icon :icon="['far', 'sun']" style="color: #ffffff;" />
        </span>
        <div class="is-flex is-align-items-center">
            <p></p>
        </div>
        <span class="icon is-small">
            <font-awesome-icon :icon="['fas', 'moon']" style="color: #ffffff;" />
        </span>
    </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'btnDarkMode',
    components: {},

})

</script>

<style scoped>
div{
    background: rgba(red, green, blue, 0);
    border: 0.15rem solid rgba(255, 255, 255, 1);
    border-radius: 999px;
    width: 3rem;
    height: 1.3rem;
    padding: 0;
}

p{
    border-radius: 999px;
    height: 0.8rem;
    width: 0.8rem;
    background-color: #fff;
    margin: 0 0.2rem;
}

</style>