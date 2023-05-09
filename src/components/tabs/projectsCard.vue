<template>
    <div class="tile is-child">
        <div class="card mx-1">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">Título</p>
                    </div>
                </div>

                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                    <br>
                    <div>
                        <span class="content">
                            <tagsIcon/>
                        </span>
                    </div>
                    <br>
                    <div>
                        <a class="icon is-small"><font-awesome-icon :icon="['fab', 'github']"
                                style="color: #00ADB5; font-size: 1rem" /></a>
                        <a class="icon is-small"><font-awesome-icon :icon="['fas', 'book']"
                                style="color: #00ADB5; font-size: 1rem" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import tagsIcon from '../icons/tagIcon.vue';

export default defineComponent({
    name: 'projectsCard',
    components:{
        tagsIcon
    }
})

</script>