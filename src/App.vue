<template>
    <div id="app">
        <component
            :is="currentScreen.type"
            :screen="currentScreen"
            @goToNext="goToNext"
        />
    </div>
</template>

<script>
    import * as Screens from './components';
    export default {
        name: 'App',
        components: {
            ...Screens
        },
        computed: {
            ...mapState(['structure', 'currentScreen'])
        },
        methods: {
            goToNext(nextScreen) {
                const newScreen = this.structure.find(screen => {
                    return screen.name === nextScreen;
                });

                this.SET_NEW_SCREEN(newScreen);
            },
            ...mapMutations(['SET_NEW_SCREEN'])
        }
    };
</script>

<style lang="scss">
    .test {

    }
</style>
