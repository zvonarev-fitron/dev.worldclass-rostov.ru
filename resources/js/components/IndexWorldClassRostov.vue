<template>
<div class="vuelux_fon">
    <vue-flux :options="fluxOptions" :images="fluxImages" :transitions="fluxTransitions" :captions="fluxCaptions" ref="slider" class="vueflux">
        <flux-caption slot="caption"></flux-caption>
        <flux-controls slot="controls"></flux-controls>
        <flux-index slot="index"></flux-index>
        <flux-pagination slot="pagination"></flux-pagination>
    </vue-flux>
</div>
</template>

<script>
    import VueFlux from './flux/VueFlux';
    import FluxCaption from './flux/FluxCaption.vue';
    import FluxControls from './flux/FluxControls.vue';
    import FluxIndex from './flux/FluxIndex.vue';
    import FluxPagination from './flux/FluxPagination.vue';
    import Transitions from './flux/transitions/index.js';
    import FluxParallax from './flux/FluxParallax.vue';

    export default {
        name: "IndexWorldClassRostov",
        components: {
            VueFlux,
            FluxCaption,
            FluxControls,
            FluxIndex,
            FluxPagination,
            Transitions,
            FluxParallax,
        },
        data: () => ({
            rendered: false,
            baseTransitionClass: 'text-center whitespace-no-wrap block border border-grey-light rounded text-white cursor-pointer py-2 px-4 shadow-md',
            activeTransitionClass: 'bg-black',
            inactiveTransitionClass: 'bg-grey-darkest hover:bg-black',
            fluxOptions: {
                autoplay: true,
                bindKeys: true,
                fullscreen: true
            },
            fluxImages: [
                '/files/680x402_GrafPark_WCL.jpg',
                '/files/680X402_Strip_plastik_Ex_WCL.jpg',
                '/files/1280x720_WCL_HOT-FITNESS-SALE_25-50.jpg',
                '/files/dorojki_WCl_Pilates.jpg',
                '/files/photo_2018-08-01_17-53-15.jpg'
            ],
            fluxTransitions: Transitions,
            fluxCaptions: [ 'First caption', 'Second caption', undefined, 'Fourth caption' ]
        }),
        computed: {
            currentTransition: function() {
                if (!this.rendered || !this.$refs.slider || !this.$refs.slider.transition)
                    return undefined;
                return this.$refs.slider.transition.current;
            }
        },
        mounted() {
            this.rendered = true;
        },
        methods: {
            showNext(transition) {
                this.$refs.slider.showImage('next', transition);
            },
            transitionClass(transition) {
                let tClass = this.baseTransitionClass;
                if (this.currentTransition === transition)
                    tClass += ' '+ this.activeTransitionClass;
                else
                    tClass += ' '+ this.inactiveTransitionClass;
                return tClass;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vuelux_fon{
        width: 100%;
        background-color: #f5f6f6;
        .vueflux {
            margin: auto;
            @media (min-width: 85.375em) { width: 1340px; }
            @media (min-width: 64em) and (max-width: 85.375em) { width: 985px; }
            @media (max-width: 64em) and (min-width: 48em){ width: 730px; }
        }
    }
</style>
