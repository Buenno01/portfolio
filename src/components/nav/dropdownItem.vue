<template>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
            Find me
        </a>
        <div class="navbar-dropdown is-boxed">
            <a
            v-for="item in links"
            :key="item.index"
            class="navbar-item" v-bind:href="item.link" target="_blank">
                <font-awesome-icon class="mr-1" v-bind:icon="item.icon" :style="styles" />
                {{item.title}}
            </a>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'dropdownItem',
    data() {
        return {
            styles: {
                color: '#00ADB5'
            },
            links: [{
                index:1,
                title: "LinkedIn",
                link: "https://www.linkedin.com/in/viniciusbcosta/",
                icon: ['fab', 'linkedin-in']
            }, {
                index:2,
                title: "Instagram",
                link: "https://www.instagram.com/viniciusbuenoc/",
                icon: ['fab', 'instagram']
            }, {
                index:3,
                title: "Behance",
                link: "https://www.behance.net/vinciubuenoc",
                icon: ['fab', 'behance']
            }, {
                index:4,
                title: "GitHub",
                link: "https://github.com/Buenno01",
                icon: ['fab', 'github']
            }, {
                index:5,
                title: "E-mail",
                link: "mailto:buenov535@gmail.com",
                icon: ['far', 'envelope']
            }]
        }
    }
})

</script>