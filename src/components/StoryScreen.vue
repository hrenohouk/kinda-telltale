<template>
    <div class="story-screen">
        <img
            class="story-screen__image"
            :src="screenImage"
        >
        <div
            class="story-screen__text"
            v-html="screen.text"
        />
        <div class="story-screen__options">
            <div
                v-for="(option, index) in screen.options"
                :key="index"
                class="option"
                v-html="option.text"
                @click="goToNext(option)"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StoryScreen',
        props: {
            screen: {
                type: Object,
                required: true
            }
        },
        computed: {
            screenImage() {
                return require(`@/assets/images/${this.screen.image}`);
            }
        },
        methods: {
            goToNext(option) {
                this.$emit('goToNext', option.goTo);
            }
        }
    };
</script>

<style lang="scss">
    .story-screen {
        width: 100%;
        height: 100%;

        &__image {
            width: 100%;
        }

        &__text {
            width: 90%;
            margin: 0 auto;
            padding: 20px 0;
        }

        &__options {
            display: flex;
            width: 90%;
            flex-wrap: wrap;
            margin: 0 auto;
            padding-bottom: 20px;

            .option {
                border: 1px solid #000;
                font-weight: bold;
                border-radius: 8px;
                padding: 20px 40px;
                margin: 10px;
                cursor: pointer;

                &:hover {
                    background: #fcfcfc;
                }
            }
        }
    }
</style>
