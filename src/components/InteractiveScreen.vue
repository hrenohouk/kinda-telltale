<template>
    <div class="interactive-screen">
        <div class="interactive-screen__task" v-html="screen.text" />
        <div class="interactive-screen__interactive">
            <div v-if="screen.timerFailedScreen" class="interactive-screen__timer">{{ timeLeft }}</div>
            <img
                class="image"
                :src="screenImage"
            >
            <div
                v-for="(option, index) in screen.options"
                :key="index"
                class="option"
                :style="{
                    top: `${option.top}%`,
                    left: `${option.left}%`,
                    width: `${option.width}%`,
                    height: `${option.height}%`
                }"
                @click="goToNext(option)"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InteractiveScreen',
        props: {
            screen: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                timePassed: 0
            };
        },
        computed: {
            screenImage() {
                return require(`@/assets/images/${this.screen.image}`);
            },
            timeLeft() {
                return 10 - this.timePassed;
            }
        },
        created() {
            if (this.screen.timerFailedScreen) {
                this.startTimer();
            }
        },
        methods: {
            goToNext(option) {
                this.$emit('goToNext', option.goTo);
            },
            startTimer() {
                const timeout = () => {
                    setTimeout(() => {
                        this.timePassed++;
                        if (this.timeLeft === 0) {
                            this.onTimerDone();
                        } else {
                            timeout();
                        }
                    }, 1000);
                };
                timeout();
            },
            onTimerDone() {
                this.$emit('goToNext', this.screen.timerFailedScreen);
            }
        }
    };
</script>

<style lang="scss">
    .interactive-screen {
        width: 100%;
        height: 100%;

        &__task {
            font-size: 36px;
            font-weight: 600;
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
        }

        &__interactive {
            position: relative;
            width: 100%;

             .image {
                width: 100%;
            }
        }

        &__timer {
            position: absolute;
            left: 0;
            top: 0;
            color: red;
            font-size: 48px;
            font-weight: 600;
        }

        .option {
            position: absolute;
            cursor: pointer;
            border: 2px solid red;
        }
    }
</style>
